import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import HomeSplash from '../HomeSplash/HomeSplash';
import LoginPage from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import RegisterName from '../RegisterName/RegisterName';
import RegisterDob from '../RegisterDob/RegisterDob';
import NumerologlyReport from '../NumerologyReport/NumerologyReport';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className='App__main'>
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
