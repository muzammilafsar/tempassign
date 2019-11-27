import React from 'react';
import './Modal.scss';
function Modal({ show, close, children }) {
    return (
            show ?
            <div className="modal">
                <div className="modal-content">
                    <div className="row">
                        <div className="col close" ><span onClick={close}> X </span></div>
                    </div>
                    {children}
                </div>
    
            </div>
            : <></>
    )

}
export default Modal;