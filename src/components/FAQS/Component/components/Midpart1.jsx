import React from "react";
import classes from "../CSS/Midpart1.module.css";
import { Grid, Typography } from "@mui/material";
import faqOthers from "../../Assest/faqOthers.png";
import faqDonars from "../../Assest/faqDonars.png";
import faqWithdrawal from "../../Assest/faqWithdrawal.png";
import forOrganizers from "../../Assest/forOrganizers.png";

const Midpart1 = () => {
  return (
    <Grid
      container
      className={classes.midpart1_container}
      flexDirection="column"
    >
      <Grid item className={classes.quries_container}>
        <Grid container flexDirection={"column"}>
          <Grid item container flexDirection={"row"} flexWrap="nowrap">
            <Grid
              item
              container
              paddingRight={"122px"}
              className={classes.box1}
            >
              <Grid item>
                <img src={faqOthers} alt="" />
              </Grid>
              <Grid item>
                <Typography component="h2" className={classes.midpart1_h2}>Your Queries</Typography>
              </Grid>
              <Grid item>
                <Typography component="p" className={classes.midpart1_p} sx={{ maxWidth: "389px" }}>
                  Read frequent queries in our users' minds. Click here to know.
                </Typography>
              </Grid>
            </Grid>

            <Grid item container paddingLeft={"122px"} className={classes.box2}>
              <Grid item>
                <img src={faqOthers} alt="" />
              </Grid>
              <Grid item>
                <Typography component="h2" className={classes.midpart1_h2}>Others</Typography>
              </Grid>
              <Grid item>
                <Typography component="p" className={classes.midpart1_p} sx={{ maxWidth: "389px" }}>
                  Questions on our pricing, COVID-19 fundraisers and more are
                  available here.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container flexDirection={"row"} flexWrap="nowrap">
            <Grid
              item
              container
              paddingRight={"122px"}
              className={classes.box3}
            >
              <Grid item>
                <img src={faqWithdrawal} alt="" />
              </Grid>
              <Grid item>
                <Typography component="h2" className={classes.midpart1_h2}>Funds Withdrawl</Typography>
              </Grid>
              <Grid item>
                <Typography component="p" className={classes.midpart1_p} sx={{ maxWidth: "428px" }}>
                  After successfully raising funds how to withdraw them? Click
                  here to know the process.
                </Typography>
              </Grid>
            </Grid>

            <Grid item container paddingLeft={"122px"} className={classes.box4}>
              <Grid item>
                <img src={faqDonars} alt="" />
              </Grid>
              <Grid item>
                <Typography component="h2" className={classes.midpart1_h2}>For Donors</Typography>
              </Grid>
              <Grid item>
                <Typography component="p" className={classes.midpart1_p} sx={{ maxWidth: "428px" }}>
                  Have you made any donations for SIMMI? If you have any
                  questions, please click here.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid className={classes.forOrganizers_box}>
          <Grid container flexDirection="column" sx={{height:"100%",alignItems:"center",justifyContent:"center"}}>
            <Grid item>
              <img src={forOrganizers} alt="" />
            </Grid>
            <Grid item>
              <Typography component="h3" className={classes.midpart1_h3}>For Organizers</Typography>
            </Grid>
            <Grid item>
              <Typography component="h4" className={classes.midpart1_h4}>
                Read this article if you are raising funds for Simmi Foundation.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container>
        Popular Articles
      </Grid>
    </Grid>
  );
};

export default Midpart1;
