import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css';

export default class RegisterForm extends Component {
    handleRoute = ev => {
        ev.preventDefault()
        this.props.history.push('/register-name')
    }

    render() {
        return (
            <form className="signup-form" onSubmit={this.handleRoute}>
                <div>Create Account</div>
                <fieldset>
                    <div>
                        <label htmlFor="name"></label>
                        <input id="name" type="text" placeholder="Username"></input>
                    </div>

                    <div>
                        <label htmlFor="email"></label>
                        <input id="email" type="email" placeholder="Email Address"></input>
                    </div>

                    <div>
                        <label htmlFor="password"></label>
                        <input id="password" type="password" placeholder="Password"></input>
                    </div>

                    <div>
                        <label htmlFor="confirm_password"></label>
                        <input id="confirm_password" type="password" placeholder="Confirm Password"></input>
                    </div>

                    <div>
                        <button type="submit">Continue</button>
                    </div>
                </fieldset>
            </form>
        )
    }
}