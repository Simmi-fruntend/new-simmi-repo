import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer'
import Mission from '../HomePage/Mission/Mission';
import Head from './Components/Head'
import Introtext from './Components/Introtext';
import Objective from './Components/Objective';
import OurTeam from './Components/OurTeam';


const AboutUs = () => {
  return (
    <div>
        <Header />
        <Head />
        <Introtext />
        <Mission />
        <OurTeam/>
        <Objective/>
        <Footer/>
        
    </div>
  )
}

export default AboutUs