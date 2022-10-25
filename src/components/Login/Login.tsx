import React, { useState, useEffect, useContext } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "../../components/Register/Register";
import { Grid, TextField, Typography, InputLabelProps, InputAdornment, IconButton, Snackbar, Alert } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Cookies from "universal-cookie";
import { makeStyles } from "@mui/styles";
import axios from 'axios';
import useLogin from '../../api/useLogin';
import { API_DATA } from '../../config/api_files';
import { LoginContext } from '../../App';

const useStyles = makeStyles({
    field: {
        color: 'white',
        textDecorationColor: 'white'
    }
});

function Login() {
    const cookies = new Cookies();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [errorAlert, setErrorAlert] = useState(false);
    const [trueAlert, setTrueAlert] = useState(false);
    const login = useContext(LoginContext);



    let mounted = false;

    useEffect(() => {
        document.title = "S-media Login";

        mounted = true;
    }, [mounted])
    const classes = useStyles();
    async function loginFunction() {
        try {
            let data = await axios.post(`${API_DATA.API_BASE_URL}users/login`, {
                "email": email,
                "password": password,
            })
            if (data.data.error) {
                setErrorAlert(true);
                setInterval(() => setTrueAlert(false), 3000)
            }
            else {
                cookies.set('access_token', data.data.token);
            
                login.loggedIn = true;
                console.log({ login },"Login ");
                setToken(data.data.token);
                login.user_data = data.data.user_data;
                login.token = data.data.token;

                setTrueAlert(true);
                console.log(login, 'user data shoudl appear here');
                window.localStorage.setItem("token",data.data.token);
                window.localStorage.setItem("isLoggedIn","true") ;
                window.localStorage.setItem("user_data", JSON.stringify(data.data.user_data));

                setInterval(() => setTrueAlert(false), 3000)
            }

        }
        catch (err) {

            alert('Server error');
        }
    }


    return (
        <div>
            {errorAlert ? (<Alert severity="error" sx={{ width: '100%', backgroundColor: 'darkred' }}>
                User Not Found!!!
            </Alert>) : (<div />)}
            {trueAlert ? (<Alert severity="success" sx={{ width: '100%', backgroundColor: 'green' }}>
                Logging in....
            </Alert>) : (<div />)}
            <div class="flex h-400 min-h-full">
                <Grid gap={4} class="flex flex-col bg-slate-800 white p-10 gap-10 w-120">
                    <Grid class="flex flex-col gap-0">
                        <Typography variant="h3" gutterBottom sx={{ color: 'white', fontWeight: 'semibold' }}>
                            Welcome to S-media
                        </Typography>
                        <Typography variant="sm" color="warning" gutterBottom sx={{ color: 'gold' }} >
                            Login
                        </Typography>
                    </Grid>
                    <TextField id="email" label="Username" variant="standard" color="warning" onChange={(e) => { setEmail(e.target.value) }} InputLabelProps={{ className: 'textfield__label' }} placeholder='Email@gmail.com' />
                    <TextField
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? (<VisibilityIcon />) : (<VisibilityOffIcon />)}
                                </InputAdornment>
                            )
                        }}
                        type={showPassword ? ("text") : ("password")}
                        id="password"
                        hidden label="Password"
                        onChange={(e) => { setPassword(e.target.value) }}
                        InputLabelProps={{ className: 'textfield__label' }}
                        color="warning"
                        variant="standard" />
                    <Button variant="outlined" color="warning" onClick={loginFunction}>
                        Login
                    </Button>
                </Grid>
                <div class="h-30 w-80 bg-gradient-to-r hidden md:block from-purple-500 none to-pink-500" />

            </div>
        </div>
    )
}

export default Login