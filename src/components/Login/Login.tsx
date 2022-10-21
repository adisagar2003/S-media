import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "../../components/Register/Register";
import { Grid, TextField, Typography, InputLabelProps } from '@mui/material';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    field: {
        color:'white'   ,
        textDecorationColor:'white'      
    }
});

function Login() {
const [userName,setUserName] = useState('');
const [password,setPassword] = useState('');
const [confirmPassword,setConfirmPassword] = useState('');
const [email,setEmail] = useState('');

const classes= useStyles();

  return (
    <div class="flex h-400 min-h-full">
        <Grid gap={4} class="flex flex-col bg-slate-800 white p-10 gap-10 w-120">
            <Grid class="flex flex-col gap-0">
                <Typography variant="h3" gutterBottom sx={{color:'white', fontWeight:'semibold' }}>
                    Welcome to S-media
                </Typography>
                <Typography variant="sm" gutterBottom sx={{color:'gold'}} >
                    Login
                </Typography>
            </Grid>
            <TextField id="email" label="Username" variant="standard" color="warning" InputLabelProps={{className: 'textfield__label'}} placeholder='Email@gmail.com' />
            <TextField id="password" hidden label="Password" InputLabelProps={{className: 'textfield__label'}} color="warning" variant="standard" />
            <Button variant="outlined" color="warning">
                Login
            </Button>
        </Grid>
        <div class="h-30 w-80 bg-gradient-to-r hidden md:block from-purple-500 none to-pink-500" />
       
    </div>
    )
}

export default Login