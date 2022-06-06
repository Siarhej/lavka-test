import React from 'react';
import { getClassPrefix } from '..';

export interface ButtonProps {
    className?: string;
    style?: 'white' | 'yellow' | 'brown';
    tag?: keyof JSX.IntrinsicElements;
    href?: string;
    type?: string;
    children: React.ReactNode;
    onClick?: VoidFunction;
}

export const Button = ({
    className,
    style = 'white',
    tag = 'button',
    href,
    children,
    onClick
}: ButtonProps) => {
    const cls = [
        getClassPrefix('button'),
        getClassPrefix('button-' + style),
        className
    ]

    const Component = tag;

    return (
        <Component
            className={cls.join(' ')}
            href={href}
            onClick={onClick}
        >
            {children}
        </Component>
    )
}
