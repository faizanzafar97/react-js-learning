import React,{useState} from 'react'
import Navbar from './components/navbar'


const App = () => {
  const [theme,setTheme]=useState('ligght')
  return (
    <div>
      <Navbar theme={theme} />
      
    </div>
  )
}

export default App
