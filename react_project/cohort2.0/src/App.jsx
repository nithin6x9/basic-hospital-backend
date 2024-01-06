import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button><br></br>
        Hi there
    </div>
  )
}

export default App
