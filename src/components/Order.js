import React from 'react';
import moment from "moment";
import '../scss/order.scss'
import CheckoutProduct from "./CheckoutProduct";
import currencyFormatter from "currency-formatter";

function Order({order}) {
    return (
        <li className="orders__item order">
            <h2 className="order__header">Order</h2>

            <p className="order__id">
                <strong>{order.id}</strong>
            </p>

            <p className="order__date">
                {moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}
            </p>

            {order.data.basket.map(item => (
                <CheckoutProduct
                    key={Math.random() * 10 ** 10}
                    id={item.id}
                    src={item.src}
                    description={item.description}
                    price={item.price}
                    hideButton
                />
            ))}

            <div className="order__price-details">
                <span className="order__total">Order total: </span>

                <strong className="order__price">
                    {currencyFormatter.format(order.data.amount / 100, {locale: 'en-US'})}
                </strong>
            </div>
        </li>
    );
}

export default Order;