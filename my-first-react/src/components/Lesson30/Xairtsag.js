import React, { useState } from 'react'
import './style.css'
const Xairtsag = ({number}) => {
    const [count,setCount] = useState(0)
  return (
    <div className='xairtsag'>
        Xairtsag{number}
        <p>{count}</p>
        
        <button onClick={() => setCount(count + 1)}>Nemeh</button>
        <button onClick={() => setCount(count - 1)}>Hasah</button>
        <button onClick={() => setCount(count(0))}> Shineer ehluuleh</button>
    </div>
  )
}

export default Xairtsag