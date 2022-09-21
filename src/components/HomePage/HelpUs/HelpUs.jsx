import React from "react";

import { Grid, Typography, Button } from "@mui/material";
import classes from "./HelpUs.module.scss";
import help1 from "../../../assests/help1.png";
import help2 from "../../../assests/help2.png";

const HelpUs = () => {
  const data = [
    {
      image: help1,
      title: "Be a Volunteer",
      details:
        "Even the all-powerful Pointing has no control about the blind texts.",
      button: "Read More",
    },
    {
      image: help2,
      title: "Donate Money",
      details:
        "Even the all-powerful Pointing has no control about the blind texts.",
      button: "Donate Now",
    },
    {
      image: help1,
      title: "Collaborate",
      details:
        "Even the all-powerful Pointing has no control about the blind texts.",
      button: "Collaborate",
    },
  ];
  return (
    <div className={classes.helpUs_container}>
      <Typography component="h2" varient="h2">
        How can You <span>help us</span>
      </Typography>
      <Grid container className={classes.helpUs_box}>
        {data.map((item, i) => {
          return (
            <Grid item key={i} className={classes.helpUs}>
              <div style={{marginTop:"52px"}}>
                <img src={item.image} alt="..." style={{height:'87px'}} />
              </div>
              <Typography component="h4" varient="h4">
                {item.title}
              </Typography>
              <Typography component="p" varient="p">
                {item.details}
              </Typography>
              <div>
                <Button>{item.button}</Button>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default HelpUs;
