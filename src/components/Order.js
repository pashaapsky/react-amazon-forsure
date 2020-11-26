import React from 'react';
import moment from "moment";
import '../scss/order.scss'
import CheckoutProduct from "./CheckoutProduct";
import currencyFormatter from "currency-formatter";

function Order({order}) {
    return (
        <div className="order">
            <h2 className="order__header">Order</h2>

            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>

            <p className="order__id">
                <small>{order.id}</small>
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

            <strong className="order__price">
                {currencyFormatter.format(order.data.amount / 100, {locale: 'en-US'})}
            </strong>
        </div>
    );
}

export default Order;