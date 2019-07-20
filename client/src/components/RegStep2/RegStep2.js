import React, { Component } from 'react';
import './RegStep2.css';


export default class RegStep2 extends Component {
    render() {
        let props = this.props

        if (props.currentStep !== 2) {
            return null
        } 
        return(
            <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
                className="form-control"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter first name"
                value={props.username}
                onChange={props.handleChange}
            />
    
            <label htmlFor="middleName">Middle Name</label>
            <input
                className="form-control"
                id="middleName"
                name="middleName"
                type="text"
                placeholder="Enter middle name"
                value={props.email}
                onChange={props.handleChange}
            />
    
            <label htmlFor="lastName">Last Name</label>
            <input
                className="form-control"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter last name"
                value={props.password}
                onChange={props.handleChange}
            /> 
            </div>
        );
    }
}