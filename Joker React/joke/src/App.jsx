import { useState } from 'react'
import Joker from './joker';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Joker />
    </>
  )
}

export default App
