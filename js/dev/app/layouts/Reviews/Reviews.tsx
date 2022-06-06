import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AjaxWrapper } from '../../../components';
import { getImgPath } from '../../../helpers';
import Header from '../../components/Header/Header';
import ProductNavTabs from '../../components/ProductNavTabs/ProductNavTabs';
import ReviewList from '../../components/ReviewList/ReviewList';
import ReviewSummary from '../../components/ReviewSummary/ReviewSummary';
import { getClassPrefix, handleErrorRequest, handleSuccessRequest } from '../../helpers';
import { getFromSessionStorage, setToSessionStorage } from '../../../helpers';
import { AJAX_PRODUCT_REVIEWS } from '../../servers/actions';
import { getAjaxData, REQUEST_STATUS } from '../../servers/requests';
import { RequestData } from '../../types';
import './Reviews.scss';

/**
 * Полноценное кэширование не делал, так как задача в рамках тестового. Просто раздражал постоянный прелоудер при перезагрузке страницы,
 * то добавил запись данных в сессионку
 */


const Reviews = () => {
    const cache = getFromSessionStorage('REVIEWS');

    const [requestData, setRequestData] = useState<RequestData>({
        status: cache ? REQUEST_STATUS.success : REQUEST_STATUS.pending,
        data: cache,
        msg: ''
    });

    const cls = [
        getClassPrefix('page'),
        getClassPrefix('page-reviews')
    ]

    const data = requestData.data;

    /**
     * Получает данные отзывов продукта
     */
    async function getReviewsData() {
        try {
            const res = await getAjaxData(AJAX_PRODUCT_REVIEWS);
            const json = await res.json();

            if (json.message === 'success' && json.data) {
                handleSuccessRequest(setRequestData, json.data);
                setToSessionStorage('REVIEWS', json.data);
            } else {
                handleErrorRequest(setRequestData);
            }

        } catch (e) {
            handleErrorRequest(setRequestData);
            throw e;
        }
    }

    useEffect(() => {
        getReviewsData();
    }, [])

    return (
        <AjaxWrapper
            className={cls.join(' ')}
            isPending={requestData.status === REQUEST_STATUS.pending}
        >
            {requestData.status === REQUEST_STATUS.error && (<>
                {requestData.msg}
            </>)}
            {requestData.status === REQUEST_STATUS.success && (<>
                <Header>
                    <Link to="/" className="icon icon-prev">
                        <img src={getImgPath('svg/arrow-left.svg')} alt="Назад" />
                    </Link>
                    <h5 className="title">
                        Отзывы
                    </h5>
                </Header>
                <ProductNavTabs />
                <ReviewSummary data={data} />
                <ReviewList data={data} />
            </>)}
        </AjaxWrapper>
    )
}

export default Reviews;