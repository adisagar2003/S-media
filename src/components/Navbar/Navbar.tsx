import React from 'react'
import {Link } from "react-router-dom";
function Navbar() {
  return (
    <div class="p-8  flex flex-row justify-around min-h-19 max-h-2">
        <Link to="/">
            <a class="mr-auto font-bold text-slate-100 flex">S-Media</a>  
        </Link>
        <div class="flex ">
            <Link to="/home"><a class="mr-3 text-slate-100">Contribute</a></Link>
            <Link to="/project"><a class="mr-3 text-slate-100">Project</a></Link>
            <Link to="/contact"><a class="mr-4 text-slate-100">Contact</a></Link>
        </div>
        <div class="flex justify-center">
            <Link to="/login">
            <a class="mr-3 text-slate-100 ">Login</a>
            </Link>

            <Link to="/register">
            <a class="mr-3 text-slate-100">Register</a>
            </Link>
        </div>
        


    </div>
  )
}

export default Navbar