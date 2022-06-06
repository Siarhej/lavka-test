import React from 'react';
import { Svg } from '../../../components';
import { getImgPath } from '../../../helpers';
import { getClassPrefix } from '../../helpers';
import './Footer.scss';

const Footer = () => {
    const cls = [
        getClassPrefix('footer')
    ]

    return (
        <div className={cls.join(' ')}>
            <div className="footer-placeholder"></div>
            <div className="footer-container">
                <ul className="menu">
                    {menuData.map((data, i) => {
                        return (
                            <MenuItem data={data} key={i} />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Footer;

const MenuItem = ({ data }) => {
    const cls = [
        'menu-item',
        data.isActive ? 'active' : null
    ]

    return (
        <li className={cls.join(' ')}>
            <a href="#" className="menu-link">
                <span className="icon">
                    <Svg iconName={data.icon} />
                </span>
                <span className="text">{data.text}</span>
            </a>
        </li>
    )
}

const menuData = [
    {
        text: 'Главная',
        icon: 'home',
    },
    {
        text: 'Каталог',
        icon: 'burger',
        isActive: true
    }, {
        text: 'Корзина',
        icon: 'cart',
    }, {
        text: 'Профиль',
        icon: 'user',
    }, {
        text: 'Контакт',
        icon: 'message',
    }
]