import React  from "react";
import classes from "./Speakers.module.scss";
import { Typography } from "@mui/material";
import {motion} from "framer-motion";
import images from './images';
import { useEffect,useRef } from "react";


const Speakers = () => {
    const carousel = useRef();

    useEffect(()=>{
      console.log(carousel.current.scrollWidth);
    })
    return (
      <>
        <div className={classes.container}>
        <Typography component = "h2">
            Prominent Speakers in<br />our Orgainsation
        </Typography>
        <div className = {classes.body}>
              <motion.div ref = {carousel} className={classes.carousel}>
                   <motion.div drag = "x" dragConstraints = {{right:0}} className={classes.innercarousel}>
                         {images.map(image => {
                          return(
                            <motion.div className={classes.item}>
                              <img src={image} alt="" />
                              <h5>Name</h5>
                            </motion.div>
                          );
                         })}
                   </motion.div>
              </motion.div>
        </div>
        </div>
        
      </>
    );
  };
  
  export default Speakers;