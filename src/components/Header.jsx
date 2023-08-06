import React from 'react'
import FullscreenNav from './FullscreenNav';

const Header = () => {
  return (
    <>
    <header className='flex items-center border-b boder-gray-50 p-3 fixed bg-white w-full z-50 shadow'>
      <div className="flex container mx-auto ">
        <a href='#'><img src='./img/title.png'/></a>
        <FullscreenNav/>
      </div>
    </header>      
    </>
    )
}

export default Header