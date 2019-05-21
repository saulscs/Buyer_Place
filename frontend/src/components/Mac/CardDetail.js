import React, { Component } from 'react'
import axios from 'axios'



export default class CardDetail extends Component {
  state = {
    data: []
  }

  componentDidMount(){
    const { id } = this.props.match.params
    console.log(id)
    axios
    .get(`http://localhost:3000/products/${id}`)
    .then(({data}) => {
      this.setState({ data })
      console.log(data)
    })
    .catch(err => console.log(err))
  }
  render() {
   const  {
    image,
    title,
    price,
    description
  } = this.state.data

    return (
      <div>
        <h1>{title}</h1>
        <img src={image} alt={Image} width="720px" />
        <p>{price}</p>
        <p>{description}</p>
      </div>
    )
  }
}
