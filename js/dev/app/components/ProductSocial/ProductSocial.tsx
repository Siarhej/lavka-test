import React from 'react';
import { getImgPath } from '../../../helpers';
import { getClassPrefix } from '../../helpers';
import './ProductSocial.scss';

export interface ProductSocialProps {
    data: any;
}

const ProductSocial = ({
    data
}: ProductSocialProps) => {
    const cls = [
        getClassPrefix('product-social')
    ]


    return (
        <div className={cls.join(' ')}>
            <div className="icons">
                <a href="#" className="icon-item icon-item-like">
                    <img src={getImgPath('svg/heart-stroke.svg')} alt="Оценить" />
                </a>
                <a href="#" className="icon-item icon-item-share">
                    <img src={getImgPath('svg/share.svg')} alt="Поделиться" />
                </a>
            </div>
            <div className="tags">
                {tagsData.map(({ text, icon }, i) => {
                    return (
                        <span className="tag-item" key={i}>
                            <span className="text">
                                {!!icon && <img src={icon} alt="иконка" />}
                                {text}
                            </span>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductSocial;

// в аапишке не нашел теги
const tagsData = [
    {
        text: '#лучше'
    },
    {
        text: 'в наличии'
    },
    {
        text: 'хлопок',
        icon: getImgPath('svg/green-energy.svg')
    },
]