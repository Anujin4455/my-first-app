import React, { useState } from 'react'

const Counter = () => {
    const [ count, setCount ] = useState(0)
    
    return (
    <div>
        <p> {count} </p>
        <button onClick={() =>setCount(count+1)}>Taalagdsan</button>
        <button onClick= {() =>setCount(count-1)}> Taalagdsngu</button>
        <button onClick={() =>setCount(0)}>Shineer ehleh</button>
    </div>
  )
}

export default Counter



