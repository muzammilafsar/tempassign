import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './Cart';
import { data } from './cartData';
import Modal from './Modal';
class App extends React.Component {
  state = {
    cart: data.productsInCart
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="container-fluid">
        <Modal  />
        <Cart data={this.state.cart} />
      </div>
    );
  }
}

export default App;
