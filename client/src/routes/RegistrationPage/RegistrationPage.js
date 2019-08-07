import React, { Component } from 'react';
import RegStep1 from '../../components/RegStep1/RegStep1';
import RegStep2 from '../../components/RegStep2/RegStep2';
import RegStep3 from '../../components/RegStep3/RegStep3';
import AuthApiService from '../../services/auth-api-service'
import NumReportContext from '../../contexts/NumReportContext'
import './RegistrationPage.css'

export default class RegistrationPage extends Component {
    static contextType = NumReportContext

    setUserDataContext(userData) {
        const { history } = this.props
        this.context.clearError()
        this.context.setUserData(userData)
        history.push('/numerology-chart')
    }

    state = {
        currentStep: 1,
        email:  'tester@aol.com',
        username: '',
        password: 'Tester12#',
        confirmPassword: 'Tester12#',
        passwordMatch: '',
        first_name: 'Kobe',
        middle_name: 'Bean',
        last_name: 'Bryant',
        dob: "1979-08-05",
        error: null  
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({ [name]: value })   
    }
        
    handleSubmit = event => {
        event.preventDefault()
        const { email, username, password, first_name, middle_name, last_name, dob } = this.state

        this.setState({ error: null })
        AuthApiService.postUser({
            username: username,
            password: password,
            first_name: first_name,
            middle_name: middle_name,
            last_name: last_name,
            email: email,
            dob: dob

        })
        .then(user => {
            this.setState({
                username: null,
                password: null,
                first_name: null,
                middle_name: null,
                last_name: null,
                email: null,
                dob: null
            })
            this.setUserDataContext(user)
        })
        .catch(res => {
            console.log(res.error)
            this.setState({ error: res.error })
        })
    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({ currentStep: currentStep })
    }
        
    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({ currentStep: currentStep })
    }
  
  
    previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
        return (
            <button className="btn btn-secondary" type="button" onClick={this._prev}>Previous</button>
        )
    }
    return null;
    }

    nextButton(){
        let currentStep = this.state.currentStep;
        if(currentStep <3){
            return (
                <button className="btn btn-primary float-right" type="button" onClick={this._next}>Next</button>        
            )
        }
        return null;
    }

    renderStep1() {
        return (
            <RegStep1
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                username={this.state.username}
                email={this.state.email}
                password={this.state.password}
                confirmPassword={this.state.confirmPassword}
            />  
        ) 
    }

    renderStep2() {
        return (
            <RegStep2
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                first_name={this.state.first_name}
                middle_name={this.state.middle_name}
                last_name={this.state.last_name}
            />
        )
        
    }

    renderStep3() {
        return (
            <RegStep3 //why isn't this changing (works correctly)
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                dob={this.state.dob}
            />
        )
        
    }
    
    render() {
      return (
        <React.Fragment>
        <h1>Registration Form</h1>
        <p>Step {this.state.currentStep} </p> 
  
        <form onSubmit={this.handleSubmit}>
            {(this.state.currentStep === 1) 
                ? this.renderStep1() 
                : (this.state.currentStep === 2) 
                    ? this.renderStep2() 
                    : this.renderStep3()
            }
            {this.previousButton()}
            {this.nextButton()}
        </form>
        </React.Fragment>
      );
    }
}