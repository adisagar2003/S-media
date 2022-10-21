import { useState } from 'react'
import { Route,Routes  } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'
import './index.css'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
     <Routes>
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/"></Route>
     </Routes>
    </div>
  )
}

export default App
