import React, { useState } from 'react'
import { FaBeer , FaMinusCircle} from 'react-icons/fa';
import {BsPlus} from 'react-icons/bs'
function Counter(props) {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('Amit')

    function decCounter(){
        if (count>1)
        return setCount(count-1) 
        
    }
    
  return (
    <div>
      <div>
        <FaBeer/>
      <h3> Lets go for a <FaBeer/> </h3>
      <h1> Hello {name} Age is {props.age}</h1>
       <button onClick={()=>setName('Anand')}>Click Me</button> <br /> <br />
       <span>
       <button onClick={()=>setCount(count+1)}><BsPlus/></button> <h1>Count : {count}</h1>
       </span>
       
        <button  onClick={decCounter}><FaMinusCircle/></button>

    
      </div>
    </div>
  )
}

export default Counter
