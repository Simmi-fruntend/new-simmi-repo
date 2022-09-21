import React, { useEffect, useState } from "react";
import classes from "./TrendingFundraisers.module.scss";
import { Button, Grid, Typography } from "@mui/material";
import {
  AccessTime,
  ArrowForwardIos,
  Facebook,
  Favorite,
} from "@mui/icons-material";
import { Container } from "@mui/system";
import axios from "axios";

const accessToken = localStorage.getItem("token");
const currentDate = new Date().toISOString().slice(0, 10);

const TrendingFundraisers = () => {
  const apiUrl = "http://127.0.0.1:8000/api";
  const [fundraisers, setFundraisers] = useState([]);
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
      .get(`${apiUrl}/fundraiser_alldata`, { headers: headers })
      .then((response) => {
        const posts = response.data;
        setFundraisers(posts);

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

  // console.log(fundraisers);
  return (
    <div className={classes.trendingFundriser_container}>
      <Typography component="h2" varient="h2">
        Featured Fundraisers
        {/* <span>Fundraisers</span> */}
      </Typography>
      <Typography component="p">
        View the fundraisers that are most active right now
      </Typography>
      <Container>
        <Grid container direction="column">
          <Grid item className={classes.button_container}>
            <Button>
              See All <ArrowForwardIos />
            </Button>
          </Grid>

          <Grid
            item
            container
            style={{ marginBottom: "51px", justifyContent: "space-between" }}
          >
            {fundraisers.map((item) => {
              const progress =
                (item.fund_amout_raise * 100) / item.fund_amount_target;
              const remainingDays = Math.ceil(
                Math.abs(new Date(item.fund_end_date) - new Date(currentDate)) /
                  (1000 * 60 * 60 * 24)
              );
              return (
                <Grid
                  item
                  container
                  direction="column"
                  sx={{ maxWidth: "325px !important" }}
                  className={classes.trendingFundriser_box}
                  key={item.id}
                >
                  <Grid item>
                    <div
                      className={classes.trendingFundriser_image}
                      style={{
                        backgroundImage: `url(http://127.0.0.1:8000${item.fundraiser_image})`,
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    style={{ paddingLeft: "21px", paddingRight: "21px" }}
                  >
                    <Grid item>
                      <Typography component="h4" varient="h4">
                        {item.fundraiser_name}
                      </Typography>
                    </Grid>
                    <Grid item className={classes.trendingFundriser_avtar}>
                      <img
                        alt="..."
                        src={`http://127.0.0.1:8000${item.fundraise_by_image}`}
                      />
                      <Typography varient="body">
                        {item.fundraise_by_name}
                      </Typography>
                    </Grid>
                    <Grid item className={classes.trendingFundriser_amount}>
                      <Typography style={{ color: "#555353" }}>
                        &#8377;{" "}
                        <span>
                          {item.fund_amout_raise
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>{" "}
                        raised of
                      </Typography>
                      <Typography style={{ color: "rgb(85 83 83 / 52%)" }}>
                        &#8377;{" "}
                        <span>
                          {item.fund_amount_target
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>{" "}
                        goal
                      </Typography>
                      <div className={classes.trendingFundriser_progress}>
                        <div style={{ width: `${progress}%` }} />
                      </div>
                    </Grid>
                    <Grid
                      item
                      container
                      className={classes.trendingFundriser_time}
                    >
                      <Grid item>
                        <AccessTime />
                        <Typography varient="body">
                          <span>{remainingDays}</span> Days left
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Favorite style={{ color: "#FF8C21" }} />
                        <Typography varient="body">19717 Supporters</Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      className={classes.trendingFundriser_button}
                    >
                      <Grid item className={classes.trendingFundriser_donate}>
                        <Button>Donate Now</Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>

      <Typography className={classes.trendingFundriser_note}>
        Note: Some fundraisers are not eligible for any tax deduction such as
        80G, 501(c), etc.
      </Typography>
    </div>
  );
};

export default TrendingFundraisers;
