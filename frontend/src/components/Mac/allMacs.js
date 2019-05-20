import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'

export default class allMacs extends Component {
  state = {
    fullMacs: []
  }
  componentDidMount() {
    axios 
    .get ('http://localhost:3000/products')
    .then (({data})=>{
      this.setState({fullMacs:data})
    })
    .catch(err => console.log(err))
  }

  render() {
    const {fullMacs} = this.state
    return (
      <div>
        <h1> Mac</h1>
        {fullMacs.map((Mac,i)=>{
          return <Card key= {i} {...Mac}/>
        })}
      </div>
    )
  }
}
