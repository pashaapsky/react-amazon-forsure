import React, {useEffect} from 'react';
import currencyFormatter from "currency-formatter";
import "../scss/subtotals.scss";
import {useStateValue} from "../context/stateProvider";

function Subtotal() {
    const [{basket, totalPrice}, dispatch] = useStateValue();

    useEffect(() => {

    });

    return (
        <div className="subtotal">
            <span className="subtotal__count">
                Subtotal ({basket.length} items)
            </span>

            <strong className="subtotal__total-price">{currencyFormatter.format(totalPrice, {code: 'USD'})}</strong>

            <label htmlFor="gift-input" className="subtotal__gift">
                <input id="gift-input" type="checkbox"/>&nbsp;This order contains a gift
            </label>

            <button className="subtotal__buy-items orange-btn">Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;