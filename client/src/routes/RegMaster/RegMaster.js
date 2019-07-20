import React, { Component } from 'react';
import RegStep1 from '../../components/RegStep1/RegStep1';
import RegStep2 from '../../components/RegStep2/RegStep2';
import RegStep3 from '../../components/RegStep3/RegStep3';
import AuthApiService from '../../services/auth-api-service'
import './RegMaster.css'

export default class RegMaster extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    static defaultProps = {

    }

    state = {
        currentStep: 1,
        email:  null,
        username: null,
        password: null,
        confirmPassword: null,
        passwordMatch: false,
        firstName: null,
        middleName: null,
        lastName: null,
        dob: null,
        error: null  
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({ [name]: value })   
    }
        
    handleSubmit = event => {
        event.preventDefault()
        const { email, username, password, firstName, middleName, lastName, dob } = this.state

        this.setState({ error: null })
        AuthApiService.postUser({
            username: username,
            password: password,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            email: email,
            dob: dob

        })
        .then(user => {
            this.state.username = null
            this.state.password = null
            this.state.firstName = null
            this.state.middleName = null
            this.state.lastName = null
            this.state.email = null
            this.state.email = null
            this.props.onRegistrationSuccess()
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
                firstName={this.state.firstName}
                middleName={this.state.middleName}
                lastName={this.state.lastName}
            />
        )
        
    }

    renderStep3() {
        return (
            <RegStep3
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                dob={this.state.dob}
            />
        )
        
    }
    
    render() {
      return (
        <React.Fragment>
        <h1>Registration Form 🧙‍♂️</h1>
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