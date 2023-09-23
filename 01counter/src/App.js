import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState(15)
  const addValue=()=>{
    if (counter<30){
      setCounter(counter+1)
    // setCounter(prevCounter=>prevCounter+1)
    // setCounter(prevCounter=>prevCounter+1)
    // setCounter(prevCounter=>prevCounter+1)
    // setCounter(prevCounter=>prevCounter+1)
    
    }
  }
  const removeValue=()=>{
    if(counter>1)
    setCounter(counter-1)
  }
  return (
    <div className="App">
      <h1>Anand Chauhan</h1>
      <h2>Counter Value: {counter}</h2>
      <button 
      onClick={addValue}>
        Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </div>
  );
}

export default App;
