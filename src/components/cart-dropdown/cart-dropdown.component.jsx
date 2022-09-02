import React from "react";

import { connect } from "react-redux/es/exports";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from 'reselect';
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component"
import CartItem from "../cart-item/cart-item.component";
// import { selectCurrentUser } from "../../redux/user/user.selectors";
import  {toggleCartHidden } from "../../redux/cart/cart.action"
import './cart-dropdown.styles.scss'

const CartDropDown = ({cartItems,history,dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items "> 
        {
            cartItems ?(
            cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/> 
                )
            ))
            :(
                <span className="empty-message">Your Cart is empty</span>
            )
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
            }}>gotocheckout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropDown));