import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <p className="read-the-docs">
        pres f
      </p>
    </div>
  )
}

export default App
