import React, { useEffect, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { AjaxWrapper } from '../../../components';
import { getImgPath } from '../../../helpers';
import Header from '../../components/Header/Header';
import ProductForm from '../../components/ProductForm/ProductForm';
import ProductNav from '../../components/ProductNav/ProductNav';
import ProductRecent from '../../components/ProductRecent/ProductRecent';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import ProductSocial from '../../components/ProductSocial/ProductSocial';
import ProductSummary from '../../components/ProductSummary/ProductSummary';
import { getClassPrefix, getFromSessionStorage, handleErrorRequest, handleSuccessRequest, setToSessionStorage } from '../../helpers';
import { AJAX_PRODUCT } from '../../servers/actions';
import { getAjaxData, REQUEST_STATUS } from '../../servers/requests';
import { RequestData } from '../../types';
import './Product.scss';

/**
 * Полноценное кэширование не делал, так как задача в рамках тестового. Просто раздражал постоянный прелоудер при перезагрузке страницы,
 * то добавил запись данных в сессионку
 */
const cache = getFromSessionStorage('PRODUCTS');

const Product = () => {
    const [requestData, setRequestData] = useState<RequestData>({
        status: cache ? REQUEST_STATUS.success : REQUEST_STATUS.pending,
        data: cache,
        msg: ''
    });

    const cls = [
        getClassPrefix('page'),
        getClassPrefix('page-product')
    ]

    const data = requestData.data;

    /**
     * Получает данные по продукту
     */
    async function getProductData() {
        try {
            const res = await getAjaxData(AJAX_PRODUCT);
            const json = await res.json();

            if (json.message === 'success' && json.data) {
                handleSuccessRequest(setRequestData, json.data);
                setToSessionStorage('PRODUCTS', json.data);
            } else {
                handleErrorRequest(setRequestData);
            }

        } catch (e) {
            handleErrorRequest(setRequestData);
            throw e;
        }
    }

    useEffect(() => {
        getProductData();
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
                <Header absolute>
                    <Link to="/" className="icon icon-prev">
                        <img src={getImgPath('svg/arrow-left.svg')} alt="Назад" />
                    </Link>
                    <span className="icon icon-search">
                        <img src={getImgPath('svg/search.svg')} alt="Искать" />
                    </span>
                </Header>
                <ProductSlider data={data} />
                <ProductSocial data={data} />
                <ProductNav data={data} />
                <ProductSummary data={data} />
                <ProductForm data={data} />
                <ProductRecent />
            </>)}
        </AjaxWrapper>
    )
}

export default Product;