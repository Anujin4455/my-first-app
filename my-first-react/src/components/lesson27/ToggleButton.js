import React, { useState } from 'react'
import './style.css'
const ToggleButton = () => {
    const [text, setText] =useState('OFF')
  return (
    <div>
        <button className={ text ==='ON' ? 'ON' : 'OFF'}
         onClick={ () => { setText ( text ==='ON' ? 'OFF' : 'ON') }}>{text}
         </button>

    </div>
  )
}

export default ToggleButton 