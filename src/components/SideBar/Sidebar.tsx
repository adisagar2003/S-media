import React, { useContext } from 'react'
import ExploreIcon from '@mui/icons-material/Explore';
import { Drawer, styled, IconButton, Divider, List, Avatar } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";
import { LoginContext } from '../../App';
function Sidebar({ profile_name, profile_picture }) {


const {user_data} = useContext(LoginContext);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
console.log(user_data);
  return (
    <div class="">
        

        <aside class="md:w-64 w-13 absolute h-screen" aria-label="Sidebar">
   <div class="overflow-y-auto py-4 px-3 bg-gray-50 h-screen rounded dark:bg-gray-800">
      <ul class="space-y-12">
         <li>
         <Link to="/home"><a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <AdbIcon />
               <span class="ml-3">S-Media</span>
            </a>
            </Link>
         </li>
         <li>
            <Link to="/search">
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
    <ExploreIcon />
               <span class="flex-1 ml-3 whitespace-nowrap">Search</span>
            </a>
            </Link>
         </li>
         <li>
            <Link to="/followers">
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg class="bg-gradient-to-r hidden md:block from-purple-500 none to-pink-500" aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="pink" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Followers</span>
            </a>
            </Link>
         </li>
         <li>
            <Link to="/products">
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
            </a>
            </ Link>
         </li>
         <li>
            <Link to="/messages">
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <ChatIcon />
               <span class="flex-1 ml-3 whitespace-nowrap">Messages</span>
            </a>
            </Link>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <NotificationsIcon />
               <span class="flex-1 ml-3 whitespace-nowrap">Notifications</span>
            </a>
         </li>
      </ul>
      <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
         <li>
            <Link to="/profile">
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 40, height: 40, position:'relative', right:0 }}
/>
               <span class="ml-4 font-bold">a</span>
            </a>
            </Link>
         </li>
         <li>
            <a href="https://github.com/adisagar2003/S-media" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <Avatar
  alt="Remy Sharp"
  src="https://pic.onlinewebfonts.com/svg/img_279371.png"
  sx={{ width: 40, height: 40, position:'relative', right:0, backgroundColor:'white', border:'1px solid black' }}
/>
               <span class="ml-3">Contribute</span>
            </a>
         </li>
      </ul>
   </div>
</aside>


    </div>
  )
}

export default Sidebar