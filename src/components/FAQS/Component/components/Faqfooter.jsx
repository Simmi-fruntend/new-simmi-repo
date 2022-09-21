import React from 'react'
import classes from '../CSS/Faqfooter.module.css';
import medical from '../../Assest/medical.png';
import others from '../../Assest/others.png';
import education from '../../Assest/education.png';
import { Box, Typography } from '@mui/material';
import logofoot from '../../Assest/logofoot.png';
import email from '../../Assest/email.png';
import phone from '../../Assest/phone.png';
import location from '../../Assest/location.png';

const Faqfooter = () => {
  return (
    <div className={classes.maindiv}>
      <div className={classes.mainfooter}>
        <div className={classes.mainfootterrow}>
          <div className={classes.footerrow1}>
            <div className={classes.typo1}>
              Donate Towards
            </div>
            <div className={classes.type}>
              <div ><img src={medical} /><span>Medical</span></div>
            </div>
            <div className={classes.type}>
              <div><img src={education} /><span>Education</span></div>
            </div>
            <div className={classes.type}>
              <div><img src={others} /><span>Others</span></div>
            </div>

          </div>

          <div className={classes.footerrow2}>
            <Box component='button' className={classes.buttondiv}>
              <Typography variant='h5' className={classes.buttontypo}>
                Start a Fundraiser
              </Typography>

            </Box>
            <Box component='div' className={classes.mydiv}>
              Pricing | Reviews | FAQ Tips
            </Box>
          </div>
          <div className={classes.footerrow3}>
            <div className={classes.footertow3col1}>
              <div className={classes.logodiv}>
                <img src={logofoot} alt='logo' />
                <span className={classes.typologo}>
                  SIMMI FOUNDATION
                </span>
              </div>
              <a href='#'>
                <div >
                  About Us
                </div>
              </a>
              <a href='#'>
                <div >
                  Press Media
                </div>
              </a>
              <a href='#'>
                <div >
                  Team
                </div>
              </a>
              <a href='#'>
                <div >
                  Carrier
                </div>
              </a>
              <a href='#' >
                <div >
                  Contact
                </div>
              </a>


            </div>
            <div className={classes.footerrow3col2}>
              <div className={classes.datadiv}>
                <img src={location} alt='location' />
                <span>
                  479, Baspadamka, Tehsil Pataudi,<br /> Gurugram, Haryana -122503, India
                </span>
              </div>
              <div className={classes.datadiv}>
                <img src={phone} alt='location' />
                <span>
                (+91) 70152 - 95025

                </span>
              </div>
              <div className={classes.datadiv}>
                <img src={email} alt='location' />
                <span>
                support@simmifoundation.org
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
      <div className={classes.secfooter}>

      </div>
    </div>
  )
}

export default Faqfooter