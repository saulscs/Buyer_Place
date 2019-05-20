import React, { Component } from 'react'
import axios from 'axios'

export default class CardDetail extends Component {
  state = {
    data: []
  }

  componentDidMount(){
    axios
    .get(`http://localhost:3000/products/${this.props.match.params.id}`)
    .then(({ data }) => {
      this.setState({ data })
      console.log(this.state.data)
    })
    .catch(err => console.log(err))
  }
  render() {

    return (
      <div>
        <h1>Funciona</h1>
      </div>
    )
  }
}
