import React from 'react'
import Login from '../components/Login/Login'
import Navbar from '../components/Navbar/Navbar'

function LoginPage() {
  return (
    <div>
    <Navbar />
      <div class="flex justify-items-center items-center w-full h-full">
        <div class="grid justify-items-center  w-400  w-full pt-40">
              
        <Login />
        </div>

    </div>
    </div>
    
  )
}

export default LoginPage