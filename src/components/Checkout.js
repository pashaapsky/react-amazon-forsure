import React from 'react';
import {NavLink} from 'react-router-dom';
import "../scss/checkout.scss"
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "../context/stateProvider";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <nav className="checkout__nav">
                <div className="checkout__nav-left">
                    <a className="checkout__nav-link" href="#">Today`s Deals</a>
                    <a className="checkout__nav-link" href="#">Customer Service</a>
                    <a className="checkout__nav-link" href="#">Gift Cards</a>
                    <a className="checkout__nav-link" href="#">Sell</a>
                    <a className="checkout__nav-link" href="#">Registry</a>
                </div>

                <a
                    className="checkout__nav-link"
                    href="https://blog.aboutamazon.com/company-news/amazons-actions-to-help-employees-communities-and-customers-affected-by-covid-19/?_encoding=UTF8&token=GW&utm_content=COVID-19_roundup&utm_medium=swm&utm_source=gateway&utm_term=gw03162020&ref_=nav_swm_undefined&pf_rd_p=68e45fe7-60f1-4c18-836f-1c33f3f93368&pf_rd_s=nav-sitewide-msg-text-export&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=VARW3DY4WCT2Z61TKBEW"
                    target="_blank">
                    Amazon`s response to COVID-19
                </a>
            </nav>

            <div className="checkout__container">
                <div className="checkout__body">
                    {basket.length ?
                        <>
                            <div className="checkout__left-side">
                                <h2 className="checkout__header">
                                    Shopping Basket
                                </h2>

                                <div className="checkout__products">
                                    {basket.map((item) => {
                                        return (
                                            <CheckoutProduct
                                                key={item.id}
                                                id={item.id}
                                                src={item.src}
                                                description={item.description}
                                                price={item.price}
                                            />
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="checkout__right-side">
                                <Subtotal/>
                            </div>
                        </>
                        :
                        <div className="checkout__left-side">
                            <div className="checkout__empty-basket">
                                <img
                                    className="checkout__empty-img"
                                    src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                                    alt="empty-basket-img"
                                />

                                <div className="checkout__empty-content">
                                    <h2 className="checkout__empty-header">
                                        Your Amazon Basket is empty
                                    </h2>

                                    <a className="checkout__shop-today-link" href="#">Shop today`s deals</a>

                                    <NavLink to="/" className="checkout__go-shop-link orange-btn">Harry up to add
                                        some</NavLink>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Checkout;