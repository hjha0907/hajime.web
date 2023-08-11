import React, { useRef, useEffect } from 'react'
import MainBgFilm from '../../public/video/MainBgFilm.mp4' 

const MainContent = () => {
    return (
        <>
        <div className=''>
            <video id='home' className='h-[640px] lg:h-[720px] w-full object-cover' src={MainBgFilm} autoPlay muted/>
            <div className='text-center text-base absolute w-full top-[120px] lg:top-[150px] z-30'>
                <img className='flex justify-center items-center mx-auto w-30 h-30' src='./img/main-logo.png'></img>
                <h1 className=' md:text-6xl text-5xl pb-4 font-bold mt-4'>Hi, I am a Web Designr <br/> & Photographer</h1>
                <p className=' text-2xl'>First day of the lunar month </p>
                <p className=' text-1xl'> When the ecliptic longitudes of the moon and the sun are equal</p>
                <div className='px-5 py-2 inline-block mt-8 text-1xl border-2 border-black rounded-xl'>scroll <img className=' animate-bounce w-5 h-5 ml-2 mt-2' src='../../img/ArrowDown.svg' /></div>
            </div>
            <div className="">
            <div className='bg-bglogoidea bg-fixed bg-top w-[100%] h-28 object-cover'></div>
            </div>
        </div>
</>
    )
}

export default MainContent