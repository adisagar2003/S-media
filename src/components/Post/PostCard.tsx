import { Avatar, Box, Chip, Grid} from '@mui/material';
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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardActionArea from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Cancel, HeartBrokenTwoTone, HeatPumpSharp, Send } from '@mui/icons-material';
import Comments from './Comments';

 function PostCard({ likes, dislikes, post_image, post_title, post_description, post_owner }) {
    const [postPreview,setPostPreview] = useState(false);
    async function closeModal() {
        console.log(postPreview);
        await setPostPreview(false);
        setPostPreview(false);;

    }
    const handlePreviewClick = () => {
      document.getElementById('card_display').style.display ='none';

        setPostPreview(true);
    }
    const [expanded, setExpanded] = useState(false);
    function PostPreview(){
        return (
            <div class="z-0 " style={{zIndex:9999}} id="preview_display">
            <div class="flex md:h-[80%] h-[100%]  w-[100%] md:w-[80%] z-999 fixed top-0 left-0 m-0 p-0 ">
                 <Card sx={{ display: 'flex', width: '100%', backgroundColor:'#2f2f2f', zIndex:999 }}>
                 <CardMedia
            component="img"
            sx={{ width: '100%', height:'100%'}}
            image={post_image}
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', width:"50%",zIndex:999 }} style={{zIndex:9999}}>
          <IconButton onClick={ closeModal}  sx={{zIndex:999, position:'absolute', right:0}}><Cancel /></IconButton>

            <CardContent sx={{ flex: '1 0 auto',position:'relative', width:800,zIndex:100 }}>
              <Typography component="div" variant="h5" class="z-0 w-24">
                {post_title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" sx={{display:'flex', gap:1}} component="div">
               <Avatar sx={{zIndex:999}}/> <Chip label="user_name" clickable color="error" variant="outlined" labelColor="red"  />
              </Typography>
    
              <Typography>
                {post_description}
              </Typography>
            <Grid>
                Comments
                <Grid flexDirection="row" padding="20px">
                    <Comments />
                </Grid>
            </Grid>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton>
            <ChatBubbleOutlineIcon />
            </IconButton>
            <IconButton>
            <HeartBrokenTwoTone />
            </IconButton>
            <IconButton>
            <Send />
            </IconButton>
            
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Avatar sx={{ color: 'action.active', mr: 0.6, my: 0.5 }} />
            <TextField id="input-with-sx" label="Comment" variant="standard" />
          </Box>
          <Box>
                
          </Box>
          </Box>
         
        </Card>
            </div>
            </div>
        )
    }
    


    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

   
  
    return (
  
      <div class="">
      {postPreview ? <PostPreview />:null}
      
      <Card onClick={handlePreviewClick} id="card_display"  sx={{ maxWidth: "10%", maxHeight: 400,minHeight:400,padding:4,position:'relative',left:"3%", minWidth:345,  overflow:'hidden', backgroundColor: '#2f2f2f'}} style={{zIndex:0}}>

        <CardMedia
          component="img"
          height="194"
          image={post_image}
          alt="Paella dish"
        />

         <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor:'red', zIndex:0}} aria-label="recipe">
              A
            </Avatar>
          }
  
          title={post_title}
          subheader="September 14, 2016"
        />
        
        <CardContent >
          
          <Typography variant="body2" color="black" sx={{backgroundColor:'#2f2f2f', padding: '10px'}}>
            {post_description}
          </Typography>
  
        </CardContent>
      </Card>
      </div>
    );
  }


export default PostCard;