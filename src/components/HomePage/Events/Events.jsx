import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Events.module.scss";
import eventLocation from "../../../assests/eventLocation.png";
import eventCalender from "../../../assests/eventCalender.png";

const accessToken = localStorage.getItem("token");

const Events = () => {
  const apiUrl = "http://127.0.0.1:8000/api";
  const [currentEvents, setCurrentEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
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
    // current event
    axios
      .get(`${apiUrl}/event_data`, { headers: headers })
      .then((response) => {
        const posts = response.data;
        setCurrentEvents(posts);

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

    // Upcoming Event
    axios
      .get(`${apiUrl}/incoming_event_data`, { headers: headers })
      .then((response) => {
        const posts = response.data;
        setUpcomingEvents(posts);

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
    <div className={classes.events_container} id="events">
      <Typography component="h3">
        Current and Upcoming <span>Events</span>
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "33.8px",
        }}
      >
        <Box className={classes.currentEvent}>
          {currentEvents.map((item, i) => {
            const divider = i < currentEvents.length - 1 && <Divider />;
            return (
              <div key={item.id}>
                <img src={`http://127.0.0.1:8000${item.event_img}`} alt="..." />
                <Box style={{ padding: "29.54px 12px 0 22.54px" }}>
                  <Typography component="h5">{item.event_name}</Typography>
                  <Typography varient="body">{item.about_event}</Typography>
                </Box>
                {divider}
              </div>
            );
          })}
        </Box>

        <div className={classes.upcomingEvents__contain}>
          <Box className={classes.upcomingEvents_container}>
            <Grid container className={classes.upcomingEvents}>
              {upcomingEvents.map((item, i) => {
                const divider = i < upcomingEvents.length - 1 && <Divider />;
                return (
                  <>
                    <Grid
                      item
                      container
                      className={classes.upcomingEvents_box}
                      key={i}
                    >
                      <Grid item className={classes.upcomingEvents_image}>
                        <img
                          src={`http://127.0.0.1:8000${item.event_img}`}
                          alt="E"
                        />
                      </Grid>
                      <Grid item className={classes.upcomingEvents_details}>
                        <Box sx={{ paddingLeft: "9.2px" }}>
                          <span>
                            <img src={eventLocation} alt="L" />{" "}
                            {item.event_location}
                          </span>
                          <span
                            style={{
                              display: "inline-block",
                              padding: "0 5px",
                              fontSize: "14px",
                              lineHeight: "17px",
                            }}
                          >
                            |
                          </span>
                          <span>
                            <img src={eventCalender} alt="C" />{" "}
                            {item.event_date}
                          </span>
                        </Box>
                        <Typography component="h6">
                          {item.event_name}
                        </Typography>
                      </Grid>
                    </Grid>
                    {divider}
                  </>
                );
              })}
            </Grid>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default Events;
