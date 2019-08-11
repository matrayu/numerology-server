import React, { Component } from 'react';
import NumReportContext from '../../contexts/NumReportContext'
import AuthApiService from '../../services/auth-api-service'
import './LoginForm.css';

export default class LoginForm extends Component {
    static defaultProps = {
      onLoginSuccess: () => {}
    }

    static contextType = NumReportContext
  
    state = { 
      error: null
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
          this.context.setLogin()
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
                /* value={props.username} */
                value='tester21'
            />

            <label htmlFor="password">Password</label>
              <input
                  className="form-control"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  /* value={props.password} */
                  value='Tester12#'
              />
          </div>
          <button className="btn btn-success btn-block">Log In</button>
        </form>
      )
    }
  }