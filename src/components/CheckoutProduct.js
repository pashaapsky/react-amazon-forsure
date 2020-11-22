import React from 'react';
import currencyFormatter from "currency-formatter";
import "../scss/checkout-product.scss"
import {useStateValue} from "../context/stateProvider";

function CheckoutProduct({id, src, description, price}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = (id, price) => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id,
            price
        })
    };

    return (
        <div className="checkout-product" id={id}>
            <div className="checkout-product__body">
                <img
                    className="checkout-product__img"
                    src={src}
                    alt="product-image"
                />

                <div className="checkout-product__info">
                    <a href="#" className="checkout-product__info-link">
                        <p className="checkout-product__description">{description}</p>
                    </a>

                    <span className="checkout-product__stock">In Stock</span>

                    <div className="checkout-product__extra-options">
                        <label className="checkout-product__label">
                            <input className="checkout-product__input" type="checkbox"/>
                            This is a gift
                        </label>

                        <small>
                            <a className="checkout-product__learn-link" href="#">Learn More</a>
                        </small>
                    </div>

                    <div className="checkout-product__actions">
                        <button
                            className="checkout-product__delete-btn option-btn"
                            onClick={() => removeFromBasket(id, price)}
                        >Delete
                        </button>

                        <button className="checkout-product__save-btn option-btn">Save for later</button>

                        <button className="checkout-product__compare-btn option-btn">Compare with similar items</button>
                    </div>
                </div>
            </div>

            <strong className="checkout-product__price">
                {currencyFormatter.format(price, {locale: 'en-US'})}
            </strong>
        </div>
    );
}

export default CheckoutProduct;