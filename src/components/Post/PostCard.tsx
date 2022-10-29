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

 function PostCard() {
    const [postPreview,setPostPreview] = useState(false);
    async function closeModal() {
        console.log(postPreview);
        await setPostPreview(false);
        setPostPreview(false);;

    }
    const [expanded, setExpanded] = useState(false);
    function PostPreview(){
        return (
            <div class="z-0 " style={{zIndex:100}}>
            <div class="flex md:h-[80%] h-[100%]  w-[100%] md:w-[80%] z-999 fixed top-0 left-0 m-0 p-0 ">
                 <Card sx={{ display: 'flex', width: '100%', backgroundColor:'#2f2f2f', zIndex:999 }}>
                 <CardMedia
            component="img"
            sx={{ width: '100%', height:'100%'}}
            image="https://images.unsplash.com/photo-1666726435132-9ac5e965a7d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', width:"50%",zIndex:999 }} style={{zIndex:9999}}>
          <IconButton onClick={ closeModal}  sx={{zIndex:999, position:'absolute', right:0}}><Cancel /></IconButton>

            <CardContent sx={{ flex: '1 0 auto',position:'relative', width:800,zIndex:100 }}>
              <Typography component="div" variant="h5" class="z-0 w-24">
                Post Title 
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" sx={{display:'flex', gap:1}} component="div">
               <Avatar sx={{zIndex:1}}/> <Chip label="user_name" clickable color="error" variant="outlined" labelColor="red"  />
              </Typography>
    
              <Typography>
                Post description 
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
                a
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

    const handlePreviewClick = () => {
        setPostPreview(true);
    }
  
    return (
  
      <div class="">
      {postPreview ? <PostPreview />:null}
      
      <Card  sx={{ maxWidth: "10%", maxHeight: 400,minHeight:400,padding:4,position:'relative',left:"3%", minWidth:345,  overflow:'hidden', backgroundColor: '#2f2f2f',zIndex:0}} style={{zIndex:0}}>

        <CardMedia
          component="img"
          height="194"
          image="https://images.unsplash.com/photo-1666804054975-64c52544008d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt="Paella dish"
        />

         <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor:'red', zIndex:0 }} aria-label="recipe">
              A
            </Avatar>
          }
  
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        
        <CardContent >
          
          <Typography variant="body2" color="black" sx={{backgroundColor:'#2f2f2f', padding: '10px'}}>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
  
        </CardContent>
      </Card>
      </div>
    );
  }


export default PostCard;