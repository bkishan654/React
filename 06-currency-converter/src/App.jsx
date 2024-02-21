import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl m-1 bg-orange-400 rounded-lg '>
        hello world
      </h1>
      <h6 className='text-5xl m-1 bg-orange-400 rounded-lg '>
        hello world 
      </h6>
    </>
  )
}

export default App
