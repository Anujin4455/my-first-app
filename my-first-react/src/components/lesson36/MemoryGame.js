import React, {useState} from 'react'
import './style.css'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import beep from './my-first-react_src_components_MemoryGame_audio.mp3'
import weekend from './The Weeknd - Out of Time (Official Video).mp3'
const audio1 = new Audio(beep)
const weekendAudio = new Audio(weekend)
const MemoryGame = () => {
    const [boxes, setBoxes] = useState(['🎀','🐱','🐭','🐶','💕','🧍🏼‍♀️','💗','🧍🏻',
    '💕','🐶','🎀','🧍🏼‍♀️','💗','🐭','🐱','🧍🏻',])
    const { width, height } = useWindowSize()
    // 🎀🐱🐭🐶💕🧍🏼‍♀️💗🧍🏻
    const [clickedBox, setClickedBox] = useState([])
    const [zuvTaasan, setZuvTaasan] = useState([])
    const check = (clickedBox ) => {
      if (clickedBox.length === 2) {
        console.log("check", clickedBox);
        const boxIndex1 = clickedBox[0]
        const boxIndex2 = clickedBox[1]
        console.log('boxes[boxIndex1]',boxes[boxIndex1]);
        console.log('boxes[boxIndex2]',boxes[boxIndex2] );
        if (boxes[boxIndex1] === boxes[boxIndex2]) {
          const newZuvTaasan = [...zuvTaasan, boxes[boxIndex1]]
          setZuvTaasan(newZuvTaasan)
          setClickedBox([])
          if(newZuvTaasan.length === 8)
          {
            weekendAudio.play()
          } 
          
        } else {
          setTimeout(() => {
            setClickedBox([])
          }, 1000);
        }
      }
    } 
    const handleClick = (i) => {
      audio1.play()
      if (clickedBox.length < 2 ){
        let newClickedBox = [...clickedBox,i]
        console.log("newClickedBox",newClickedBox);
        setClickedBox (newClickedBox)
        check(newClickedBox)
      }
    }
    const isWin = zuvTaasan.length === 8
    console.log('click',clickedBox);
  return (
    <div className='container'>
      {isWin && <h1>Баяр хүргье.</h1>}
      {isWin &&    <Confetti
      width={width}
      height={height}
    />}
        <div className="main">
            {boxes.map(
            (box, i) => <div onClick = { () => handleClick (i)} className="box">
              {clickedBox.includes(i) || zuvTaasan.includes(box)
               ? box : ''}
              </div>
            )}
        </div>
    </div>
  )
}

export default MemoryGame