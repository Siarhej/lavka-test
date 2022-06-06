import React from 'react';
import { Stars, Button } from '../../../components';
import { getImgPath } from '../../../helpers';
import { getClassPrefix } from '../../helpers';
import './ReviewList.scss';

export interface ReviewListProps {
    data: any;
}

const ReviewList = ({
    data
}: ReviewListProps) => {
    const cls = [
        getClassPrefix('review-list')
    ]

    return (
        <div className={cls.join(' ')}>
            {data.map((item, i) => {
                return (
                    <div className="review" key={i}>
                        <ReviewHead data={item} />
                        <ReviewBody data={item} />
                        <ReviewFoot data={item} />
                    </div>
                )
            })}
            <Button tag="a" href="#" className="btn-set-review" style="brown">
                <span className="text">
                    Оставить отзыв
                </span>
            </Button>
        </div>
    )
}

export default ReviewList;


const ReviewHead = ({ data }) => {
    const { user, createdDate } = data;
    return (
        <div className="review-head">
            <span className="avatar">
                <img src={user.photo} alt="Аватар" />
            </span>
            <span className="name">
                {user.name}
            </span>
            <span className="date">
                {formatDate(createdDate)}
            </span>
        </div>
    )
}

const ReviewBody = ({ data }) => {
    const { characteristics, rating, value, photos } = data;

    return (
        <div className="review-body">
            {!!characteristics?.length && (
                <div className="chars">
                    {characteristics.map((item, i) => {
                        return (
                            <span key={i}>{item}</span>
                        )
                    })}
                </div>
            )}
            <Stars className="stars" count={rating} />
            <div className="text">
                {value}
            </div>
            {!!photos?.length && (
                <div className="list-img">
                    {photos.map((item, i) => {
                        return (
                            <span className="img" key={i}>
                                <img src={item} alt={"Фото" + i} />
                            </span>
                        )
                    })}
                </div>
            )}
        </div>
    )
}


const ReviewFoot = ({ data }) => {
    const { answers } = data;
    return (
        <div className="review-foot">
            {!!answers.length && (
                <div className="list-answers">
                    {answers.map((item, i) => {
                        return (
                            <Answer data={item} key={i} />
                        )
                    })}
                </div>
            )}
        </div>
    )
}

const Answer = ({ data }) => {
    const { value } = data;
    return (
        <div className="answer">
            <span className="arrow">
                <img src={getImgPath('svg/arrow-corner-up.svg')} alt="Ответ" />
            </span>
            <div className="answer-content">
                <div className="answer-head">
                    <span className="avatar">
                        <img src="" alt="Аватар" />
                    </span>
                    <span className="text">Беллавка</span>
                </div>
                <div className="answer-body">
                    <div className="text">
                        {value}
                    </div>
                </div>
            </div>
        </div>
    )
}


const formatDate = (date: (string | Date)) => {
    date = new Date(date);
    return date.toLocaleDateString();
}