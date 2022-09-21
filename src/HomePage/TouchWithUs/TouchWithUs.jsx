import { Grid, Typography } from "@mui/material";
import React from "react";
import classes from "./TouchWithUs.module.scss";
import callImg from "../../../assests/call.png";
import mailImg from "../../../assests/mail.png";
import locationImg from "../../../assests/location.png";

const TouchWithUs = () => {
  const contactUs = [
    {
      id: 1,
      image: locationImg,
      alt: "L",
      details:
        "479, Baspadamka, Tehsil Pataudi, Gurugram, Haryana - 122503, India",
    },
    {
      id: 2,
      image: callImg,
      alt: "C",
      details: "(+91) 70152 - 95025",
    },
    {
      id: 3,
      image: mailImg,
      alt: "E",
      details: "support@simmifoundation.org",
    },
  ];
  return (
    <div className={classes.touchWithUs_container}>
      <Typography component="h2">
        Get in <span>touch with us</span>
      </Typography>
      <Grid container className={classes.touchWithUs_box}>
        {contactUs.map((data) => {
          return (
            <Grid item key={data.id}>
              <div className={classes.image_box}>
                <img src={data.image} alt={data.alt} />
              </div>
              <Typography component="p">{data.details}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default TouchWithUs;
