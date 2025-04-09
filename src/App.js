import logo from './logo.svg';
import './App.css';
import Progress from './Components/Progress';
import React, { useEffect, useState } from 'react'

function App() {
  document.title = 'Progress Bar';
    const [value, setValue] = useState(0);
    const [success, setSuccess] = useState(false);

    const updateVal = () =>{
        setValue((val)=>val+1);
    }

    useEffect(()=>{
        setInterval(updateVal,200);
    }, []);

  return (
    <div className="App">
      <span>Progress Bar</span>
      <Progress onComplete={()=>setSuccess(true)} value={value} />
      <span>{success ? "Completed !" : "Loading..."}</span>
    </div>
  );
}

export default App;
