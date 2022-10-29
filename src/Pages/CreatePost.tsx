import { Grid, TextField, Button, CircularProgress } from '@mui/material'
import React, {useState} from 'react'
import Friends from '../components/Friends_Groups/Friends';
import ImageUploading from 'react-images-uploading';
import Sidebar from '../components/SideBar/Sidebar';
import axios from 'axios';
import { API_DATA } from '../config/api_files';
function CreatePost() {
 

  const [images, setImages] = React.useState([]);
  const [isLoadingImage,setLoadingImage] = React.useState(false);
  const [url,setUrl] = React.useState('');
  let maxNumber= 10;
  const onChange = async (imageList:any,addUpdateIndex:any) => {
    var bodyFormData = new FormData();
    // data for submit
    setLoadingImage(true);
    setImages(imageList);
    bodyFormData.append('image',req);
    const data = await axios.post(`${API_DATA.API_BASE_URL}posts/image`,bodyFormData);
    
    setLoadingImage(false);
  };
  return (
    <div>
        <Sidebar />
        <Friends />
      {isLoadingImage? <CircularProgress color="primary" />:null}
    <div class="flex md:w-[60%] relative md:left-80 p-4 pt-20 rounded-xl gap-10  flex-col justify-center align-center">
        <div class="w-full md:h-96  p-3  bg-zinc-800/50 justify-center align-center flex ">
            <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div class="flex gap-3 h-5">
            <div>
            <Button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </Button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button></div>
            {imageList.map((image, index) => (
              <div key={index} class="h-96 w-96 p-3 border-dashed border-indigo-500">
                <img src={image['data_url']} alt="" width="300" height="300" />
                <div class="h-96 w-96 gap-3" >
                  
                  <Button variant="contained" color="primary"  onClick={() => onImageUpdate(index)}>Update</Button>
                  <Button variant="contained" onClick={() => onImageRemove(index)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
        </div>
        <div class="flex flex-col gap-3 p-4 rounded-xl border-2 border-indigo-500 border-dashed bg-zinc-800/50 justify-around  align-center h-96 relative top-24">
        <TextField id="standard-basic" label="Post Title" variant="standard" color="primary" sx={{width:"80%"}} />
        <TextField id="standard-basic" label="Post Description" variant="filled" color="primary" sx={{width:"80%"}} />
        <Grid flexDirection="row">
        <Button variant="contained" sx={{backgroundColor:'green'}} disableElevation>
    Add Post
</Button>
        </Grid>
        </div>
    </div>
    </div>
  )
}

export default CreatePost