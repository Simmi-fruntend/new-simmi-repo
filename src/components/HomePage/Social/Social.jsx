import React from "react";
import classes from "./Social.module.scss";
import { Box, Typography } from "@mui/material";
import mobileBg from '../../../assests/mobile.png'

const Social = () => {
  return (
    <div className={classes.social_container}>
      <Box className={classes.social}>
        <div className={classes.mobile}>
          <img src={mobileBg} alt="..."/>
        </div>
        <Typography component="h2">
          Social <span>Media</span>
        </Typography>
      </Box>
    </div>
  );
};

export default Social;
