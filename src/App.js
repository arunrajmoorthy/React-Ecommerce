import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';


import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar> </Navbar>
        <Switch>
            <Route exact path="/" component={ProductList}>
            </Route>
            <Route path="/details" component={Details}>
            </Route>
            <Route path="/Cart" component={Cart}>
            </Route>
            <Route component={Default}>
            </Route>
        </Switch>
        <Modal />
        {/* <Cart> </Cart>
        <Default> </Default> */}
      </React.Fragment>
    );
  }
}



export default App;
