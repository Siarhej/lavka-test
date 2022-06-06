import React from 'react';
import { Link } from 'react-router-dom';
import { getClassPrefix } from '../../helpers';
import './ProductNavTabs.scss';

const ProductNavTabs = () => {
    const cls = [
        getClassPrefix('product-nav-tabs')
    ]

    return (
        <div className={cls.join(' ')}>
            <div className="tabs full-width">
                <a href="#" className="tab-item">
                    Видеообзоры
                </a>
                <a href="#" className="tab-item active">
                    Отзывы
                </a>
                <a href="#" className="tab-item">
                    Вопросы
                </a>
            </div>
        </div>
    )
}

export default ProductNavTabs;