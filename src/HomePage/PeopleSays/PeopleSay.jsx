import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import classes from "./PeopleSay.module.scss";

const accessToken = localStorage.getItem("token");

const PeopleSay = () => {
  const apiUrl = "http://127.0.0.1:8000/api";

  const [peopleSays, setPeopleSays] = useState([]);
  const [peopleReviewId, setPeopleReviewId] = useState(0);
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
      .get(`${apiUrl}/what_p_say_alldata`, { headers: headers })
      .then((response) => {
        const posts = response.data;
        setPeopleSays(posts);

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

  const imageClickHandler = (e) => {
    setPeopleReviewId(e);
  };

  const peopleReview =
    peopleSays.length > 0 && peopleSays[peopleReviewId].person_review;

  return (
    <div className={classes.peopleSays_container}>
      <Typography component="h2">
        What <span>People Say</span>
      </Typography>
      <Box className={classes.peoples_comments}>
        <div className={classes.quotes}>“</div>
        <Typography component="p">
          {peopleReview.length < 130 ? peopleReview : `${peopleReview}...`}
        </Typography>
        {peopleReview.length > 130 && (
          <div className={classes.peoples_button}>
            <button>Read more</button>
          </div>
        )}
      </Box>
      <Grid container className={classes.PeopleSay_image_container}>
        {peopleSays.map((item, i) => {
          const bg = `http://127.0.0.1:8000${item.person_image}`;
          return (
            <button
              item
              className={classes.PeopleSay_image_box}
              key={item.id}
              onClick={() => {
                imageClickHandler(i);
              }}
            >
              <Box sx={{ background: `url(${bg})` }}></Box>
              <Typography component="p">{item.person_name}</Typography>
            </button>
          );
        })}
      </Grid>
    </div>
  );
};

export default PeopleSay;
