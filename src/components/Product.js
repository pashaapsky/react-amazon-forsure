import React from 'react';
import '../scss/product.scss'

function Product({src, description, price, rating}) {
    return (
        <div className="product">
            <img
                className="product__img"
                src={src}
                alt="specter-image"
            />

            <div className="product__info">
                <p className="product__description">{description}</p>

                <div className="product__price">
                    <span className="product__price-symbol">$</span>
                    <strong className="product__price-whole">{price}</strong>
                </div>

                <div className="product__rating">
                    {Array(rating).fill().map((item, id) => <span key={id}>⭐</span>)}
                </div>
            </div>

            <button className="product__btn">Add to basket</button>
        </div>
    );
}

export default Product;