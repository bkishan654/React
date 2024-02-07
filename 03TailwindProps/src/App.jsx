import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={name:"kishan",
              age:"22"
            }
  let arr=[1,2,3]

  return (
    <>
      <Card channel="kishan"  />
      <Card channel="appu" btn="please click"/>
      <Card channel="appy appy" someObj={myObj} arra={arr} btn="click if u want to"/>
      <h1 className='bg-green-400 text-black p-3 rounded-xl mt-5' >Tailwind Test </h1>
    </>
  )
}

export default App
