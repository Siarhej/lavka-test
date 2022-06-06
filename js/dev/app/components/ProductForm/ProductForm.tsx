import React, { FormEvent, useRef } from 'react';
import { Button } from '../../../components';
import { getImgPath } from '../../../helpers';
import { getClassPrefix } from '../../helpers';
import './ProductForm.scss';

export interface ProductFormProps {
    data: any
}

const ProductForm = ({
    data
}: ProductFormProps) => {
    const cls = [
        getClassPrefix('product-form')
    ]

    // Для получения FormData
    const refForm = useRef();

    function onSubmit(e: FormEvent) {
        e.preventDefault();
    }

    return (
        <form action="#" className={cls.join(' ')} onSubmit={onSubmit}>
            <div className="form-box form-box-select">
                <div className="select-sizes">
                    <div className="headline">
                        <h5 className="title">Размеры:</h5>
                        <a href="#" className="link">
                            Таблица размеров
                        </a>
                    </div>
                    <div className="list full-width">
                        {data.sizes?.map((data, i) => {
                            return (
                                <CheckboxSize data={data} name="size" key={i} />
                            )
                        })}
                    </div>
                </div>
                <div className="select-sizes">
                    <div className="headline">
                        <h5 className="title">Рост:</h5>
                    </div>
                    <div className="list full-width">
                        {data.heights?.map((data, i) => {
                            return (
                                <CheckboxSize data={data} name="height" key={i} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="form-box form-box-button">
                <Button className="btn btn-buy">
                    <span className="icon">
                        <img src={getImgPath('svg/turn-on.svg')} alt="Click!" />
                    </span>
                    <span className="text">Купить в 1 клик</span>
                </Button>
                <Button className="btn btn-to-cart" style="yellow">
                    <span className="icon">
                        <img src={getImgPath('svg/cart.svg')} alt="To cart" />
                    </span>
                    <span className="text">Добавить в корзину</span>
                </Button>
            </div>
            <div className="form-box form-box-color">
                <div className="select-colors">
                    <div className="headline">
                        <h5 className="title">
                            Цвета:
                        </h5>
                    </div>
                    <div className="list full-width">
                        <label className="checkbox checkbox-color">
                            <input type="checkbox" name="colors[]" value="color-2" />
                            <span className="holder"></span>
                            <span className="img">
                                <img src={getImgPath('color-1.png')} alt="Зеленый" />
                            </span>
                        </label>
                        <label className="checkbox checkbox-color">
                            <input type="checkbox" name="colors[]" value="color-2" />
                            <span className="holder"></span>
                            <span className="img">
                                <img src={getImgPath('color-1.png')} alt="Красный" />
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ProductForm;


const CheckboxSize = ({ data, name }) => {
    const isDisabled = data.hasOwnProperty('isActual') && !data.isActual;

    const cls = [
        'checkbox checkbox-size',
        isDisabled ? 'disabled' : null
    ]

    return (
        <label className={cls.join(' ')}>
            <input type="checkbox" name={`${name}[]`} value={data.id} />
            <span className="holder"></span>
            <span className="text">{data.value}</span>
            {isDisabled && (
                <span className="icon">
                    <img src={getImgPath('svg/bell-circle.svg')} alt="Подробнее" />
                </span>
            )}
        </label>
    )
}

