import React from 'react';
import './Cart.scss';
import ProductCard from './ProductCard';
import Summary from './Summary';
import Edit from '../Edit';
import { data } from '../cartData';

function ProductNav(props) {
    let total = props.data.reduce((acc, val) => acc + parseInt(val.p_quantity), 0 );
    return (
        <div className="row cart-nav">
            <div className="col-9 d-md-none">YOUR SHOPPING BAG</div>
            <div className="col-md-9 col-3 items">{total} ITems</div>
            <div className="col-md-1 d-none d-md-block">SIZE</div>
            <div className="col-md-1 d-none d-md-block">QTY</div>
            <div className="col-md-1 d-none d-md-block">PRICE</div>
        </div>
    )
}
class Cart extends React.Component {
    state = {
        editObject: null,
        showModal: false
    }

    startEdit= (id) => {
        let product = this.props.data.find(val => val.p_id === id);
        this.setState({editObject: product}, this.togglemodal);
    }
    togglemodal = () => {
        this.setState({showModal: !this.state.showModal, ...(this.state.showModal? {editObject: null}: {})});
    }
    confirmEdit = (data) => {
        this.props.updateProduct(data)
        this.togglemodal();
    }
    render() {
        return (
            <div className="cart-container">
                <ProductNav data={this.props.data} />
                {
                    this.props.data.map((val, i) =><ProductCard removeProduct={this.props.removeProduct} key={'product-card'+ i} {...val} startEdit={this.startEdit} /> )
                }
                <Summary {...this.props} />
                <Edit product={this.state.editObject} showModal={this.state.showModal} toggleModal={this.togglemodal} confirmEdit={this.confirmEdit} />
            </div>
        )
    }
}
export default Cart;
