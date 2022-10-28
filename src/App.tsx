import { useState, createContext, useContext, useEffect } from 'react'
import { Route,Routes  } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'
import './index.css'
import HomePage from './Pages/HomePage'
import LandingPage from './Pages/LandingPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import Protected from './Protected';
import axios from 'axios';
import Cookies from 'universal-cookie';
import ProtectedLogin from './components/ProtectionLogin'
const cookies = new Cookies(); 

const loginContextData = {
  user_data:{},
  loggedIn: false,
  setUserData: (user_data:{})=>{},
  setLoggedIn: (loggedIn:boolean)=>{},
  token: '',
  setToken: (token:'')=>{}
}
export const LoginContext = createContext(loginContextData);
function App() {
  const [dataLoading, setDataLoading] = useState(true);
  const login = useContext(LoginContext);
  let login_mounted = login;

  useEffect(() => {
    let login_mounted = login;
    const user_data = window.localStorage.getItem('user_data');
    if (user_data !=null) {
      login.loggedIn = true;
      let user_data_parsed = JSON.parse(user_data);
      login.loggedIn = true;
      login.user_data = user_data_parsed;
      console.log(login);

      setDataLoading(false);
    }
    else{
      setDataLoading(false);
    }
  },[]);
  return (
    <div className="App">
      {dataLoading ? (<h1>Loading</h1>) : (
    <LoginContext.Provider value={loginContextData}>
     <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/register" element={<RegisterPage />} />
     </Routes>
     </LoginContext.Provider>)}
    </div>
  )
}

export default App
