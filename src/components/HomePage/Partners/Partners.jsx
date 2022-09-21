import {Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./Partners.module.scss";
import axios from "axios";
import zomato from "../../../assests/zomato.png";
import uber from "../../../assests/uber.png";
import samsung from "../../../assests/samsung.png";
import netflix from "../../../assests/netflix.png";
import youtube from "../../../assests/logos_youtube.png";
import slack from "../../../assests/logos_slack.png";
import microsoft from "../../../assests/logos_microsoft.png";
import gpay from "../../../assests/logos_google-pay.png";
import discord from "../../../assests/logos_discord.png";


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
             <div className={classes.partners_text_container}>
               <Typography component="h2">
                 Partners
               </Typography>
               <Typography component = "p">
                 Trusted by the largest brands and corporations, and the most impactful foundations around the world.
               </Typography>
             </div>
    <div className={classes.partners_images_container}>
              <div className={classes.first_row}>
                  <img src={youtube} alt="youtube" />
                  <img src={slack} alt="slack" />
                  <img src={microsoft} alt="microsoft" />
              </div>
              <div className={classes.second_row}>
                  <img src={zomato} alt="zomato" />
                  <img src={uber} alt="uber" />
                  <img src={samsung} alt="samsung" />
              </div>
              <div className={classes.third_row}>
                  <img src={discord} alt="discord" />
                  <img src={gpay} alt="gpay" />
                  <img src={netflix} alt="netflix" />
              </div>
    </div>
      {/* <Grid container className={classes.partners_box}>
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
      </Grid> */}
    </div>
  );
};

export default Partners;
