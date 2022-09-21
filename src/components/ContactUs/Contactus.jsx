import {React,useState} from 'react'
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import Midpart from './Component/Midpart.jsx';
const Contactus = () => {
  const [contactus, setContactus] = useState(false);
  return (
    <div>
        <Header homestate = {contactus}/>
        <Midpart />
        <Footer />
        
    </div>
  )
}

export default Contactus