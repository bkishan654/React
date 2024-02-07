import { useState } from 'react'


function App() {

    // const pls=document.querySelector('#plus');
    // const minus=document.querySelector('#minus');
    // pls.addEventListener('click',Increment());
    // minus.addEventListener('click',Decrement());
    // let count = props.count
    let [count,setCount] = useState(1)


    let Increment = () => { if(count<20)count++;setCount(count)}
     let Decrement = () => {if(count>0)count--;setCount(count)}
    
     //understand the difference between count+=1 and count+1 in setCount
     /*let addVal=()=>
    {
      setCount(count=count+1)
      setCount(count=count+1)
      setCount(count=count+1)
      setCount(count=count+1)      
      
    }*/
  return(
    <>
      <p>{count}</p>
      <button onClick={()=>Increment()}>+</button>
      {/* <button onClick={()=>addVal()}>fuck this shit</button> */}
    <button onClick={()=>Decrement()}>-</button>
    </>
  )
}

export default App
