import React, { Component } from 'react'

import {Link} from 'react-router-dom'


export default class profile extends Component {
  render() {
    return (
      <div>
        <h1>HOLA</h1>
        <Link to="/">Logout</Link>
      </div>
    )
  }
}
