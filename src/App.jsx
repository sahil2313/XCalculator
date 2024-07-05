import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Caculator } from './Calculator'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Caculator />
   </div>
  )
}

export default App
