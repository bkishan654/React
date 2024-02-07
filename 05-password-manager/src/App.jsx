import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(10)
  const [num, setNum]=useState(false)
  const [chars, setChars]=useState(false)

  const handleChange = (event) => {
    setLength(event.target.value);
    let str=generateString(event.target.value);
    console.log(str);
    console.log(length,num,chars);
    
  };

const test1 ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const test2='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const test3='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#&()–[{}]:;,?/*\'';
const test4='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#&()–[{}]:;,?/*\'0123456789';

function generateString(length) {
    let result = '';

    let characters='';

  if(num && chars)
  
    characters= test4;
  else if(num==true && chars==false)
    characters= test2;
  else if(num==false && chars==true)
    characters= test3;
  else 
    characters= test1;

    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}


  return (
    <>
        <div style={{backgroundColor:'pink'}} className='m-10 p-10 rounded-3xl'>
          <label for="fname" className='text-white'>First name:</label>
          <input type="text" id="fname" name="fname"></input>
          <button className='text-white'>copy</button>
          <br />
          
          <label for="number" className='text-white'>Number</label>
          <input type="checkbox" name="number" id="number" onClick={()=> setNum(!num)}/>
          <br />
          <label for="character" className='text-white'>character</label>
          <input type="checkbox" name="character" id="character" onClick={()=> setChars(!chars)}/>
          <br />
          <label for="myRange">Length</label>
          <input type="range" min="1" value={length} max="20"  id="myRange" onChange={handleChange}/><h6>{length}</h6>
          <br />
          <h6>{generateString(length)}</h6>

        </div>

    </>
  )
}

export default App
