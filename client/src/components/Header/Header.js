import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className='nav'>
                    <div className='nav__logo-group'>
                        <Link className='nav__link nav__logo' to='/'>Numerology</Link>
                        <span className='nav__tagline--wide'>Your Destiny Awaits.</span>
                    </div>
                    <div className='nav__home-links'>
                        <Link className='nav__link' to='/register'>Get Started</Link>
                        <Link className='nav__link' to='/login'>Log In</Link>
                    </div>
                </nav>
                
                
            </div>
        )
    }
}