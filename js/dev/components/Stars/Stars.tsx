import React from 'react';
import { getClassPrefix } from '..';
import { createArray } from '../../helpers';
import { Svg } from '../Svg/Svg';

export interface StarsProps {
    className?: string;
    count: number;
    total?: number;
}

export const Stars = ({
    className,
    count,
    total = 5
}: StarsProps) => {
    const cls = [
        getClassPrefix('stars'),
        className
    ]

    const arr = createArray(total);

    return (
        <div className={cls.join(' ')}>
            {arr.map((_, i) => {
                const cls = [
                    'star',
                    i < count ? 'active' : null
                ]
                return (
                    <span className={cls.join(' ')} key={i}>
                        <Svg iconName="star" />
                    </span>
                )
            })}
        </div>
    )
}