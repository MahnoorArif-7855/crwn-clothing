import React from "react";

import { connect } from "react-redux/es/exports";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-items/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { selectCartItems,selectCartTotal } from './../../redux/cart/cart.selector';

import "./checkout.styles.scss"

const CheckOutPage = ({cartItems,total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>
                    Product
                </span>
            </div>
            <div className="header-block">
                <span>
                    Description
                </span>
            </div>
            <div className="header-block">
                <span>
                    Quantity
                </span>
            </div>
            <div className="header-block">
                <span>
                    Price
                </span>
            </div>
            <div className="header-block">
                <span>
                    Remove
                </span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                ( 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
                )
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
        <div className="test-warning">
        *Please use the following test credit-card for payment *
            <br />
            4242 4242 4242 4242 - Exp: 09/22 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage)