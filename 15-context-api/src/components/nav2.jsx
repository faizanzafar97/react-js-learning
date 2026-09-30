import React, { useContext } from 'react'
import { themedataContext } from '../context/themeContext'

const nav2 = () => {

    const [theme,setTheme]=useContext(themedataContext)

  return (
    <div className='nav2'>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      <h4>{theme}</h4>
    </div>
  )
}

export default nav2
