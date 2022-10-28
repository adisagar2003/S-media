import React from 'react'
import { Chip, Grid, Avatar } from '@mui/material';
import useFetchUsers from '../../hooks/useFetchUsers';
const Friends = () => {
    
    const {responseData, loading} = useFetchUsers();
    console.log(responseData,'data appears here');
  return (
    
    <div class="absolute p-4 w-72 h-screen right-0 bg-zinc-900 flex flex-col justify-between">
        <div class="flex flex-col">
            <Chip label="People you might know" color="info" clickable variant="outlined" sx={{textDecorationColor:'cyan'}} />
            <Grid flexDirection="row" gap={30} padding={3}>
            {responseData.map((data)=> {
                return (
                    <div class="p-3">
                    <Chip
                    avatar={<Avatar alt="Natacha" src={data.profile_picture} />}
                    label={data.user_name}
                    clickable
                  />
                  </div>
                )
            })}
            </Grid>
        </div>
        <div class="flex flex-col">
        <Chip label="Following" color="info" clickable variant="outlined" sx={{textDecorationColor:'cyan'}} />

        </div>
      
    </div>
  )
}

export default Friends
