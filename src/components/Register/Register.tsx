import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./Register.css";
import { Grid, TextField, Typography, InputLabelProps } from '@mui/material';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    field: {
        color:'white'   ,
        textDecorationColor:'white'      
    }
});

function Register() {
const [userName,setUserName] = useState('');
const [password,setPassword] = useState('');
const [confirmPassword,setConfirmPassword] = useState('');
const [email,setEmail] = useState('');

const classes= useStyles();

  return (
    <div class="flex">
        <Grid gap={4} class="flex flex-col bg-slate-800 white p-10 gap-10 w-120">
            <Grid class="flex flex-col gap-0">
                <Typography variant="h3" gutterBottom sx={{color:'white', fontWeight:'semibold' }}>
                    Welcome to S-media
                </Typography>
                <Typography variant="sm" gutterBottom sx={{color:'gold'}} >
                    Create your account
                </Typography>
            </Grid>
            <Grid container spacing={0.5} class="flex gap-5">
                <TextField id="first_name" className={classes.field} label="First Name" variant="standard" sx={{color: 'white'}}   InputLabelProps={{className: 'textfield__label'}} />
                <TextField id="last_name" label="Last Name" variant="standard" color="warning"  InputLabelProps={{className: 'textfield__label'}} />
            </Grid> 
            <Grid container xs={8}>
                <TextField id="email" label="Email" variant="standard" color="warning" InputLabelProps={{className: 'textfield__label'}} fullWidth/>
            </Grid>
            <TextField id="email" label="Username" variant="standard" color="warning" InputLabelProps={{className: 'textfield__label'}} placeholder='Email@gmail.com' />
            <TextField id="password" hidden label="Password" InputLabelProps={{className: 'textfield__label'}} color="warning" variant="standard" />
            <TextField id="confirm_password" label="Confirm Password" InputLabelProps={{className: 'textfield__label'}} variant="standard" />
            <Button variant="outlined" color="warning">
                Register
            </Button>
        </Grid>
        <div class="h-30 w-80 bg-gradient-to-r hidden md:block from-purple-500 none to-pink-500" />
       
    </div>
    )
}

export default Register