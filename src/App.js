import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";

function App() {

  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route exact path='/'>
                      <Header />
                      <Home />
                      <Products />
                      <Footer />
                  </Route>

                  <Route path="/checkout">
                      <Header />
                      <Checkout />
                      <Footer />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
