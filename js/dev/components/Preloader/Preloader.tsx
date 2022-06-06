import React from 'react';
import { getClassPrefix } from '..';

export interface PreloaderProps {
    className?: string;
    pagePreloader?: boolean;
}

export const Preloader = ({
    className = '',
    pagePreloader = false
}: PreloaderProps) => {
    const cls = [
        getClassPrefix('preloader'),
        pagePreloader ? getClassPrefix('preloader-full-page') : null,
        className,
    ]

    return (
        <div className={cls.join(' ')}>
            <span></span>
        </div>
    )
}