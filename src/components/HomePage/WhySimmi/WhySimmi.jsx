import React from "react";
import classes from "./WhySimmi.module.scss";
import { Grid, Typography } from "@mui/material";
import industry from "../../../assests/industry.png";
import manage from "../../../assests/manage.png";
import support from "../../../assests/support.png";
import donation from "../../../assests/donation.png";
import withdraw from "../../../assests/withdraw.png";
import donor from "../../../assests/donor.png";

const WhySimmi = () => {
  const tNc = [
    { image: industry, title: "Industry’s best fundraising success rate" },
    { image: manage, title: "Easy-To-Manage Tools To Boost Results" },
    { image: support, title: "Get Expert Support 24/7" },
    { image: donation, title: "Receive donations via all payment modes" },
    { image: withdraw, title: "Withdraw Funds Without Hassle" },
    { image: donor, title: "Supported By 55,00,000+ Donors" },
  ];
  return (
    <>
      {/* Why SIMMI */}
      <Typography component="h3" style={{paddingTop:"30px"}}>
      <span>WHY SIMMI</span>
      </Typography>
      <div className={classes.container}>
      <Typography component = "p">
        Be it for a personal need, social cause or a creative idea - you can count<br />on us for
        the project that you want to raise funds for.
      </Typography>
      <Grid container spacing={2} className={classes.whySimmi}>
        <Grid item xs={6} md={8} className={classes.WhySimmi_support} container>
          {tNc.map((item, i) => {
            // console.log(item);
            return (
              <Grid
                item
                container
                alignItems="center"
                flexDirection="column"
                key={i}
              >
                <img src={item.image} alt="hello" />
                <Typography component="p">{item.title}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      </div>
      
    </>
  );
};

export default WhySimmi;
