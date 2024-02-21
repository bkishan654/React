import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(10)
  const [num, setNum]=useState(false)
  const [chars, setChars]=useState(false)
  const [string,setString]=useState("")

  // const handleChange = (event) => {
  //   setLength(event.target.value);
  //   let str=generateString(event.target.value);
  //   setString(str);
  //   // console.log(str);
  //   // console.log(length,num,chars);
    
  // };

let test ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// function generateString(length) {
//     let result = '';

//     let characters='';

//   if(num)
//     test+='012345678'
//   if(chars)
//     test+='@#&()–[{}]:;,?/*\'';


//     characters=test;

//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }

//     return result;
// }

const generateString=useCallback(()=>{
    let result = '';

    let characters='';

  if(num)
    test+='012345678'
  if(chars)
    test+='@#&()–[{}]:;,?/*\'';


    characters=test;

    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setString(result);
    
},[length,num,chars,string]);

    useEffect(()=>{
      generateString(length)
    },[length,num,chars]);

const passRef=useRef(null);

const copyToClipboard=useCallback(()=>{
  if(passRef.current)
    passRef.current.select();
  window.navigator.clipboard.writeText(string);
  
},[string])

  return (
    <>
        <div  className='m-10 p-10 rounded-3xl bg-gray-800'>
          <h1 className=' bg-gray-700 m-5 p-5 rounded-xl text-center w-40 align-middle text-orange-500'>password generator</h1>
          <br />
          <label for="fname" className='text-white'>First name:</label>
          <input ref={passRef} type="text" id="fname" name="fname" value={string} readOnly className='p-1 rounded-md m-2'></input>
          <button onClick={copyToClipboard} color="black" className='text-orange-500 bg-gray-700 rounded-lg p-1 m-1 pb-3 hover:bg-gray-500' >copy</button>
          <br />
          
          <label for="number" className='text-white'>Number</label>
          <input type="checkbox" name="number" id="number" onChange={() => setNum(!num)}/>
          <br />
          <label for="character" className='text-white'>character</label>
          <input type="checkbox" name="character" id="character" onChange={()=> setChars(!chars)}/>
          <br />
          <label for="myRange" className='text-white'>Length</label>
          <input type="range" min="6" value={length} max="20"  id="myRange" onChange={(e)=>setLength(e.target.value)}/><h6 className='text-white'>{length}</h6>
          <br />
          <h6 className='text-white'>{string}</h6>

        </div>

    </>
  )
}

export default App
