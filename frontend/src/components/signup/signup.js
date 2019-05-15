import React, { Component } from 'react'
import WrappedNormalSignupForm from './signupForm'

class Signup extends Component {
  render() {
    return (
      <div style={{ width: '100vw' }}>
        <WrappedNormalSignupForm />
      </div>
    )
  }
}

export default Signup
