import React from 'react'

const App = () => {
  return (
    <div>
      <input type="text" placeholder="Enter your name" onChange={(e) => console.log(e.target.value)} />

      <button onClick={() => console.log('Button clicked!')}>Click Me</button>

      <button onMouseEnter={() => console.log('Button hovered!')}>Hover Me</button>
    </div>

  )
}

export default App
