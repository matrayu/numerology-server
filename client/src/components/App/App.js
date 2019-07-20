import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import HomeSplash from '../HomeSplash/HomeSplash';
import LoginPage from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import RegisterName from '../RegisterName/RegisterName';
import RegisterDob from '../RegisterDob/RegisterDob';
import NumerologlyReport from '../NumerologyReport/NumerologyReport';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import IdleService from '../../services/idle-service.js';

import './App.css';

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle)

    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets()
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken()
      })
    }
  }

  componentWillMount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.forceUpdate()
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className='App__main'>
        {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route exact path={'/'} component={HomeSplash} />
            <Route path={'/login'} component={LoginPage} />
            <Route path={'/register'} component={RegisterForm} />
            <Route path={'/register-name'} component={RegisterName} />
            <Route path={'/register-dob'} component={RegisterDob} />
            <Route path={'/numerology-chart'} component={NumerologlyReport} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
