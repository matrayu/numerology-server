import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import './Header.css';

export default class Header extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        /* when logging out, clear the callbacks to the refresh api and idle auto logout */
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
    }

    renderLogoutLink() {
        return (
          <div className='Header__logged-in'>
            <Link onClick={this.handleLogoutClick} to='/'>Logout</Link>
          </div>
        )
    }
    
    renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
                <Link to='/login'>Log in</Link>
                <Link to='/register'>Get Started</Link>
            </div>
        )
    }

    render() {
        return (
            <div>
                <nav className='Header'>
                    <Link to='/'>Numerology</Link>
                    <span>Your Destiny Awaits.</span>
                    <div className='Header__buttons'>
                        {TokenService.hasAuthToken()
                                ? this.renderLogoutLink()
                                : this.renderLoginLink()
                        }
                    </div>
                </nav>
            </div>
        )
    }
}