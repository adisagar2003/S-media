import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import Cookies from 'universal-cookie';
import { Avatar } from '@mui/material';
import Friends from '../components/Friends_Groups/Friends';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import PostCard from '../components/Post/PostCard';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}


const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

let cookies =new Cookies();
const checkCookie = () =>{
  if (cookies.get('access_token')){

  }
}
function HomePage() {
  return (
    <div class="flex">
        <Sidebar />
        <Friends />
        
        <div class="p-20 ">
        <div class="w-[320px] overflow-hidden md:w-[60vw] gap-80 md:flex md:flex-row w-5/5 flex flex-col relative left-80 p-10 border-red w-120 h-[90vh] bg-zinc-800 h-96 w-5/5 h-5/5 ">
     <div class="flex ">
        <div class="bg-gradient-to-r font-bold text-transparent from-blue-600 via-red-500 to-red-400 inline-block bg-clip-text">
            Stories
          <div class="flex overflow-scroll scrollbar-hide p-2">
            <div class=" flex gap-40 p-4 w-[1100px] overflow-hidden  h-[60px]">
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  sx={{border: '4px solid red', hover:"pointer"}} clickable/>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  sx={{border: '4px solid red', hover:"pointer"}} clickable/>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  sx={{border: '4px solid red', hover:"pointer"}} clickable/>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </div>
          </div>
          <div class="p-1">
            Posts
            <div class=" gap-20 pt-96 flex w-[60vhw] justify-center align-center pl-96 overflow-scroll scrollbar-hide flex-col h-[70vh]">
<PostCard />      
<PostCard />      
<PostCard />      
<PostCard />      

            </div>
          </div>
        </div>

     </div>

        </div>
        </div>
    </div>
  )
}

export default HomePage