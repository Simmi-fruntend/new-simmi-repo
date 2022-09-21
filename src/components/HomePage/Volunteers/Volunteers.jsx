import React, { useEffect, useState } from "react";
import classes from "./Volunteers.module.scss";
import leftEllipse from "../../../assests/volunteerEllipseLeft.png";
import rightEllipse from "../../../assests/volunteerEllipseRight.png";
import { Grid, Typography } from "@mui/material";
import OwlCarousel from "react-owl-carousel";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Box } from "@mui/system";
import axios from "axios";

const accessToken = localStorage.getItem("token");

const Volunteers = () => {
  const apiUrl = "http://127.0.0.1:8000/api";

  const [volunteers, setVolunteers] = useState([]);
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  useEffect(() => {
    const headers = {
      "Content-type": "Application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    axios
      .get(`${apiUrl}/our_volunteers`, { headers: headers })
      .then((response) => {
        const posts = response.data;
        setVolunteers(posts);

        setError({
          status: false,
          msg: "",
          type: "",
        });
      })
      .catch((err) => {
        // if (err.response.status === 404) {
        setError({
          status: true,
          msg: err.message,
          type: "error",
        });
        // }
      });
  }, []);


  return (
    <div className={classes.volunteers_container}>
      <div className={classes.bg} />
      <div>
        <img src={leftEllipse} alt="..." className={classes.left_ellipse} />
        <img src={rightEllipse} alt="..." className={classes.right_ellipse} />
      </div>
      <Typography component="h2">
        Our <span>Volunteers</span>
      </Typography>

      <Box sx={{ padding: "0 125px 41px 80px" }}>
        <OwlCarousel
          items={3}
          className="owl-theme"
          loop
          nav
          center
          dots={false}
          margin={12}
        >
          {volunteers.map((item) => {
            return (
              <Grid container className={classes.carousel_item} key={item.id}>
                <img
                  item
                  alt="Remy Sharp"
                  src={`http://127.0.0.1:8000${item.volunteer_img}`}
                />
                <Typography item component="h5">
                  {item.volunteer_name}
                </Typography>
                <Typography item component="h6">
                  Volunteer
                </Typography>
                <Typography item component="p">
                  {item.about_volunteer}
                </Typography>
                <Grid item className={classes.social_buttons}>
                  <a href={item.volunteer_instagrm_id} target="_blank" rel="noreferrer">
                    <Instagram />
                  </a>
                  <a href={item.volunteer_twitter_id} target="_blank" rel="noreferrer">
                    <Twitter />
                  </a>
                  <a href={item.volunteer_linkdin_id} target="_blank" rel="noreferrer">
                    <LinkedIn />
                  </a>
                  <a href={item.volunteer_facebook_id} target="_blank" rel="noreferrer">
                    <Facebook />
                  </a>
                </Grid>
              </Grid>
            );
          })}
        </OwlCarousel>
      </Box>
    </div>
  );
};

export default Volunteers;
