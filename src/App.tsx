import { useState, createContext } from 'react'
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
import Protected from './Protected'
export const LoginContext = createContext({user_data: {},loggedIn:false, setUserData: (user_data:{})=>{} ,setLoggedIn: (loggedIn:boolean)=>{} , token:'', setToken: (token:'')=>{}});
function App() {
  const [loggedIn, setLoggedIn]  =  useState<boolean>(false);
  const [userData,setUserData] = useState<object>({});
  const [token,setToken] = useState<object>(false);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <LoginContext.Provider value={{loggedIn, userData, token, setToken ,setUserData,  setLoggedIn}}>
     <Routes>
      <Route path="/home" element={<Protected isLoggedIn={loggedIn}><HomePage /></Protected>} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/"></Route>
     </Routes>
     </LoginContext.Provider>
    </div>
  )
}

export default App
