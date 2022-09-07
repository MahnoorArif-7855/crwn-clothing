import React from "react";

import StripeCheckout  from "react-stripe-checkout";

import "./stripe-button.styles.scss"

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51ICViJCW8s4987Lrzdffxcz7oeXrgbO6hmNXjaOyUAfvxnX3cjfFBfmrF8bwODIQ4NdIctTkha0QaLiHw5u2VXzX00oNsc1CQm"

    const onToken = token => {
        console.log(token)
        alert("payment successful")
    }
 return(
    <StripeCheckout
    lable="Pay Now"
    name="CRWN CLOTHING Ltd."
    billingAddress
    shippingAddress
    image= "http://svgshare.com/i/CUz.svg"
    discription ={`Your total is $${price}`}
    amount= {priceForStripe}
    panelLabel= "Pay Now"
    token={onToken}
    stripeKey = {publishableKey}
    />
    );
}

export default StripeCheckoutButton