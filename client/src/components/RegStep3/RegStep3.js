import React, { Component } from 'react';
import './RegStep3.css';

export default class RegStep2 extends Component {
    render() {
        let props = this.props

        return (
            <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                    className="form-control"
                    id="dob"
                    name="dob"
                    type="date"
                    //value=""
                    onChange={props.handleChange}
                />      
            </div>
        );
    }
}