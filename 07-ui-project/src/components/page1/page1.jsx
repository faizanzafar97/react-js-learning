import React from 'react'
import Navbar from './navbar.jsx'
import Content from './content.jsx'

const Page1 = () => {
  return (
    <div className='bg-gray-700 h-full w-full text-white p-4'>
      <Navbar />
      <Content />
    </div>
  )
}

export default Page1