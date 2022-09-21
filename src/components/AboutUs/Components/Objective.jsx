import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import imgeHeader from '../Assests/imgeHeader.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card1 from './Card1'
import Cards from './Cards';
import { SimCardSharp } from '@mui/icons-material';
const Objective = () => {
  return (
    <div>
             <Carousel showStatus={false} showThumbs={false}>
                <div>
                    <Cards/>
                </div>
                <div>
                <Cards/>
                </div>
                <div>
                <Cards/>
                </div>
            </Carousel>
    </div>
  )
}

export default Objective