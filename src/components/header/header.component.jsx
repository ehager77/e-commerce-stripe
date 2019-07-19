import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import firebase from 'firebase';
import { ReactComponent as Logo } from '../../assets/mylogo-white.svg' 
import { auth } from 'firebase';

const Header = ({ currentUser }) => (
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
        </div>
    </div>
)

export default Header;