import React, { useState } from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Carosel from './Carosel';




function App() {
  const[count,setCount]=useState(0);

 function handlerClick(){
setCount(count+1);
 }

  return (
   
    <div>
     <Header/>
  <Carosel/>
   
    
      <h1>Count</h1>
      <button onClick={handlerClick}>
        You Pressed me times {count}
        
      </button>
      <Button variant="primary">Primary</Button>
    </div>

  );
}

export default App
