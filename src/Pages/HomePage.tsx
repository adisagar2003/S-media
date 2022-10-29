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
import usePosts from '../hooks/usePosts';


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
  const {      posts,postsLoading } = usePosts();
  return (
    <div class="flex">
        <Sidebar />
        <Friends />
        
        <div class="md:p-20 ">
        <div class="w-screen pb-10 md:top-20 md:w-[67%] md:h-[800px]   h-screen overflow-hidden fixed bottom-0 left-0 bottom-0 md:absolute  gap-80 md:flex md:flex-row w-5/5 flex flex-col relative md:left-80 md:p-10 border-red md:w-120 md:h-[90vh] bg-zinc-800 md:h-96 md:w-5/5 md:h-5/5 ">
     <div class="flex ">
        <div class="bg-gradient-to-r font-bold text-transparent from-blue-600 via-red-500 to-red-400 inline-block bg-clip-text">
            Stories
          <div class="flex overflow-scroll scrollbar-hide p-2">
            <div class=" flex gap-40 p-4 w-[1100px] overflow-hidden  h-[60px]">
            </div>
          </div>
          <div class="p-1">
            Posts
            <div class="md:flex md:justify-center md:align-center   pt-[0px]  md:absolute md:left-[30%]   md:w-[70vh] flex-col md:justify-center md:align-center p-2 overflow-scroll scrollbar-hide md:w-[100%]  md:left-[0px] md:h-[80vh]" sx={{zIndex:0}}>
              <div id="" class="flex h-[100%] gap-20 md:flex-row p-10 flex-col md:absolute md:left-[0%] left-[35%] " style={{zIndex:0}}>
<PostCard post_title="Build 1" post_description="the first post is here" post_image="https://robohash.org/eiriu9" />
<PostCard post_title="Avatar building" post_description="The posts will be generated from the api soon...." post_image="https://robohash.org/434" />
<PostCard post_title="First post" post_description="the first post is here" post_image="https://robohash.org/43143" />

</div>
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