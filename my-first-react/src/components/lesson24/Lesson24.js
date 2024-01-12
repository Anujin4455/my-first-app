import React from 'react'
import './style.css'
import Sneaker from './Sneaker'
import puuz1 from '../../images/image1.png'
import puuz2 from '../../images/image2.png'
import puuz3 from '../../images/image3.png'
const Lesson24 = () => {
  return (
    <div className='hevtee'>
        <Sneaker name="Nike Blazer Mid '77'" image={puuz1} desc='Classic sneakers with a vintage look.'/>
        <Sneaker name= 'Nike Air Max 270' image={puuz2} desc='Air Max series with a comfortable and stylish design.'/>
        <Sneaker name= 'Nike React Element 55' image={puuz3} desc='Modern design with React technology for a comfortable feel.'/>
    </div>
  )
}

export default Lesson24