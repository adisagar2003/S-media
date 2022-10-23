 import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Register from '../components/Register/Register'

function RegisterPage() {
    let mounted = false;
    useEffect(()=>{
        document.title="S-media Register";
        mounted = true;
    },[mounted])
  return (
    <div>
      <Navbar />
       <div class="flex justify-items-center items-center w-full h-full">
        <div class="grid justify-items-center  w-400  w-full pt-40">
        <Register />
        </div>

    </div>
    </div>
   
  )
}

export default RegisterPage