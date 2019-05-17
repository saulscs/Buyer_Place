import React, { Component } from 'react'
import {Link} from 'react-router-dom'



export default class profile extends Component {
  state ={
    email: [],
    name: [],
    photoURL: []

  }
  render() {
    return (
      <div>
        <h1>Bienvenido {}</h1>
        <Link to="/">Logout</Link>
      </div>
    )
  }
}
