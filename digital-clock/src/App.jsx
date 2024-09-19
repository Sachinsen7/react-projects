import { useState } from 'react'
import DigitalClock from './component/DigitalClock'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <DigitalClock/>
    </>
  )
}

export default App
