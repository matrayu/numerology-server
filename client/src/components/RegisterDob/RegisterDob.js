import React, { Component } from 'react';
import './RegisterDob.css';

export default class RegisterDob extends Component {
    static defaultProps = {
        onDobSuccess: () => {}
    }

    state = { 
        dob: null,
        error: null
    }
    
    handleRoute = ev => {
        ev.preventDefault()
        this.props.history.push('/numerology-chart')
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const dob = ev.target
    }

    render() {
        const { error } = this.state
        return (
            <form 
                className="signup-form" 
                onSubmit={this.handleSubmit}
            >
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