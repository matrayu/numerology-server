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
            <form className="signup-form signup-form-aligned" onSubmit={this.handleRoute}>
                <div className="signup-control-group header">Create Account</div>
                <fieldset className="signup-form__flex">
                    <div className="signup-control-group">
                        <label for="name"></label>
                        <input id="name" type="text" placeholder="Username"></input>
                    </div>

                    <div className="signup-control-group">
                        <label for="email"></label>
                        <input id="email" type="email" placeholder="Email Address"></input>
                    </div>

                    <div className="signup-control-group">
                        <label for="password"></label>
                        <input id="password" type="password" placeholder="Password"></input>
                    </div>

                    <div className="signup-control-group">
                        <label for="confirm_password"></label>
                        <input id="confirm_password" type="password" placeholder="Confirm Password"></input>
                    </div>

                    <div className="signup-control-group button">
                        <button type="submit" className="signup-button signup-button-primary">Continue</button>
                    </div>
                </fieldset>
            </form>
        )
    }
}