import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total}) => (
    <div className='checkout-page'>
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
                <p>Product</p>
            </div>
            <div className='header-blocks'>
                <p>Remove</p>
            </div>
            {
                cartItems.map(cartItem =>
                    cartItem.name
                )
            }
        </div>
        <div className='cart-total'>
            Total: ${total}
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
