import React from "react";
import classes from "./WhySimmi.module.scss";
import { Grid, Paper, Typography } from "@mui/material";
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
        <Grid item xs={6} md={4}>
          <Paper className={classes.WhySimmi_foundation}>
            Why <span>SIMMI</span> Foundation ?
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default WhySimmi;
