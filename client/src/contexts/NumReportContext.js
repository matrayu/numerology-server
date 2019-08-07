import React, { Component } from 'react'

const NumReportContext = React.createContext({
  userData: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setUserData: () => {},
})
export default NumReportContext

export class NumReportProvider extends Component {
  state = {
    userData: [],
    error: null,
  };

  setUserData = userData => {
    console.log(userData)
    this.setState({ userData })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      userData: this.state.userData,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUserData: this.setUserData,
    }
    return (
      <NumReportContext.Provider value={value}>
        {this.props.children}
      </NumReportContext.Provider>
    )
  }
}
