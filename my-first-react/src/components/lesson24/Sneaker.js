import React from 'react'
 import './style.css'
const Sneaker = ({image, name, desc}) => {
  return (
    <div className='huree'>
      <img src={image} alt=""/>
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default Sneaker