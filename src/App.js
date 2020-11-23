import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import {auth} from "./config/firebase";
import {useStateValue} from "./context/stateProvider";

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
                    <Route path="/login">
                        <Login/>
                    </Route>

                    <Route exact path='/'>
                        <Header/>
                        <Home/>
                        <Products/>
                        <Footer/>
                    </Route>

                    <Route path="/checkout">
                        <Header/>
                        <Checkout/>
                        <Footer/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
