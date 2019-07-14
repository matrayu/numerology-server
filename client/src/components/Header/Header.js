import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className='nav'>
                    <div>
                        <Link to='/'>Numerology</Link>
                        <span>Your Destiny Awaits.</span>
                    </div>
                    <div>
                        <Link to='/register'>Get Started</Link>
                        <Link to='/login'>Log In</Link>
                    </div>
                </nav>
                
                
            </div>
        )
    }
}