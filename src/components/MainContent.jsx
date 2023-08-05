import React, { useRef, useEffect } from 'react'
import bgVideoSample from '../../public/video/bgVideoSample.mp4' 

const MainContent = () => {
    return (
        <>
        <video className='h-[480px] lg:h-[720px] w-full object-cover' src={bgVideoSample} autoPlay muted/>
        <div className='text-center text-base absolute w-full h-full top-[100px] lg:top-[280px] z-30'>
            <img className='flex justify-center items-center mx-auto w-30 h-30' src='./img/main-logo.png'></img>
            <h1 className=' text-5xl pb-4 font-bold'>Web Design & <br/>Photography</h1>
            <p className=' text-2xl'>First day of the lunar month </p>
            <p className=' text-1xl'> When the ecliptic longitudes of the moon and the sun are equal</p>
             <div className='px-5 py-2 inline-block bg-black text-white mt-8'>scroll</div>
        </div>
        </>
    )
}

export default MainContent