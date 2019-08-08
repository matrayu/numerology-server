import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import NumReportContext from '../../contexts/NumReportContext'
import './Header.css';

export default class Header extends Component {
    static contextType = NumReportContext

    state = {
        loggedIn: this.context.isLoggedIn
    }

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        /* when logging out, clear the callbacks to the refresh api and idle auto logout */
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
        this.context.setLogin()
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
                    <div className='Header group_left'>
                        <Link to='/'>Numerology</Link>
                        <span>Your Destiny Awaits.</span>
                    </div>
                    <div className='Header group_right'>
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