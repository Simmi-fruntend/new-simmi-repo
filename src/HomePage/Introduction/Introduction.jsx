import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./Introduction.module.scss";
// import image1 from "../../../assests/image3.png";
// import image2 from "../../../assests/image4.png";
import axios from "axios";

const accessToken = localStorage.getItem("token");

const Introduction = () => {
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
      .get(`${apiUrl}/carousel`, { headers: headers })
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
    <div className={classes.introduction}>
      <Typography variant="h3" component="h1">
        Let’s Make <span>Better Future</span>
      </Typography>
      <Typography variant="subtitle1" component="p">
        We look forward to alleviate poverty and enhance the dignty of poor in
        the world by addressing basic, but neglected issues of poor.
      </Typography>
      <div className={classes.donateNow}>
        <Button>Donate Now</Button>
      </div>

      {/* Carousal */}

      <div className={classes.carousal1}>
        {!error.status && (
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators carousal1-indicator">
              {data.map((item, i) => {
                return (
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={i}
                    className={i === 0 ? "active" : ""}
                    aria-current={i === 0 && "true"}
                    aria-label={`Slide ${data.length}`}
                    key={i}
                  ></button>
                );
              })}
            </div>
            <div className="carousel-inner">
              {data.map((item, i) => {
                const active = i === 0 ? "active" : "";

                return (
                  <div className={`carousel-item ${active}`} key={item.id}>
                    <img
                      src={`http://127.0.0.1:8000${item.carousel_img}`}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Chat with us */}

        {/* <div className={classes.chatWithUs}>
          <Button>Chat with Us</Button>
          <span className={classes.chatTale}></span>
        </div> */}
      </div>
    </div>
  );
};

export default Introduction;
