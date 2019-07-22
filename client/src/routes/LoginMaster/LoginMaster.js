import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginMaster.css';

export default class LoginMaster extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <React.Fragment>
        <h1>Sign In</h1>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </React.Fragment>
    )
  }
}