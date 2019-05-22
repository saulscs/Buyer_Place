import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'

export default class allWatch extends Component {
  state = {
    fullWatchs: [],
    category: {
      type: String,
      enum:["Mac", "Iphone","Ipad","Apple Watch","Accesorios","Otros"]
     },
  }
  componentDidMount() {
    axios 
    .get ('http://localhost:3000/products')
    .then (({data})=>{
      this.setState({fullWatchs:data})
    })
    .catch(err => console.log(err))
  }

  render() {
    const {fullWatchs} = this.state
    return (
      <div>
        <div className="title-detail">
        <h1> Apple Watch</h1>
        </div>
        {fullWatchs.map((Watch,i)=>{
          return <Card key= {i} {...Watch}/>
        })}
      </div>
    )
  }
}
