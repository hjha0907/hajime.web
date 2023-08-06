import React from 'react'
import { useState } from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [count, setCount] = useState(0)

  return (
    <div className='bg-[#282828] text-gray-400 px-10 py-5 text-center text-xs'>copyright {currentYear} Hajime Hakamada </div>
  )
}

export default Footer