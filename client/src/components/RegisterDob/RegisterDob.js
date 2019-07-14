import React, { Component } from 'react';
import './RegisterDob.css';

class RegisterDob extends Component {
    handleRoute = ev => {
        ev.preventDefault()
        this.props.history.push('/numerology-chart')
    }

    render() {
        return (
            <form className="signup-form signup-form-aligned" onSubmit={this.handleRoute}>
                <div className="signup-control-group header">Your Birth Date</div>
                <fieldset className="signup-form__flex">
                    <div className="signup-control-group">
                        <label for="birthdate"></label>
                        <input id="birthdate" type="date" placeholder="First Name"></input>
                    </div>

                    <div className="signup-control-group button">
                        <button type="submit" className="signup-button signup-button-primary">Create My Chart</button>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default RegisterDob