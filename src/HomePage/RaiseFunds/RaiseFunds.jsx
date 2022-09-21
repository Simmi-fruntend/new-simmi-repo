import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import classes from "./RaiseFunds.module.scss";
import raiseFunds from "../../../assests/raiseFunds.png";

const RaiseFunds = () => {
  return (
    <Grid container justifyContent='space-between' className={classes.raiseFunds_container}>
      <Grid item className={classes.raiseFunds_details}>
        <Typography component='h3'>
          you can <span>raise funds</span> for
        </Typography>
        <Button>Start Fundraising</Button>
      </Grid>
      <Grid item className={classes.raiseFunds_image}>
        <img src={raiseFunds} alt='...' />
      </Grid>
    </Grid>
  );
};

export default RaiseFunds;
