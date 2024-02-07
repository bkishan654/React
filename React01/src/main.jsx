import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Test from './test'



const ReactElement=(
  <a href="https://google.com" target='blank' >click me</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <>
       {/* ReactElement  */}
      <App />
    <Test />
  </>
  
)
