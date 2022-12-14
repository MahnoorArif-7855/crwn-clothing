import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon  from '../cart-icon/cart-icon.component'
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assests/crown.svg";
// import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { signOutStart } from "../../redux/user/user.actions";

import { HeaderContainer , LogoContainer,OptionsContainer,OptionLink } from "./header.styles";

// import "./header.styles.scss"

const Header = ({ currentUser,hidden,signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className="logo"></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>
            {
                currentUser ? (
                <OptionLink as='div' onClick={signOutStart}>
                     SIGN OUT
                     </OptionLink>)
                     :
                (
                <OptionLink to="/signin">SING IN</OptionLink>
                )
            }
            <CartIcon />

        </OptionsContainer>
        {
            hidden?
            null:
        <CartDropDown />
        }

    </HeaderContainer>
)

const mapStateToProps= createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Header);