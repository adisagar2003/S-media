import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "../../components/Register/Register";
import { Grid, TextField, Typography, InputLabelProps, InputAdornment, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

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
const [showPassword,setShowPassword] = useState(false);
const [email,setEmail] = useState('');
let mounted = false;
useEffect(()=>{
    document.title="S-media Login";
    mounted = true;
},[mounted])
const classes= useStyles();

function loginFunction() {
    return 1;
}

  return (
    <div class="flex h-400 min-h-full">
        <Grid gap={4} class="flex flex-col bg-slate-800 white p-10 gap-10 w-120">
            <Grid class="flex flex-col gap-0">
                <Typography variant="h3" gutterBottom sx={{color:'white', fontWeight:'semibold' }}>
                    Welcome to S-media
                </Typography>
                <Typography variant="sm" color="warning" gutterBottom sx={{color:'gold'}} >
                    Login
                </Typography>
            </Grid>
            <TextField  id="email" label="Username" variant="standard" color="warning" onChange={(e) => {setEmail(e.target.value)}} InputLabelProps={{className: 'textfield__label'}} placeholder='Email@gmail.com' />
            <TextField 
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end" onClick={()=>setShowPassword(!showPassword)}>
                        {showPassword? (<VisibilityIcon />):(<VisibilityOffIcon />)}
                    </InputAdornment>
                )
            }}
            type={showPassword? ("text"): ("password")}
            id="password" 
            hidden label="Password" 
            onChange={(e) => {setPassword(e.target.value)}} 
            InputLabelProps={{className: 'textfield__label'}} 
            color="warning" 
            variant="standard" />
            <Button variant="outlined" color="warning">
                Login
            </Button>
        </Grid>
        <div class="h-30 w-80 bg-gradient-to-r hidden md:block from-purple-500 none to-pink-500" />
       
    </div>
    )
}

export default Login