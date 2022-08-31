import React from "react";

import { connect } from "react-redux/es/exports";
import { selectCartItems } from "../../redux/cart/cart.selector";

import CustomButton from "../custom-button/custom-button.component"
import CartItem from "../cart-item/cart-item.component";

import './cart-dropdown.styles.scss'

const CartDropDown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items "> 
        {
            cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/> 
                )
            )
        }
        </div>
        <CustomButton>gotocheckout</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropDown);