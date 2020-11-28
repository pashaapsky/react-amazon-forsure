import React, {useEffect, useState} from 'react';
import '../scss/product.scss'
import currencyFormatter from "currency-formatter";
import {useStateValue} from "../context/stateProvider";

function Product({id, src, description, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id, src, description, price, rating
            }
        })
    };

    return (
        <div className="product" id={id}>
            <img
                className="product__img"
                src={src}
                alt="product-image"
            />

            <div className="product__info">
                <p className="product__description">{description}</p>

                <div className="product__price">
                    <strong
                        className="product__price-whole">{currencyFormatter.format(price, {locale: 'en-US'})}</strong>
                </div>

                <div className="product__rating">
                    {Array(rating).fill().map((item, id) => <span key={id}>⭐</span>)}
                </div>
            </div>

            <button
                className="product__btn"
                onClick={addToBasket}
            >
                Add to basket
            </button>
        </div>
    );
}

export default Product;