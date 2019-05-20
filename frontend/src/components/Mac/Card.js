import React from 'react'
import {Link} from 'react-router-dom'

export default function Card({
  title,
  image,
  price,
  _id
}) {
  return (
      <Link to = {`/products/${_id}`}>
        <img src={image} alt={Image} width="50px" />
        <p>{title}</p>
        <p>{price}</p>
        
      </Link>
  )
} 