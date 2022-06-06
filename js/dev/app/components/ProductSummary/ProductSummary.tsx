import React from 'react';
import { getImgPath } from '../../../helpers';
import { getClassPrefix } from '../../helpers';
import './ProductSummary.scss';

export interface ProductSummaryProps {
    data: any;
}

const ProductSummary = ({
    data
}) => {
    const cls = [
        getClassPrefix('product-summary')
    ]

    return (
        <div className={cls.join(' ')}>
            <div className="info">
                <h5 className="name">{data.name}</h5>
                <div className="kits">
                    {data.kits?.map(({ id, value }, i) => {
                        return (
                            <span key={i}>{value}</span>
                        )
                    })}
                </div>
            </div>
            <div className="accord">
                <div className="accord-head">
                    <div className="price">

                        <span className="current">{data.price?.retail || '-'}₽</span>
                        {!!data.price?.retailOld && (
                            <span className="old">{data.price?.retailOld}₽</span>
                        )}
                    </div>
                    <div className="trigger">
                        <span className="text">Подробнее</span>
                        <span className="icon">
                            <img src={getImgPath('svg/circle-double-arrow.svg')} alt="Подробнее" />
                        </span>
                    </div>
                </div>
                {/* не программирую аккордион, так как нет дизайна */}
                <div className="accord-body">

                </div>
            </div>
        </div>
    )
}

export default ProductSummary;