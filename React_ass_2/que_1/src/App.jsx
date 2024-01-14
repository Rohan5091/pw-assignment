import { useState } from 'react'
import './App.css'

function App() {
  const [login, setlogin] = useState(true)

  return (
      <div className='main'>
            <img src="https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration.png" alt="Instagram"  />
            <form action="">
                <input hidden={login} type="text" placeholder='Mobile Number Or Email' />
                <input hidden={login} type="text" placeholder='Full Name' />
                <input type="text" placeholder='Phone Number,Username Or Email' />
                <input type="password" placeholder='Password' />
                <input className='btn' type="button" value={login?"login":"signup"} />
            </form>
            <div className='Property'>
              {login?`Don't have account `:"have an account ? "} 
              {login?<span onClick={()=>setlogin(false)}>signup</span>:<span onClick={()=>setlogin(true)}>Login</span>}
            </div>
      </div>
  )
}

export default App
