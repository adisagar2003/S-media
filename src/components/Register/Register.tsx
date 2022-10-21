import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Grid, TextField } from '@mui/material';

function Register() {
  return (
    <div class='bg-slate-800' >
        <a href="" className='bg-slate-800'>aa</a>
        <Grid gap={4}>
            <Grid container spacing={0.5}>
                <TextField id="first_name" label="First Name" variant="standard" />
                <TextField id="last_name" label="Last Name" variant="standard" />
            </Grid> 
            <Grid container xs={8}>
                <TextField id="email" label="Email" variant="standard" />
            </Grid>
            <TextField id="email" label="Username" variant="standard" />
            <TextField id="password" label="Password" variant="standard" />
            <TextField id="confirm_password" label="Confirm Password" variant="standard" />
        </Grid>
        <Button variant="outlined" color="warning">
            Register
        </Button>
    </div>
    )
}

export default Register