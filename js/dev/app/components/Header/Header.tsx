import React from 'react';
import { getClassPrefix } from '../../helpers';
import './Header.scss';

/**
 * хедер на макете странный, так что делал вставку для каждой страницы отдельно
 */

export interface HeaderProps {
    absolute?: boolean;
    children: React.ReactNode;
}


const Header = ({
    absolute = false,
    children
}: HeaderProps) => {
    const cls = [
        getClassPrefix('header'),
        absolute ? getClassPrefix('header-absolute') : null,
        'full-width'
    ]

    return (
        <div className={cls.join(' ')}>
            {children}
        </div>
    )
}

export default Header;