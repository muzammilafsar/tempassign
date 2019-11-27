import React from 'react';
import './Cart.scss';
import ProductCard from './ProductCard';
import Summary from './Summary';

function ProductNav() {
    return (
        <div className="row cart-nav">
            <div className="col-9 d-md-none">YOUR SHOPPING BAG</div>
            <div className="col-md-9 col-3 items">3 ITems</div>
            <div className="col-md-1 d-none d-md-block">SIZE</div>
            <div className="col-md-1 d-none d-md-block">QTY</div>
            <div className="col-md-1 d-none d-md-block">PRICE</div>
        </div>
    )
}
class Cart extends React.Component {
    render() {
        return (
            <div className="cart-container">
                <ProductNav />
                {
                    this.props.data.map((val, i) =><ProductCard key={'product-card'+ i} {...val} /> )
                }
                <Summary {...this.props} />
            </div>
        )
    }
}
export default Cart;
