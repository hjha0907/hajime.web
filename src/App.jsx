import './App.css'
import Header from './components/Header';
import MainContent from './components/MainContent';
import SkillsAccordion from './components/SkillsAccordion';
import Slick from './components/Slider';
import WorkGalley from'./components/WorkGalley';
import Experience from './components/Experience';
import AboutMe from'./components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return ( 
    <>
    <Header />
    <MainContent/>
    <SkillsAccordion />
    <Slick />
    <WorkGalley />
    <Experience />
    <AboutMe />
    <Contact/>
    <Footer />
   </>
  )
}
export default App
