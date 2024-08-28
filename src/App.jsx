import { useState } from 'react'

import './App.css'
import ControlledExample from './components/ControlledExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <ControlledExample/>
    </>
  )
}

export default App
