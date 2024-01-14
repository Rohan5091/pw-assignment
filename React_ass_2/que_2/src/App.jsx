import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
          <div> 
               <span className='count' >{count}</span>
               <div>
                <button onClick={()=>setCount(count+1)}>Increment</button>
                <button onClick={()=>setCount(count-1)}>Decremant</button>
                </div>
          </div> 
    </div>
    </>
  )
}

export default App
