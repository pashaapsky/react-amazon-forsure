import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import '../scss/header.scss'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "../context/stateProvider";

function Header() {
    const [{basket}, dispatch] = useStateValue();

    useEffect(() => {
    });

    return (
        <div className="header">
            <NavLink exact to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon logo"
                />
            </NavLink>

            <div className="header__search">
                <input
                    className="header__search-input"
                    type="text"
                />
                <SearchIcon className="header__search-icon"/>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__span-one">
                        Hello Guest
                    </span>

                    <span className="header__span-two">
                        Sign in
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__span-one">
                        Returns
                    </span>

                    <span className="header__span-two">
                        & Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__span-one">
                        Your
                    </span>

                    <span className="header__span-two">
                        Prime
                    </span>
                </div>
            </div>

            <NavLink to="/checkout">
                <div className="header__option-basket">
                    <ShoppingBasketIcon/>

                    <span className="header__span-two basket-count">
                        {basket.length}
                    </span>
                </div>
            </NavLink>
        </div>
    );
}

export default Header;