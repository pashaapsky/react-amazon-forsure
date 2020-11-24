import React, {useEffect, useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import axios from '../axios'
import currencyFormatter from "currency-formatter";
import {useStateValue} from "../context/stateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import '../scss/payment.scss'

function Payment() {
    const [{basket, user, totalPrice}, dispatch] = useStateValue();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    const history = useHistory();

    useEffect(() => {
        console.log('getClientSecret', clientSecret);
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${totalPrice * 100}`
            });

            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    const handleSubmitPayment = async (event) => {
        event.preventDefault();

        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
           payment_method: {
               card: elements.getElement(CardElement),
           }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders');
        });
    };

    const handleChange = (event) => {

        //listen for changes in the CardElement
        //and display errors
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <h1 className="payment__header">
                    <NavLink to="/checkout">Checkout ({basket.length} items)</NavLink>
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3 className="payment__heading">Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p className="">{user ? user.email : ''}</p>

                        <p>React Lane</p>

                        <p>Big Love From Russia</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3 className="payment__heading">Review items and delivery</h3>
                    </div>

                    <div className="payment__items">
                        {basket.map(item => {
                            return <CheckoutProduct
                                key={Math.random() * 10 ** 10}
                                id={item.id}
                                src={item.src}
                                price={item.price}
                                description={item.description}
                            />;
                        })}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3 className="payment__heading">Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        <form onSubmit={handleSubmitPayment}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__price-container">
                                Order Total: {currencyFormatter.format(totalPrice, {locale: 'en-US'})}
                            </div>

                            <button type="submit" disabled={processing || disabled || succeeded}>
                                <span>{processing ? <span>Processing</span> : "Buy Now"}</span>
                            </button>
                        </form>
                    </div>

                    {error && <div>{error}</div>}
                </div>
            </div>
        </div>
    );
}

export default Payment;