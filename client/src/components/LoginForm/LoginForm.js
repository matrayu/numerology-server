import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
    render() {
        return (
            <form className="login-form login-form-aligned">
                <div className="login-control-group header">Log In</div>
                <fieldset className="login-form__flex">

                    <div className="login-control-group">
                        <label for="email"></label>
                        <input id="email" type="email" placeholder="Email Address"></input>
                    </div>

                    <div className="login-control-group">
                        <label for="password"></label>
                        <input id="password" type="password" placeholder="Password"></input>
                    </div>

                    <div className="login-control-group button">
                        <button type="submit" className="login-button login-button-primary">Log In</button>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default LoginForm