import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { getClassPrefix } from '../../helpers';
import './ProductSlider.scss';

export interface ProductSliderProps {
    data: any;
}

const ProductSlider = ({
    data
}: ProductSliderProps) => {
    const cls = [
        getClassPrefix('product-slider')
    ]

    return (
        <div className={cls.join(' ')}>
            <Splide
                hasTrack={false}
                options={{
                    arrows: false,
                    pagination: true,
                    autoWidth: true,
                }}
            >
                <SplideTrack>
                    {data?.photos?.map((photo, i) => {
                        return (
                            <SplideSlide key={i}>
                                <span className="slide slide-img">
                                    <img src={photo} alt={"Фото " + i} />
                                </span>
                            </SplideSlide>
                        )
                    })}
                </SplideTrack>
                <div className="slider-info">
                    {!!data.salePercent && (
                        <span className="sale">
                            {data.salePercent}%
                        </span>
                    )}
                    <div className="splide__pagination"></div>
                </div>
            </Splide>
        </div>
    )
}

export default ProductSlider;
