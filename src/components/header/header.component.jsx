import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon  from '../cart-icon/cart-icon.component'
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss"

const Header = ({ currentUser,hidden }) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>
                     SIGN OUT
                     </div>)
                     :
                (
                <Link className="option" to="/signin">SING IN</Link>
                )
            }
            <CartIcon />

        </div>
        {
            hidden?
            null:
        <CartDropDown />
        }

    </div>
)

const mapStateToProps= ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});
export default connect(mapStateToProps)(Header);