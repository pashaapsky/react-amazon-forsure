import React from 'react';
import '../scss/header.scss'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon logo"
            />

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

            <div className="header__option-basket">
                <ShoppingBasketIcon />

                <span className="header__span-two basket-count">
                    0
                </span>
            </div>
        </div>
    );
}

export default Header;