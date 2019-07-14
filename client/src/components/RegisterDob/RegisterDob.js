import React, { Component } from 'react';
import './RegisterDob.css';

class RegisterDob extends Component {
    handleRoute = ev => {
        ev.preventDefault()
        this.props.history.push('/numerology-chart')
    }

    render() {
        return (
            <form className="signup-form" onSubmit={this.handleRoute}>
                <div>Your Birth Date</div>
                <fieldset>
                    <div>
                        <label htmlFor="birthdate"></label>
                        <input id="birthdate" type="date" placeholder="First Name"></input>
                    </div>

                    <div>
                        <button type="submit">Create My Chart</button>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default RegisterDob