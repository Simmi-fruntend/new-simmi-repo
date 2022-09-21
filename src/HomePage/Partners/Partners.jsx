import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./Partners.module.scss";
import axios from "axios";

const accessToken = localStorage.getItem("token");

const Partners = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const apiUrl = "http://127.0.0.1:8000/api";

  useEffect(() => {
    const headers = {
      "Content-type": "Application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    axios
      .get(`${apiUrl}/our_partners`, { headers: headers })
      .then((response) => {
        const posts = response.data;
        setData(posts);

        setError({
          status: false,
          msg: "",
          type: "",
        });
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setError({
            status: true,
            msg: err.message,
            type: "error",
          });
        }
      });
  }, []);

  return (
    <div className={classes.partners_container}>
      <Typography component="h2">
        Our <span>Partners</span>
      </Typography>
      <Grid container className={classes.partners_box}>
        {data.map((item) => {
          return (
            <Grid item key={item.id}>
              <img
                src={`http://127.0.0.1:8000${item.partner_logo}`}
                alt="..."
              />
              <Typography component="p">{item.partner_name}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Partners;
