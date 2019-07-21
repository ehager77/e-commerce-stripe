import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';
import firebase from 'firebase';
import { ReactComponent as Logo } from '../../assets/mylogo-white.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';



const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' id='one' to='/shop'>
                my work.
        </Link>
            <Link className='option' id="two" to='/shop'>
                about me.
        </Link>
            <Link className='option' id="three" to='/shop'>
                resume.
        </Link>
        {currentUser ?(
            <Link className='option left'  onClick={() => firebase.auth().signOut()} to='/'>sign out.</Link>
            ) : (
            <Link className='option left' to='/signin'>sign in.</Link>
            )}
            <CartIcon/>
        </div>
        {
            hidden ?
            null :
            <CartDropdown/>
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
})

console.log(mapStateToProps)

export default connect(mapStateToProps)(Header);