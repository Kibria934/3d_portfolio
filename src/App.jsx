import { BrowserRouter } from 'react-router-dom'
import './App.css'
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas
} from "./components/index"

const width = window.innerWidth + "px";
console.log(width)

const App = () => {

  return (
    <BrowserRouter>
      <div className='z-0 bg-primary'>
        <div className={`bg-hero-pattern mx-0 w-full bg-cover bg-no-repeat bg-center`}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
