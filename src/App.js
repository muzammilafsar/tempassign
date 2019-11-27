import React from 'react';
import './App.css';
import Cart from './Cart';
import { data } from './cartData';
class App extends React.Component {
  state = {
    cart: data.productsInCart,
    error: false
  }
  removeProduct = (id) => {
    let cart = this.state.cart;
    let i = cart.findIndex(val=> val.p_id === id);
    if(i>=0) {
      cart.splice(i,1);
    }
    if(cart.length === 0) {
      alert("no Products left reloading");
      window.location.reload();
    }
    this.setState({cart});
  }
  updateProduct = (product) => {
    let cart = this.state.cart;
    let i = cart.findIndex(val=> val.p_id === product.p_id);
    if(i>=0) {
      cart.splice(i,1,product);
    }
    this.setState({cart});
  }
  componentDidMount() {
  }
  componentDidCatch(){
    this.setState({error: true})
  }
  render() {
    return (
      this.state.error?
      <div>Error occurred please reload</div>
      :
      <div className="container-fluid">
        <Cart data={this.state.cart} updateProduct={this.updateProduct} removeProduct={this.removeProduct} />
      </div>
    );
  }
}

export default App;
