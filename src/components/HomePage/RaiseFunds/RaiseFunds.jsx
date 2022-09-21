import { Grid, Typography } from "@mui/material";
import React from "react";
import classes from "./RaiseFunds.module.scss";
import Medical from "../../../assests/Medical.png";
import Memories from "../../../assests/Memorial.png";
import Educational from "../../../assests/Educational.png";
import Emergency from "../../../assests/Emergencies.png";
import Children from "../../../assests/Children.png";
import Elderly from "../../../assests/Elderly.png";
import Community from "../../../assests/Community.png";
import Animals from "../../../assests/Animals.png";

const RaiseFunds = () => {
  return (
    <div className={classes.container}>
         <Typography component='h3'>
           <h3><span>Causes you can raise funds for</span></h3>
         </Typography>
         <Typography component = "p">
         Be it for a personal need, social cause or a creative idea - you can <br/>count on us for the project that you want to raise funds for.
         </Typography>
         <Grid container justifyContent='space-between' className={classes.raiseFunds_container}>
           <Grid item className={classes.raiseFunds_details}>
               <img src={Medical} alt="medical" />
           </Grid>
           <Grid item className={classes.raiseFunds_details}>
               <img src={Memories} alt="memories" />
           </Grid>
           <Grid item className={classes.raiseFunds_details}>
               <img src={Educational} alt="educational" />
           </Grid>
           <Grid item className={classes.raiseFunds_details}>
               <img src={Emergency} alt="emergency" />
           </Grid>
           <Grid item className={classes.raiseFunds_details}>
               <img src={Children} alt="children" />
           </Grid>
           <Grid item className={classes.raiseFunds_details}>
               <img src={Elderly} alt="elderly" />
           </Grid>
           <Grid item className={classes.raiseFunds_details}>
               <img src={Community} alt="community" />
           </Grid>
           <Grid item className={classes.raiseFunds_details}>
               <img src={Animals} alt="animals" />
           </Grid>
         </Grid>

    </div>

  );
};

export default RaiseFunds;
