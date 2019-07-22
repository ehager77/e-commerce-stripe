import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <h1 className='cart-title'>Your Cart</h1>
        <div className='checkout-header'>
            <div className='header-blocks'>
                <p>Product</p>
            </div>
            <div className='header-blocks'>
                <p>Description</p>
            </div>
            <div className='header-blocks'>
                <p>Quantity</p>
            </div>
            <div className='header-blocks'>
                <p>Price</p>
            </div>
            <div className='header-blocks'>
                <p>Remove</p>
            </div>
            </div>
                {cartItems.map(cartItem => (
                    <CheckoutItem
                        key={CheckoutItem.id} cartItem={cartItem} />
                ))}
        <div className='cart-total'>Total: ${total}</div>
        <StripeCheckoutButton price={total}/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
