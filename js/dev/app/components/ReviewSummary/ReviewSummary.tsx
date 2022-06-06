import React from 'react';
import { Stars } from '../../../components';
import { declOfNum, getClassPrefix } from '../../helpers';
import './ReviewSummary.scss';

export interface ReviewSummaryProps {
    data: any[]
}

const ReviewSummary = ({
    data
}: ReviewSummaryProps) => {
    const cls = [
        getClassPrefix('review-summary')
    ]

    return (
        <div className={cls.join(' ')}>
            <SummaryHead data={data} />
            <SummaryBody data={data} />
        </div>
    )
}

export default ReviewSummary;

const SummaryHead = ({ data }) => {
    const averageScore = getAverageScore(data);

    return (
        <div className="summary-head">
            <Stars className="stars" count={averageScore} />
            <span className="total">
                {data.length} {declOfNum(data.length, ['отзыв', 'отзыва', 'отзывов'])}
            </span>
        </div>
    )
}

const SummaryBody = ({ data }) => {
    const chars = getChars(data);

    return (
        <div className="summary-body">
            <ul className="list-char">
                {chars.map(({ text, percent }, i) => {
                    return (
                        <li className="list-item" key={i}>
                            <span className="name">{text}</span>
                            <ProgressBar percent={percent} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

const ProgressBar = ({ percent }) => {
    return (
        <div className="progress">
            <span className="line">
                <span style={{ width: percent + '%' }}></span>
            </span>
            <span className="count">
                {percent}%
            </span>
        </div>
    )
}

/**
 * Возвращает округленное среднее значение всех отзывов
 */
const getAverageScore = (data: any[]) => {
    let total = 0;

    data.forEach(({ rating }) => {
        total += (rating || 0);
    })

    return Math.round(total / data.length);
}


/**
 * Возвращает массив из возможных характеристик. Элемент массива равен объекту с ключами
 * text: название характеристики
 * percent: присутствие характеристики в процентах
 */
const getChars = (data: any[]) => {
    const chars = data.map(({ characteristics }) => characteristics);
    const formatedChars = {};

    chars.forEach((item) => item.forEach((name: string) => {
        const key = formatCharKey(name);
        if (!key) return;

        if (formatedChars.hasOwnProperty(key)) {
            formatedChars[key] += 1;
        } else {
            formatedChars[key] = 1;
        }
    }))

    return Object.keys(formatedChars).map((key) => {
        return {
            text: key,
            percent: Math.round(formatedChars[key] * 100 / chars.length)
        }
    })
}


const formatCharKey = (key: string) => {
    key = key.split(': ')[1];
    if (!key) return;
    return key[0].toUpperCase() + key.slice(1);
}