import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  //const [multipliedval,setMultipliedValue]=useState(0)
  let Multipliedval=value*5
  
  const MultipleByFive=()=>{
        //setMultipliedValue(value*5)
        setValue(value+1)
  }
  return (
    <>
      <h1>Actual Value: {value}</h1>
      <button onClick={MultipleByFive}>Click to multiply by 5</button>
      <h2>Multiplied Value: {Multipliedval}</h2>
    </>
  )
}

export default App
