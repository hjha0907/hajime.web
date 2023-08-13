import React, { useRef, useEffect } from 'react'
import MainBgFilm from '../../public/video/MainBgFilm.mp4' 
import { TypeAnimation } from 'react-type-animation';

const MainContent = () => {
    return (
        <>
        <div className=''>
            <video id='home' className='h-[640px] lg:h-[720px] w-full object-cover' src={MainBgFilm} autoPlay muted loop/>
            <div className='text-center text-base absolute w-full top-[120px] lg:top-[150px] z-30'>
                <img className='flex justify-center items-center mx-auto w-30 h-30' src='./img/main-logo.png'></img>
                    <h1 className=' md:text-6xl text-5xl pb-4 font-bold mt-4'>
                    Hi, I am Hajime<br/>
                    <TypeAnimation sequence={[ 

                            'Photographer',
                            1000,
                            'Web designer',
                            1000,
                            'Front developer',
                            1000,
                            'Videographer',
                            1000,
                            'Illustrator',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1em', display: 'inline-block' }}
                        repeat={Infinity}
                      />
                     </h1>
                    <p className=' text-2xl'>Melbourne, Australia</p>
                    <p className=' text-2xl'>Welcome & thank you for visiting my website</p>
                    <div className='px-5 py-2 inline-block mt-8 text-1xl border-2 border-black rounded-xl'>scroll <img className=' animate-bounce w-5 h-5 ml-2 mt-2' src='../../img/ArrowDown.svg' /></div>
            </div>
            <div className="">
            <div className='bg-bglogoidea bg-fixed bg-top w-[100%] h-32 object-cover'></div>
            </div>
        </div>
</>
    )
}

export default MainContent