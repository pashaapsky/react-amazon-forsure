import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import '../scss/header.scss'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "../context/stateProvider";
import {auth} from "../config/firebase";
import Navbar from "react-bootstrap/Navbar";

function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    useEffect(() => {
    });

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };

    return (
        <div className="header">
            <Navbar className="header__nav" variant="dark" expand="md">
                <NavLink exact to="/">
                    <img
                        className="header__logo"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt="Amazon logo"
                    />
                </NavLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse className="header__nav-collapse" id="basic-navbar-nav">
                    <div className="header__search">
                        <input
                            className="header__search-input"
                            type="text"
                        />

                        <SearchIcon className="header__search-icon"/>
                    </div>

                    <div className="header__menu">
                        <NavLink className="header__link" to={user ? "" : "/login"}>
                            <div className="header__option" onClick={handleAuthentication}>
                                <span className="header__span-one">
                                    {user ? user.email : 'Hello Guest'}
                                </span>

                                <span className="header__span-two">
                                    {user ? 'Sign Out' : 'Sign In'}
                                </span>
                            </div>
                        </NavLink>

                        <NavLink className="header__link" to="/orders">
                            <div className="header__option">
                                <span className="header__span-one">
                                    Returns
                                </span>

                                <span className="header__span-two">
                                    & Orders
                                </span>
                            </div>
                        </NavLink>

                        <NavLink className="header__link" to="/">
                            <div className="header__option">
                                <span className="header__span-one">Your</span>

                                <span className="header__span-two">Prime</span>
                            </div>
                        </NavLink>

                        <div className="header__option-basket">
                            <NavLink className="header__link row-link" to="/checkout">
                                <ShoppingBasketIcon/>

                                <span className="header__span-two basket-count">
                            {basket.length}
                        </span>
                            </NavLink>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;