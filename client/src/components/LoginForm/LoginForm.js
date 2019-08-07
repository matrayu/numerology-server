import React, { Component } from 'react';
import NumReportContext from '../../contexts/NumReportContext'
//import { Button, Input } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'
import './LoginForm.css';

export default class LoginForm extends Component {
    static defaultProps = {
      onLoginSuccess: () => {}
    }

    static contextType = NumReportContext
  
    state = { 
      error: null,
      //username and password set to null
      username: 'tester12',
      password: 'Tester12#' 
    }

    handleChange = event => {
      const {name, value} = event.target
      this.setState({ [name]: value })   
    }
  
    handleSubmitJwtAuth = ev => {
      ev.preventDefault()
      this.setState({ error: null })
      const { username, password } = ev.target
      AuthApiService.postLogin({
        username: username.value,
        password: password.value,
      })
        .then(res => {
          this.context.setUserData(res.userData)
          username.value = ''
          password.value = ''
          this.props.onLoginSuccess()
        })
    }
  
    render() {
      const props = this.props
      const { error } = this.state
      return (
        <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
                className="form-control"
                id="username"
                name="username"
                type="text"
                placeholder="Enter username"
                //value set to 'props.username'
                value={this.state.username}
                onChange={this.handleChange}
            />

            <label htmlFor="password">Password</label>
              <input
                  className="form-control"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  //value set to 'props.username'
                  value={this.state.password}
                  onChange={this.handleChange}
              />
          </div>
          <button className="btn btn-success btn-block">Log In</button>
        </form>
      )
    }
  }