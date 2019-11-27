import React from 'react';
import tee from '../assets/T1.jpg';
import './ProductCard.scss';
function ProductCard(props) {
    return (
        <div className="row product-card">
            <div className="col-md-3 col-6 image "><img alt="product image" src={props.p_image} /></div>
            <div className="col-md-6 col-6 detail">
                <div className="title">{`${props.p_variation} ${props.p_name}`}</div>
                <div className="info">Style: {props.p_style}</div>
                <div className="info">Color: {props.p_selected_color.name}</div>
                <div className="action-block d-none d-md-block">
                    <span className="b-right">Edit</span>
                    <span className="b-right">Remove</span>
                    <span>Save For Later</span>
                </div>
                <div className="size d-md-none">Size:  {props.p_selected_size.code}</div>
                <div className="qty d-md-none"><label>Qty: </label> <span><input readOnly value={props.p_quantity} type="number" /></span></div>
                <div className="price d-md-none"><sup>$</sup>{props.p_price}</div>
            </div>
            <div className="col-md-1 col-6 size d-none d-md-block">{props.p_selected_size.code}</div>
            <div className="col-md-1 col-6 qty d-none d-md-block"><input readOnly value="1" type="number" /></div>
            <div className="col-md-1 col-6 price d-none d-md-block"><sup>$</sup>{props.p_price}</div>
        </div>
    )
}
export default ProductCard;
