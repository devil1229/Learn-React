import React from 'react'
import Confetti from 'react-confetti'
import { nanoid } from 'nanoid'
import Dice from './components/Dice'
import './App.css'

function App() {
   
  function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      const ele = {
        id: nanoid(),
        num : randomNum,
        isChange: true
      }
      arr.push(ele);
    }
    return arr;
  }
  
  const randomArray = generateRandomArray(10);

  const [diceElements , setDiceElements] = React.useState(randomArray)
  const [isRoll , setIsRoll] = React.useState(false)

  React.useEffect(() => {
    const allHeld = diceElements.every(die => !die.isChange)
    const firstValue = diceElements[0].num
    const allSameValue = diceElements.every(die => die.num === firstValue)
    if (allHeld && allSameValue) {
        setIsRoll(true)
    }
 }, [diceElements])

  function changeEle(id) {
    setDiceElements((prevDiceElements) => {
      const newDiceElements = []
       for(let ele of prevDiceElements){
        if(ele.id === id){
          const newObj = {
            ...ele,
            isChange: !ele.isChange
          }
          newDiceElements.push(newObj)
        }
        else{
          newDiceElements.push(ele)
        }
       }
       return newDiceElements
    })
  }

  const allDiceElements = diceElements.map((ele) => {
    return <Dice
            key={ele.id} 
            isChange = {ele.isChange}
            changeEle = {changeEle}
            data = {ele.num}
            id = {ele.id}
           />
  })

  function rollAgain(){
    if(!isRoll){
      setDiceElements((prevDiceElements) => {
        const newDiceElements = []
         for(let ele of prevDiceElements){
          if(ele.isChange){
            const randomNum = Math.floor(Math.random() * 6) + 1;
            const newObj = {
              ...ele,
              num: randomNum
            }
            newDiceElements.push(newObj)
          }
          else{
            newDiceElements.push(ele)
          }
         }
         return newDiceElements
      })
    }

    else{
      const newArray = generateRandomArray(10);
      setDiceElements(newArray)
      setIsRoll(false)
    }
    
  }

  const styles = {
    width: isRoll ? "200px" : "100px"
 }

  return (
    <div className='tenzi-container'>
        {isRoll && <Confetti />}
        <div className='tenzi-container-box'>
           <h1 className='tenzi-heading'>Tenzies</h1>
           <p className='tenzi-disc'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
           <div className='dice-box'>
            {allDiceElements}
           </div>
         <button onClick={rollAgain} style={styles} className='dice-button'> {isRoll ? "You Won! Play Again" : "Roll"}</button> 
        </div>
    </div>
  )
}

export default App
