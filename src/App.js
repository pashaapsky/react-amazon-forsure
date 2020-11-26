import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import {auth} from "./config/firebase";
import {useStateValue} from "./context/stateProvider";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {stripePublishKey} from './config/stripe'


const stripePromise = loadStripe(stripePublishKey);

function App() {
    const [state, dispatch] = useStateValue();

    useEffect(() => {
        //firebase auth listener
        auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in / or was signed in
                dispatch({
                    type: 'SET_USER',
                    user
                })
            } else {
                // No user is signed in / or logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        });

    }, []);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/orders">
                        <Header/>
                        <Orders />
                        <Footer/>
                    </Route>

                    <Route path="/login">
                        <Login/>
                    </Route>

                    <Route path="/checkout">
                        <Header/>
                        <Checkout/>
                        <Footer/>
                    </Route>

                    <Route path="/payment">
                        <Header/>
                        <Elements stripe={stripePromise} >
                            <Payment />
                        </Elements>
                        <Footer/>
                    </Route>

                    <Route exact path='/'>
                        <Header/>
                        <Home/>
                        <Products/>
                        <Footer/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
