import React from 'react';
import { Link } from 'react-router-dom';
import { getImgPath } from '../../../helpers';
import { getClassPrefix } from '../../helpers';
import './ProductNav.scss';

export interface ProductNavProps {
    data: any;
}

const ProductNav = ({
    data
}: ProductNavProps) => {
    const cls = [
        getClassPrefix('product-nav'),
    ]

    return (
        <div className={cls.join(' ')}>
            <div className="cards-nav full-width">
                <div className="card">
                    <CardHead count={data.videosCount} icon={getImgPath('svg/video.svg')} />
                    <div className="card-body">
                        Смотреть видеообзоры
                    </div>
                </div>
                <Link className="card" to="/reviews">
                    <CardHead count={data.reviewsCount} icon={getImgPath('svg/comment.svg')} />
                    <div className="card-body">
                        Отзывы покупателей
                    </div>
                </Link>
                <div className="card">
                    <CardHead count={data.questionsCount} icon={getImgPath('svg/help.svg')} />
                    <div className="card-body">
                        Вопросы по модели
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductNav;

const CardHead = ({ count, icon }) => {
    return (
        <div className="card-head">
            <span className="icon">
                <img src={icon} alt="icon" />
            </span>
            <span className="text">{count ? '+' + count : 0}</span>
            <span className="arrow">
                <img src={getImgPath('svg/arrow.svg')} alt="arrow" />
            </span>
        </div>
    )
}