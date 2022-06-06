import React from 'react';
import { getClassPrefix } from '..';
import { Preloader } from '../Preloader/Preloader';

export interface AjaxWrapperProps {
    className?: string;
    children: React.ReactNode;
    isPending?: boolean;
}

export const AjaxWrapper = ({
    className = '',
    children,
    isPending = false,
}: AjaxWrapperProps) => {
    const cls = [
        getClassPrefix('ajax-wrapper'),
        className
    ]

    return (
        <div className={cls.join(' ')}>
            {isPending ? <Preloader pagePreloader /> : children}
        </div>
    )
}

