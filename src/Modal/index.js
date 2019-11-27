import React from 'react';
import './Modal.scss';
import tee from '../assets/T1.jpg';
export default function Modal({ show, close, product }) {
    return (
        <div class="modal">

            <div class="modal-content">
                <div className="row">
                 </div>
                <div className="row ">
                    <div className="col-md-6 col-12 details-container">
                    <div className="product-name">title</div>
                        <div className="price"><sup>$</sup>21</div>
                        <div className=""><span ></span></div>
                        <div className="">
                        <select>
                            <option value={'s'}>S</option>
                            <option value={'m'}>M</option>
                            <option value={'l'}>L</option>
                        </select>
                        <select>
                        <option value={''}>Qty: 1</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                        </div>
                        <div className=""><button>EDIT</button></div>
                        <div className="">See Product Details</div>
                    </div>
                
                    <div className="col-md-6 col-12 image-container">
                        <img src={tee} />
                    </div>
                </div>

            </div>

        </div>
    )

}