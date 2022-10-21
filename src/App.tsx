import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login />
    </div>
  )
}

export default App
