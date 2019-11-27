import React from 'react';
import './Edit.scss';
import Modal from '../Modal';
class Edit extends React.Component {
    state = {
        showModal: true,
        p_selected_color: {name: '', hexcode: ''},
        p_selected_size: {name: '', code: ''},
        p_quantity: 0,
        value: ''
    }
    static getDerivedStateFromProps(props, state) {
       if(props.product && state.p_quantity === 0 ) {
           return {
            p_selected_color: props.product.p_selected_color,
            p_selected_size: props.product.p_selected_size,
            p_quantity: props.product.p_quantity
           }
       } 
       return null;
    }
    toggleModal = () => {
        this.props.toggleModal();
    }
    quantityChange = (e) => {
        this.setState({p_quantity: e.target.value});
    }
    sizeChange = (e) => {
        let size = this.props.product.p_available_options.sizes.find(val => val.code === e.target.value );
        if(size) {
            this.setState({p_selected_size: size});
        }
    }
    colorChange = (name) => {
        this.setState({p_selected_color: name});
    }
    updateProduct = () => {
        this.props.confirmEdit({
            ...this.props.product,
            p_quantity: this.state.p_quantity,
            p_selected_color: this.state.p_selected_color,
            p_selected_size: this.state.p_selected_size,
        })
    }
    render() {
        return (
            <Modal show={this.props.showModal} close={this.toggleModal}>
                {this.props.showModal ?
                    <div className="row edit-container">
                        <div className="col-md-6 col-12 details-container">
                            <div className="product-name">{this.props.product.p_name}</div>
                            <div className="price"><sup>$</sup>{this.props.product.p_price}</div>
                            <div className="colors">
                                {
                                    this.props.product.p_available_options.colors.map(val => <div onClick={() => this.colorChange(val)} className={this.state.p_selected_color.name === val.name? "selected": ''} key={'color' + val.name} style={{ backgroundColor: val.hexcode }} ></div >)
                                }
                            </div>
                            <div className="dropdown-wrapper">
                                <select value={this.state.value} onChange={this.sizeChange}>
                                    <option value={''} style={{ display: 'none' }}>Size: {this.state.p_selected_size.code}</option>
                                    {
                                        this.props.product.p_available_options.sizes.map(val => <option key={'size' + val.code} value={val.code}>{val.name}</option>)
                                    }

                                </select>
                                <select value={this.state.value} onChange={this.quantityChange}>
                                    <option value={''} style={{ display: 'none' }}>Qty: {this.state.p_quantity}</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                </select>
                            </div>
                            <div className="edit-button"><button onClick={this.updateProduct}>EDIT</button></div>
                            <div className="">See Product Details</div>
                        </div>

                        <div className="col-md-6 col-12 image-container">
                            <img src={this.props.product.p_image} />
                        </div>
                    </div>
                    : ''}

            </Modal>
        )
    }
}
export default Edit;
