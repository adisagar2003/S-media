import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import Cookies from 'universal-cookie';
let cookies =new Cookies();
const checkCookie = () =>{
  if (cookies.get('access_token')){
    console.log('cookie found nigga');
  }
}
function HomePage() {
  return (
    <div>
        <Sidebar />
    </div>
  )
}

export default HomePage