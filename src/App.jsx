import { useState } from 'react'
import './App.css'
import FullscreenNav from './components/FullscreenNav';
import MainContent from './components/MainContent';
import Contact from './components/Contact';
import LogoSlider from './components/LogoSlider';


const currentYear = new Date().getFullYear();

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
    <header className='flex items-center border-b boder-gray-50 p-3 fixed bg-white w-full z-50 shadow'>
      <div className="flex container mx-auto ">
        <a href='#'><img src='./img/title.png'/></a>
        <FullscreenNav/>
      </div>
    </header>    
    <MainContent/>

    <div className='bg-logoidea bg-fixed h-24 bg-center'/>
    <div className='bg-[#282828]'>
    <p className='w-[20%] mx-auto text-center px-5 py-2 bg-white text-black text-1xl lg:text-2xl font-bold rounded-t-lg'>Skills</p>
    </div>
    <ul className='flex flex-row mx-auto container justify-center pt-10 font-bold bg-grad'> 
      <li className='pl-5'>Design</li>
      <li className='pl-5'>Coding</li>
      <li className='pl-5'>Photograph</li>
      <li className='pl-5'>Videograph</li>
      <li className='pl-5'>Illustration</li>
    </ul>
    <LogoSlider/>

    <img className='mt-10 w-full' src='./img/bgLine.png' />

    <div className='bg-[#E5F6FF] mx-auto text-center font-bold pb-10'>
      <p className='text-1xl lg:text-2xl pb-8'>Works</p>
      <div className='max-w-7xl px-5 grid sm:grid-cols-3 grid-cols-2 mx-auto gap-10 place-content-center place-items-center'>
        <a href ='#' className='flex'><img src='./img/web-work-01.png'/></a>
        <a href ='#' className='flex'><img src='./img/web-work-02.png'/></a>
        <a href ='#' className='flex'><img src='./img/comingsoon.png'/></a>
        <a href ='#' className='flex'><img src='./img/photo-work-01.png'/></a>
        <a href ='#' className='flex'><img src='./img/photo-work-02.png'/></a>
        <a href ='#' className='flex'><img src='./img/photo-work-03.png'/></a>
      </div> 
    </div>

    <div className='bg-bgaboutme min-h-screen w-full bg-cover'>
        <div className='max-w-5xl bg-[#F4F4F4] h-[395px] relative top-96 flex'>
          <div><img src='./img/hajime.png' className='' /></div>
          <div className='mr-5'>
            <h1 className='text-4xl font-bold'>Hajime Hakamada</h1>
            <p>I am a Japanese web designer and photographer.
                I have worked at a Web design company in Japan for 2 years before coming to Melbourne.
                I came to Australia in 2019 and am now a permanent resident.
                I am happy to have a chat: please contact me for any
                enquires.
            </p>
          </div>
          <div></div>
        </div>
      <div className='ml-auto max-w-2xl bg-[#E6B422] h-[480px]'></div>
    </div>
    <Contact/>

    <div className='bg-[#282828] text-gray-400 px-10 py-5 text-center text-xs'>copyright {currentYear} Hajime Hakamada </div>
   </>
  )

}
export default App
