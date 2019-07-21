import React, { Component } from 'react';
import './RegStep3.css';

export default class RegStep2 extends Component {
    render() {
        let props = this.props

        return(
            <React.Fragment>
            <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                    className="form-control"
                    id="dob"
                    name="dob"
                    type="date"
                    placeholder="Enter password"
                    onChange={props.handleChange}
                />      
            </div>
            <button className="btn btn-success btn-block">Sign up</button>
            </React.Fragment>
        );
    }
}