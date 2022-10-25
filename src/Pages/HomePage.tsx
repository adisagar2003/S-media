import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import Cookies from 'universal-cookie';
let cookies =new Cookies();
const checkCookie = () =>{
  if (cookies.get('access_token')){

  }
}
function HomePage() {
  return (
    <div class="flex">
        <Sidebar />
        <div class="p-20">
        <div class="md:flex md:flex-row flex flex-col relative left-80 p-20 border-red w-120 h-120 bg-slate-300 ">
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
        </div>
        </div>
    </div>
  )
}

export default HomePage
