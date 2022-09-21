import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import classes from "./Mission.module.scss";
import missionPic from "../../../assests/missionPic.png";
import missionEllipseSm from "../../../assests/missionElipseSmall.png";
import missionEllipseLg from "../../../assests/missionElipseBig.png";
import vissionEllipseSm from "../../../assests/visionElipseSmall.png";
import visionEllipseLg from "../../../assests/visionElipseBig.png";

const Mission = () => {
  const details =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis adipiscing varius nec risus, at. Nunc proin eu, id enim, urna elementum. Consequat at nunc eget mi luctus ipsum ante enim. Praesent nisl consectetur aliquam ut sit nulla eget feugiat. Feugiat a tempus, sagittis at. Aliquam aliquam ac ornare orci, tincidunt aliquam in. Pharetra sit dignissim in dui. Rhoncus pellentesque fringilla in purus felis praesent in enim.";

  return (
    <div className={classes.mission_container} id="mission_vision">
      <Typography component="h2" variant="h3">
        Our <span>Mission & Vision</span>
      </Typography>
      {/* left Elipse */}
      <div className={classes.missionEllipse}>
        <img src={missionEllipseSm} alt="" />
        <img src={missionEllipseLg} alt="" />
      </div>
      {/* Mission */}
      <Grid container className={classes.mission}>
        <Grid item md={6}>
          <Typography component="h3" variant="h3" className={classes.title}>
            MISSION
          </Typography>
          <Box className={classes.details}>
            <Typography component="p">{details}</Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <img src={missionPic} alt="Mission" className={classes.missionPic} />
        </Grid>
      </Grid>

      {/* Vission */}
      <Grid container className={classes.vission}>
        {/* Right Elippse */}
        <Grid item className={classes.visionEllipse}>
          <img src={vissionEllipseSm} alt="" />
          <img src={visionEllipseLg} alt="" />
        </Grid>
        <Grid item>
          <Typography component="h3" variant="h3" className={classes.title}>
            VISION
          </Typography>
          <Box className={classes.details}>
            <Typography component="p">{details}</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Projects */}

      <Grid container className={classes.projects} justifyContent="center">
        <Grid item container className={classes.project_one}>
          <Grid item>
            <Typography className={classes.projects_number}>10 +</Typography>
            <Typography className={classes.projects_category}>
              Countries
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.projects_number}>20 +</Typography>
            <Typography className={classes.projects_category}>
              States
            </Typography>
          </Grid>
        </Grid>

        <Grid item container className={classes.project_two}>
          <Grid item>
            <Typography className={classes.projects_number}>150 +</Typography>
            <Typography className={classes.projects_category}>
              Projects
            </Typography>
          </Grid>
        </Grid>

        <Grid item container className={classes.project_three}>
          <Grid item>
            <Typography className={classes.projects_number}>10000 +</Typography>
            <Typography className={classes.projects_category}>
              Volunteers
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.projects_number}>50000 +</Typography>
            <Typography className={classes.projects_category}>
              Benificiries
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Mission;
