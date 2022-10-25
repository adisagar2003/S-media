import React, { useContext } from 'react'
import { Grid, Typography, Button, createTheme, ThemeProvider } from '@mui/material'
import Navbar from '../components/Navbar/Navbar';
import { LoginContext } from '../App';
function LandingPage() {
    const login = useContext(LoginContext);

    const theme = createTheme({
        Typography:{
         h3:{
            color:'green'
         }
        }
    })

    //Styled components
    console.log('poland',login);
  return (
    <Grid>
        <Navbar />
<Grid direction="row"  container sx={{width:"100%"}} justifyContent="space-around" >
    <Grid item spacing={0.5} gap={5} sx={{marginTop:"170px;"}} direction="column">
        <Typography variant="h2">
            The platform you deserve.
        </Typography>
        <Typography variant="h5" color="lightgray" >
            A decentralized open-source social media project 
        </Typography>
        <Grid  container gap="100px" sx={{paddingTop: "50px;"}} >
        <Button>Login</Button>
        <Button>Register</Button>
        </Grid>
    </Grid>
    <Grid item sx={{width:"20%"}}>
        <img src="https://robohash.org/3333" />
    </Grid>
</Grid>
  <Grid direction="row" container justifyContent="center" alignItems="center">
    <Grid class="pt-20">
  <button type="button" class="bg-gradient-to-r ease-in duration-100 bg-blue-500 hover:bg-indigo-500 p-4 font-bold w-40 rounded-xl   hover:to-blue-300">
    Features
</button>
</Grid>

  </Grid>
  <Grid container sx={{padding: "30px;", gap:"200px;", justifyContent: "center", alignItems: "center", paddingTop: "100px;" }}>
<Grid item sx={{borderRight: "1px solid gray", padding:"20px", fontSize:"35px", fontWeight:"semibold"}}>
<ThemeProvider theme={theme}>
<Typography variant="h3">
    Open Source
</Typography>
</ThemeProvider>
<Typography variant="h6" >
   Your contributions matter.
</Typography>
</Grid>
<Grid item sx={{borderRight: "1px solid gray", padding:"20px", fontSize:"35px", fontWeight:"semibold"}}>
<Typography variant="h3">
    Decentralized
</Typography> 
<Typography variant="h6" >
   Further blockchain implementation planned matter.
</Typography>
</Grid>
<Grid item sx={{borderRight: "1px solid gray", padding:"20px", fontSize:"35px", fontWeight:"semibold"}}>
<Typography variant="h3">
    Latest tech stack
</Typography> 
<Typography variant="h6" >
 Material UI, Tailwind CSS, React ts, Node.
</Typography> </Grid>

</Grid>
<Grid>
        
</Grid>
</Grid>
  )
}

export default LandingPage