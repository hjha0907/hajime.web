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
import LoadingScreen from './components/LoadingScreen';


function App() {
  return ( 
    <>
    <LoadingScreen/>
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

window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }

  }
}

export default App
