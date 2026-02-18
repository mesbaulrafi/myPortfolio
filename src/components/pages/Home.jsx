import React from 'react'
import Benner from '../layouts/Benner'
import About from '../layouts/About'
import Services from './Services'
import Education from '../layouts/Education'
import Input from '../layouts/Input'
import Projects from './Projects'



const Home = () => {
  return (
   <>
   <Benner/>
   <About/>
   <Services/>
   <Education/>
   <Input/>
   <Projects/>
   </>
  )
}

export default Home