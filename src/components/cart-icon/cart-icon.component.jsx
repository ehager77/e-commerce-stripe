import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag-white.svg'

import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden, itemCount}) => (
        <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <span style={{color: 'white'}} className='item-count'>{itemCount}</span>
        </div>
);

const mapStateToProps = ({cart: {cartItems}}) =>({
    itemCount: 
    cartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 
    0
    )
});

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);