import { useState } from 'react'
import './App.css'
import FullscreenNav from './components/FullscreenNav';
import MainContent from './components/MainContent';
import Contact from './components/Contact';
import Slick from './components/Slider';
import SkillsAccordion from './components/SkillsAccordion';
import MyWorks from'./components/MyWorks';
import AboutMe from'./components/AboutMe';
import Experience from './components/Experience';


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
    <SkillsAccordion />
    <Slick />

    <img className='mt-2 w-full' src='./img/bgLine.png' />
    <MyWorks />
    <Experience />
    <AboutMe />
    <Contact/>

    <div className='bg-[#282828] text-gray-400 px-10 py-5 text-center text-xs'>copyright {currentYear} Hajime Hakamada </div>
   </>
  )
}
export default App
