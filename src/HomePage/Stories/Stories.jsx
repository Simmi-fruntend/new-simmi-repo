import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import classes from "./Stories.module.scss";
import axios from "axios";

const accessToken = localStorage.getItem("token");

const Stories = () => {
  const apiUrl = "http://127.0.0.1:8000/api";
  const [stories, setStories] = useState([]);
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
      .get(`${apiUrl}/our_succ_story`, { headers: headers })
      .then((response) => {
        const posts = response.data;
        setStories(posts);

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
    <div className={classes.stories_container}>
      <Typography component="h2">
        Our Success <span>Stories</span>
      </Typography>
      <Box className={classes.stories_box}>
        <Carousel interval={null} indicators={false} className={classes.aaa}>
          {stories.map((item, i) => {
            return (
              <Carousel.Item className={classes.carousel_item} key={i}>
                {item.success_img && (
                  <Box className={classes.stories_image}>
                    <img
                      className="d-block w-100"
                      src={`http://127.0.0.1:8000${item.success_img}`}
                      alt="First slide"
                    />
                  </Box>
                )}
                <Box className={classes.stories_details}>
                  <Typography component="h6">{item.success_heading}</Typography>
                  <Typography component="p">
                    {item.about_success.length >= 185
                      ? `${item.about_success.slice(0, 185)}...`
                      : item.about_success}
                  </Typography>
                  {item.about_success.length >= 185 && (
                    <Button>Read More</Button>
                  )}
                </Box>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Box>
      <Box className={classes.stories_seeAll}>
        <Button>See All</Button>
      </Box>
    </div>
  );
};

export default Stories;
