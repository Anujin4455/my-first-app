import React, { useState } from 'react'
import './style.css'
const ToogTaah = () => {
    const [sanamsarguiToo, setSanamsarguiToo] = useState(Math.floor(Math.random() * 100))
    const [taaasanToo, setTaaasanToo] = useState('')
    const [hariu, setHariu] = useState("")
    const [bolomj, setBolomj] = useState(5)
    console.log(sanamsarguiToo);
    const handleChange = (e) => {
        const text = e.target.value;
        console.log(text);
        setTaaasanToo(text)
    }
    const handleClick = () => {
        console.log(sanamsarguiToo, taaasanToo);
        if (sanamsarguiToo == taaasanToo) {
            console.log("Та хожлоо.");
            setHariu("Та хожлоо.")
        } else {
            const uldsenBolomj = bolomj - 1;

            if (uldsenBolomj == 0) {
                setHariu("Та хожигдлоо.")
            }
            else if (sanamsarguiToo < taaasanToo) {
                setHariu("Их байна,uldsen bolomj:" + uldsenBolomj)
                setBolomj(uldsenBolomj)
            } else {
                setHariu("Бага байна, uldsen bolomj:" + uldsenBolomj)
                setBolomj(uldsenBolomj)
            }
        }
    }
    return (
        <div className='container'>
            <h1>Санасан тоо хэд вэ?</h1>
            <p>1-100-н хооронд байгаа тоог таагаарай.</p>
            <div>
                <input onChange={handleChange} type="number" placeholder='Таах тоогоо оруулна уу.' />
                <button onClick={handleClick}>Таах</button>
            </div>
            <h3>Хариу: {hariu}</h3>
        </div>
    )
}

export default ToogTaah