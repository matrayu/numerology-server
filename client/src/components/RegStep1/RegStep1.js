import React, { Component } from 'react';
import './RegStep1.css';

export default class RegStep1 extends Component {
    render() {
        let props = this.props

        return (
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    className="form-control"
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    value={props.username}
                    onChange={props.handleChange}
                />
    
                <label htmlFor="email">Email address</label>
                <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value=/* {props.email} */"tester@aol.com"
                    onChange={props.handleChange}
                />
    
                <label htmlFor="password">Password</label>
                <input
                    className="form-control"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value=/* {props.password} */"Tester12#"
                    onChange={props.handleChange}
                /> 
    
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    value=/* {props.confirmPassword} */"Tester12#"
                    onChange={props.handleChange}
                /> 
            </div>
        );
    }
}