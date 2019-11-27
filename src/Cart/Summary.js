import React from 'react';
import './Summary.scss';
function ContactUs() {
    return <div className="contact-us-container">
        <div className="title">Need help or have questions?</div>
        <div>Call Customer Service at 10000000000</div>
        <div>Chat with one of our stylists</div>
        <div>See return and exchange policy</div>
    </div>
}
class Summary extends React.Component {
    state = {
        sub_total: 0,
        shipping: 0,
        discount: 0,
        total: 0
    }
    static getDerivedStateFromProps(props, state) {
        let cal = props.data.reduce((acc, val) => {
            return { total: acc.total + val.p_price * parseInt(val.p_quantity), items: acc.items + parseInt(val.p_quantity) };
        }, { total: 0, items: 0 })
        let shipping = cal.total >= 50 ? 0 : 10;
        let discount = 0;
        if (cal.items === 3) {
            discount = cal.total / 5;
        } else if (cal.items > 3 && cal.items <= 10) {
            discount = cal.total / 10;
        }
        discount = Number(discount).toFixed(2);
        return {
            sub_total: cal.total,
            shipping: shipping,
            discount: discount,
            total: cal.total+shipping-discount
        }
    }
    render() {
        return (
            <div className="summary-wrapper row">
                <div className="col-md-4 d-none d-md-block"><ContactUs /></div>
                <div className="col-md-8 col-12">
                    <div className="summary-container">
                        <div className="row promo-block">
                            <div className="col">
                                <div className="row ">
                                    <div className="col-12 col-md-6 promo-label">ENTER PROMOTION CODE OR GIFT CARD</div>
                                    <div className="col-12 col-md-6"><input ></input><button className="apply-button">APPLY</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="row amount-block">
                            <div className="col">
                                <div className="row small-block">
                                    <div className="col-7 left-label">SUBTOTAL</div>
        <div className="col-5 right"><sup>$</sup>{this.state.sub_total}</div>
                                </div>
                                <div className="row small-block">
                                    <div className="col-7 left-label">PROMOTION CODE <b>JF10</b> APPLIED</div>
                                    <div className="col-5 right"><sup>$</sup>{this.state.discount}</div>
                                </div>
                                <div className="row small-block b-bottom">
                                    <div className="col-7 left-label">ESITMATED SHIPPING* <br /><span className="small-label">You qualify for free shipping because your order is over 150</span></div>
                                    <div className="col-5 right">{this.state.shipping > 0 ? <><sup>$</sup>{this.state.discount}</> : 'FREE'}</div>
                                </div>
                                <div className="row total-ammount">
                                    <div className="col-7 left-label">ESITMATED TOTAL <br /><span className="small-label">Tax will be applied during checkout.</span></div>
                                    <div className="col-5 right"> <sup>$</sup>{this.state.total}</div>
                                </div>
                                <div className="row checkout-action">
                                    <div className="col-12 col-md-2"><button className="checkout-button">CHECKOUT</button></div>
                                    <div className="col-12 col-md-2"><span className="continue">Continue Shopping</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Summary;
