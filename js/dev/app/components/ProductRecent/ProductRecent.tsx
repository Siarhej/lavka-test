import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import { getImgPath } from '../../../helpers';
import { getClassPrefix } from '../../helpers';
import './ProductRecent.scss';

const ProductRecent = () => {
    const cls = [
        getClassPrefix('product-recent')
    ]

    return (
        <div className={cls.join(' ')}>
            <h4 className="title">
                Вы недавно смотрели
            </h4>
            <Splide
                options={{
                    arrows: false,
                    pagination: false,
                    autoWidth: true
                }}
            >
                {productData.map((item, i) => {
                    return (
                        <SplideSlide key={i}>
                            <ProductCard data={item} />
                        </SplideSlide>
                    )
                })}

            </Splide>
        </div>
    )
}

export default ProductRecent;

/**
 * В рамках тестовой задачи, дабы не терять лишнее время, не выношу отдельным компонентом, так как он больше нигде не фигурирует. 
 * К тому же для него нет никаких данных с апишки
 */
const ProductCard = ({ data }) => {
    return (
        <div className="product-card">
            <div className="card-img">
                <span className="img">
                    <img src={data.img} alt="Фото" />
                </span>
                <a href="#" className="icon">
                    <img src={getImgPath('svg/heart.svg')} alt="Оценить" />
                </a>
            </div>
            <div className="card-body">
                <div className="info">
                    <div className="price">
                        <span className="current">
                            {data.price.current}
                        </span>
                        <span className="old">
                            {data.price.old}
                        </span>
                    </div>
                    <h5 className="name">
                        {data.name}
                    </h5>
                    <div className="kits">
                        {data.kits.map((item, i) => {
                            return (
                                <span key={i}>{item}</span>
                            )
                        })}
                    </div>
                </div>
                <a href="#" className="add-to-cart">
                    <img src={getImgPath('svg/add-to-cart.svg')} alt="Добавить в корзину" />
                </a>
            </div>
        </div>
    )
}

const productData = [
    {
        img: getImgPath('recent-1.jpg'),
        price: {
            current: 6420,
        },
        name: 'Asv',
        kits: ['Платье']
    },
    {
        img: getImgPath('recent-2.jpg'),
        price: {
            current: 6420,
            old: 6210
        },
        name: 'Anastasia Mak',
        kits: ['Брюки', 'Жакет']
    },
    {
        img: getImgPath('recent-1.jpg'),
        price: {
            current: 6420,
        },
        name: 'Asv',
        kits: ['Платье']
    },
    {
        img: getImgPath('recent-2.jpg'),
        price: {
            current: 6420,
            old: 6210
        },
        name: 'Anastasia Mak',
        kits: ['Брюки', 'Жакет']
    },
    {
        img: getImgPath('recent-1.jpg'),
        price: {
            current: 6420,
        },
        name: 'Asv',
        kits: ['Платье']
    },
    {
        img: getImgPath('recent-2.jpg'),
        price: {
            current: 6420,
            old: 6210
        },
        name: 'Anastasia Mak',
        kits: ['Брюки', 'Жакет']
    }
]

