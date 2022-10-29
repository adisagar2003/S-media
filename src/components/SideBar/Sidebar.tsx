import React, { useContext, useState } from 'react'
import ExploreIcon from '@mui/icons-material/Explore';
import { Drawer, styled, IconButton, Divider, List, Avatar, Grid } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";
import { LoginContext } from '../../App';
import Chip from '@mui/material/Chip';
import MenuIcon from '@mui/icons-material/Menu';
import { CloseOutlined } from '@mui/icons-material';
import { AddCircle, CloseSharp } from '@mui/icons-material';
function Sidebar({ profile_name, profile_picture }) {

   const [showSidebar, setShowSidebar] = useState(false);
   const login = useContext(LoginContext);




   const ResponsiveSidebar = () => {
      return (
         <Grid flexDirection="row" gap="30px" sx={{ position: 'absolute',height:"100%",width:"50%",backgroundColor: "#767676", padding: 4,zIndex:9999 }}>
            <div class="flex flex-col gap-5 justify-around">
            <IconButton onClick={()=>(setShowSidebar(false))}><CloseOutlined /></IconButton>
            <Chip label="Home" />
            <Chip label="Create Post" />
            <Chip label="Followers" />
            <Chip label="Messages" />
            </div>
         </Grid>
      )
   }


   const DrawerHeader = styled('div')(({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
   }));
   return (
      <div>
         <div class="md:hidden flex flex-row">
            {showSidebar ? <ResponsiveSidebar /> : <IconButton sx={{ position: 'absolute', zIndex: 9999, padding: 1 }} color="primary" onClick={() => setShowSidebar(true)}><MenuIcon /></IconButton>}
         </div>
         <div class="">
            <aside class="md:w-64 w-13 absolute hidden md:block h-screen" aria-label="Sidebar">
               <div class="overflow-y-auto py-4 px-3 bg-gray-50 h-screen fixed rounded bg-gray-900">
                  <ul class="space-y-12">
                     <li>

                        <Link to="/home"><a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <AdbIcon />
                           <span class="ml-3">S-Media</span>
                        </a>
                        </Link>
                     </li>
                     <li>
                        <Link to="/search">
                           <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-700">
                              <ExploreIcon />
                              <span class="flex-1 ml-3 whitespace-nowrap">Search</span>
                           </a>
                        </Link>
                     </li>
                     <li>
                        <Link to="/createPost" sx={{ display: 'flex' }} class="flex relative left-1 gap-2 ">
                           <Avatar sx={{ width: 35, backgroundColor: 'purple', height: 35 }} >
                              <AddCircle />
                           </Avatar>
                           <span class="relative top-2">Create Post</span>
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
                                 src={login.user_data.profile_picture}
                                 class="h-10 w-10 flex justify-center align-center pt-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                                 sx={{ width: 40, height: 40, position: 'relative', right: 0 }}
                              />
                              <span class="ml-4 font-bold">{login.user_data.username}</span>
                           </a>
                        </Link>
                     </li>
                     <li>
                        <a href="https://github.com/adisagar2003/S-media" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                           <Avatar
                              alt="Remy Sharp"
                              src="https://pic.onlinewebfonts.com/svg/img_279371.png"
                              sx={{ width: 40, height: 40, position: 'relative', right: 0, backgroundColor: 'white', border: '1px solid black' }}
                           />
                           <span class="ml-3">Contribute</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </aside>


         </div>
      </div>
   )
}

export default Sidebar