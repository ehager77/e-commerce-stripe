import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import '../../assets/mylogo-white.svg';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_nIkOMgy9aVTayJIOeOJLd5bs00XZPsswyB';

    const onToken = token =>{
        console.log(token)
        alert("Payment Succesful")
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name='My Store'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;