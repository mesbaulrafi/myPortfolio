import React from 'react'
import Benner from '../layouts/Benner'
import About from '../layouts/About'
import Services from './Services'
import Education from '../layouts/Education'
import Input from '../layouts/Input'
import Projects from './Projects'
import Contact from '../layouts/Contact'



const Home = () => {
  return (
   <>
   <Benner/>
   <About/>
   <Services/>
   <Education/>
   <Input/>
   <Projects/>
   <Contact/>
   </>
  )
}

export default Home