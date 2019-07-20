import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag-white.svg'

import './cart-icon.styles.scss'
import { dispatch } from 'rxjs/internal/observable/pairs';

const CartIcon = ({toggleCartHidden}) => (
        <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <span style={{color: 'white'}} className='item-count'>{0}</span>
        </div>
);

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);