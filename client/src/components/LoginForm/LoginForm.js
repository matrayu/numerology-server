import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
    render() {
        return (
            <form className="login-form">
                <div>Log In</div>
                <fieldset>
                    <div>
                        <label htmlFor="email"></label>
                        <input id="email" type="email" placeholder="Email Address"></input>
                    </div>

                    <div>
                        <label htmlFor="password"></label>
                        <input id="password" type="password" placeholder="Password"></input>
                    </div>

                    <div>
                        <button type="submit">Log In</button>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default LoginForm