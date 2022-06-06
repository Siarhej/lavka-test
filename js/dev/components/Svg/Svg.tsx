//@ts-nocheck
import React from 'react';
import Star from '../../../../img/svg/star.svg';
import Home from '../../../../img/svg/home.svg';
import Burger from '../../../../img/svg/Burger.svg';
import Cart from '../../../../img/svg/Cart.svg';
import User from '../../../../img/svg/User.svg';
import Message from '../../../../img/svg/Message.svg';

export interface SvgProps {
    iconName: string;
}

export const Svg = ({
    iconName
}: SvgProps) => {
    const Icon = icons[iconName];

    if (!Icon) {
        console.error('Icon not found.', iconName);
        return null;
    }

    return <Icon />;
}

const icons = {
    'star': Star,
    'home': Home,
    'burger': Burger,
    'cart': Cart,
    'user': User,
    'message': Message
}

