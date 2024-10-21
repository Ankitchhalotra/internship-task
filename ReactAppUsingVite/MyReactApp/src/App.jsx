import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count , setCount] = useState(0)

  const incNum = () =>{
    setCount(count+1);
  }
  const decNum = () =>{
    if(count>=1){
      setCount(count-1);
    } else {
      alert('Number Cant be zero');
    }
    
  }

  return (
   
      <div className='main'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
      <div className="card" >

        <h2>{count}</h2>
        <button onClick={incNum}>Increment</button>
        <button onClick={decNum}>Decrement</button>

      </div>
      </div>
      
    
  )
}

export default App
