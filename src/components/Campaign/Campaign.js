import React from 'react'
import {CSSModules,Box,Button,Alert,
  CssBaseline,
  circularProgressClasses} from '@mui/material'
import Alertcmp from './Alert'
import Midpage from './Midpage'
import Headers from './components/Header/Header'
import SupporterStory_page from './SupporterStory_page'
import Story_support from './Story_support'
import './Story_support.css'
import TouchWithUs from './components/HomePage/TouchWithUs/TouchWithUs'
import classes from './Campaign.module.css';
import Footer from './components/Footer/Footer';
// import { useLocation } from 'react-router-dom'


const Campaign = () => {
  // const location = useLocation();
  // console.log(location.state.formData);
  return (
    <Box className={classes.root}>
<Headers/>
<Midpage/>
<Story_support />
<TouchWithUs/>
<Footer/>
</Box>
  )
}

export default Campaign;