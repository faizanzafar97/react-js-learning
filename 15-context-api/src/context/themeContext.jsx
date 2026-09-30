import React, { createContext, useState } from 'react'

export const themedataContext=createContext();

const themeContext = (props) => {

    const [theme,setTheme]=useState('light')

  return (
    <div>
        <themedataContext.Provider value={[theme,setTheme]}>
            {props.children}
        </themedataContext.Provider>
    </div>
  )
}

export default themeContext
