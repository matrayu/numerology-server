import React, { Component } from 'react';
import './RegisterName.css';

export default class RegisterName extends Component {
    handleRoute = ev => {
        ev.preventDefault()
        this.props.history.push('/register-dob')
    }

    render() {
        return (
            <form className="signup-form signup-form-aligned" onSubmit={this.handleRoute}>
                <div className="signup-control-group header">Your Name</div>
                <div className="signup-control-group sub-head">Enter your full name below, exactly as it appears on your birth certificate (if you do not have a birth certificate, you should use the name you have always been known by). Include your full middle name and exclude any suffix after your name (i.e. 'Jr', "II", etc).</div>
                <fieldset className="signup-form__flex">
                    <div className="signup-control-group">
                        <label for="first-name"></label>
                        <input id="first-name" type="text" placeholder="First Name"></input>
                    </div>

                    <div className="signup-control-group">
                        <label for="middle-name"></label>
                        <input id="middle-name" type="text" placeholder="Middle Name"></input>
                    </div>

                    <div className="signup-control-group">
                        <label for="last-name"></label>
                        <input id="last-name" type="text" placeholder="Last Name"></input>
                    </div>

                    <div className="signup-control-group button">
                        <button type="submit" className="signup-button signup-button-primary">Continue</button>
                    </div>
                </fieldset>
            </form>
        )
    }
}