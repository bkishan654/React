import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('grey')

  return (
    <>
  <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      
      <div className='fixed justify-center bottom-10'>
        <div className='bg-pink flex flex-wrap rounded-xl' style={{backgroundColor: 'white'}}>
          <button className='p-4 m-4 rounded-xl' style={{backgroundColor:'green'}} onClick={()=>setColor("green")}> green</button>
          <button className='p-4 m-4 rounded-xl' style={{backgroundColor:'blue'}} onClick={()=>setColor("blue")}>blue</button>
          <button className='p-4 m-4 rounded-xl' style={{backgroundColor:'orange'}} onClick={()=>setColor("orange")}>orange</button>
          <button className='p-4 m-4 rounded-xl' style={{backgroundColor:'pink'}} onClick={()=>setColor("pink")}>pink</button>
          <button className='p-4 m-4 rounded-xl' style={{backgroundColor:'red'}} onClick={()=>setColor("red")}>red </button>
        </div>
      </div>
    
  </div>
    </>
  )
}

export default App
