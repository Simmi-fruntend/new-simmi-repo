import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./MyDashboard.module.scss";
import dp from "../../assests/r.jpg";
import withdrawal from "../../assests/myDashboard_withdrawal.png";
import withdrawal_clicked from "../../assests/myDashboard_withdrawal_clicked.png";
import fundraisers from "../../assests/myDashboard_fundraisers.png";
import fundraisers_clicked from "../../assests/myDashboard_fundraisers_clicked.png";
import donation from "../../assests/myDashboard_donation.png";
import donation_clicked from "../../assests/myDashboard_donation_clicked.png";
import myDashboard_download from "../../assests/myDashboard_download.png";
import { Search } from "@mui/icons-material";
import axios from "axios";

{
  /* <a onClick={() => {window.location.href="/something"}}>Something</a> */
}
const accessToken = localStorage.getItem("token");
const isLoginState = localStorage.getItem("islogin");
const headers = {
  "Content-type": "Application/json",
  Authorization: `Bearer ${accessToken}`,
};

const MyDashboard = () => {
  const list = [
    {
      id: 0,
      name: "Withdrawals",
      title: "My Withdrawals",
      image: withdrawal,
      image_clicked: withdrawal_clicked,
    },
    {
      id: 1,
      name: "Fundraiser",
      title: "My Fundraisers",
      image: fundraisers,
      image_clicked: fundraisers_clicked,
    },
    {
      id: 2,
      name: "Donation",
      title: "My Donations",
      image: donation,
      image_clicked: donation_clicked,
    },
  ];

  const [isActive, setIsActive] = useState(0);
  const [buttonName, setButtonName] = useState("Withdrawals");
  const withdraw = buttonName === "Withdrawals";
  const fundraise = buttonName === "Fundraiser";
  const donate = buttonName === "Donation";

  const [userData, setUserData] = useState(null);
  const userName = userData && userData.name;
  const userEmail = userData && userData.email;

  const [medicalFundDetails, setMedicalFundDetails] = useState([]);
  const [otherFundDetails, setOtherFundDetails] = useState([]);

  const apiUrl = "http://127.0.0.1:8000/api";

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem("id") && localStorage.getItem("id");
    axios
      .get(`${apiUrl}/loggeduser/${userId}`, { headers: headers })
      .then((response) => {
        const posts = response.data;
        setUserData(posts["user is"]);
        setError({
          status: false,
          msg: "",
          type: "",
        });
      })
      .catch((err) => {
        setError({
          status: true,
          msg: err.message,
          type: "error",
        });
      });
  }, []);

  useEffect(() => {
    if (userEmail !== null) {
      axios
        .get(`${apiUrl}/medical_fundraiser/${userEmail}`, { headers: headers })
        .then((response) => {
          const post = response.data;
          const dat = {
            image: post.cover_photo,
            title: post.fundraiser_title,
            targetAmt: post.target_amount,
            raisedAmt: post.current_amount_raised,
            lastDate: post.end_date,
          };
          setMedicalFundDetails([dat]);
          setError({
            status: false,
            msg: "",
            type: "",
          });
        })
        .catch((err) => {
          setError({
            status: true,
            msg: err.message,
            type: "error",
          });
        });
    }
  }, [userData, userEmail]);

  useEffect(() => {
    if (userEmail !== null) {
      axios
        .get(`${apiUrl}/fundraiser_others/${userEmail}`, { headers: headers })
        .then((response) => {
          const post = response.data;
          const dat = {
            image: post.payload.beneficiary_photo,
            title: post.payload.title_of_campaign,
            targetAmt: post.payload.target_amount,
            raisedAmt: post.payload.raised_amount,
            lastDate: post.payload.end_date,
          };
          setOtherFundDetails([dat]);
          setError({
            status: false,
            msg: "",
            type: "",
          });
        })
        .catch((err) => {
          setError({
            status: true,
            msg: err.message,
            type: "error",
          });
        });
    }
  }, [userData, userEmail]);

  console.log(otherFundDetails);
  console.log(medicalFundDetails);

  const activeButtonHandler = (e, id) => {
    console.log(e.target.name);
    setButtonName(e.target.name);
    setIsActive(id);
  };

  return (
    <div className={classes.myDashboard_container}>
      <Grid container sx={{ height: "1207px" }}>
        <Grid
          item
          container
          sx={{ height: "100%" }}
          lg={3}
          xs={4}
          className={classes.myDashboard_nav}
        >
          <Grid item container className={classes.myDashboard_profile}>
            <Grid
              item
              sx={{ backgroundImage: `url(${dp})` }}
              className={classes.myDashboard_dp}
            />
            <Typography component="h3">{userName}</Typography>
            <Typography component="p">Lorem ipsum</Typography>
            <Divider />
          </Grid>
          <Grid item container className={classes.myDashboard_lists}>
            {list.map((list) => {
              const active = isActive === list.id;
              return (
                <Grid item width={"100%"} paddingBottom="56px" key={list.id}>
                  <Button
                    name={list.name}
                    variant="outlined"
                    className={
                      isActive === list.id && "myDashboard__button__active"
                    }
                    startIcon={
                      <img
                        src={active ? list.image_clicked : list.image}
                        alt=""
                      />
                    }
                    onClick={(e) => {
                      activeButtonHandler(e, list.id);
                    }}
                  >
                    {list.name}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid
          item
          container
          sx={{ height: "100%" }}
          lg={9}
          xs={8}
          className={classes.myDashboard_body}
        >
          <Grid item container className={classes.myDashboard_head}>
            <Grid item>
              {list.map((list) => {
                return (
                  isActive === list.id && (
                    <Typography component="h2" key={list.id}>
                      {list.title}
                    </Typography>
                  )
                );
              })}
            </Grid>
            <Grid item className={classes.myDashboard_searchBox}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "Search" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <Search />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item container className={classes.myDashboard_content}>
            <Grid item container className={classes.myDashboard_content_top}>
              <Typography item component="h4">
                Projects
              </Typography>
              {!donate && (
                <Typography item component="h4">
                  Raised Amount
                </Typography>
              )}
              {withdraw && (
                <Typography item component="h4">
                  Withdrawals
                </Typography>
              )}
              {donate && (
                <>
                  <Typography item component="h4">
                    Your Contribution
                  </Typography>
                  <Typography item component="h4">
                    Receipts
                  </Typography>
                </>
              )}
            </Grid>
            <Divider item />
            <Grid
              item
              container
              flexWrap={"nowrap"}
              flexDirection="column"
              className={classes.myDashboard_content_bottom}
            >
              {/* Withdrawal */}
              {withdraw && (
                <>
                  <Grid item pl="25px" pt="44px" pr="25px">
                    <Grid item container className={classes.detail}>
                      <Grid
                        item
                        container
                        className={classes.projects_details}
                        sx={{ height: "131px" }}
                      >
                        <Grid
                          item
                          className={classes.project_image}
                          sx={{ height: "112px" }}
                        >
                          Img
                        </Grid>
                        <Grid item>
                          <p>Support trible</p>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        container
                        className={
                          classes.myDashboard_content_bottom_flexColumn
                        }
                      >
                        <Grid item>Rs 0.00</Grid>
                        <Grid item>$ 0.00</Grid>
                      </Grid>

                      <Grid
                        item
                        container
                        className={
                          classes.myDashboard_content_bottom_flexColumn
                        }
                      >
                        <Grid item>Rs 0.00</Grid>
                        <Grid item>$ 0.00</Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Divider item pt="44px" />
                </>
              )}

              {/* Fundraiser */}
              {fundraise && (
                <>
                  {medicalFundDetails ?
                    medicalFundDetails.map((item, i) => {
                      const progressLine =
                        (item.raisedAmt * 100) / item.targetAmt;
                      return (
                        <Grid item pl="25px" pt="44px" pr="25px" key={i}>
                          <Grid item container className={classes.detail}>
                            <Grid
                              item
                              container
                              className={classes.projects_details}
                              sx={{
                                height: "166px",
                                maxWidth: "345px",
                              }}
                            >
                              <Grid
                                item
                                className={classes.project_image}
                                sx={{
                                  height: "140px",
                                }}
                              >
                                <img
                                  src={`http://127.0.0.1:8000${item.image}`}
                                  style={{
                                    height: "inherit",
                                    width: "inherit",
                                  }}
                                  alt=""
                                />
                              </Grid>
                              <Grid item>
                                <p>{item.title}</p>
                              </Grid>
                            </Grid>
                            <Grid
                              item
                              container
                              className={
                                classes.myDashboard_content_bottom_flexColumn
                              }
                              maxWidth="364px"
                              height="166px"
                              justifyContent="space-between"
                              alignItems="flex-end"
                            >
                              <Grid item className={classes.progressBar}>
                                <div style={{ width: progressLine }} />
                              </Grid>
                              <Grid
                                item
                                container
                                className={classes.fund_raised}
                              >
                                <Grid item color="#ff5c00">
                                  <Typography component="p">Raised</Typography>
                                  <Typography component="p">
                                    Rs. {item.raisedAmt}
                                  </Typography>
                                </Grid>

                                <Grid item>
                                  <Typography component="p" textAlign={"end"}>
                                    Goal
                                  </Typography>
                                  <Typography component="p">
                                    Rs. {item.targetAmt}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid item>
                                <Typography
                                  component="h5"
                                  className={classes.days_left}
                                >
                                  19 Days to go{" "}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Divider item pt="44px" />
                        </Grid>
                      );
                    }): (<p>No Data Found.</p>)}

                  {otherFundDetails &&
                    otherFundDetails.map((item, i) => {
                      const progressLine =
                        (item.raisedAmt * 100) / item.targetAmt;
                      return (
                        <Grid item pl="25px" pt="44px" pr="25px" key={i}>
                          <Grid item container className={classes.detail}>
                            <Grid
                              item
                              container
                              className={classes.projects_details}
                              sx={{
                                height: "166px",
                              }}
                            >
                              <Grid
                                item
                                className={classes.project_image}
                                sx={{
                                  height: "140px",
                                }}
                              >
                                <img
                                  src={`http://127.0.0.1:8000${item.image}`}
                                  style={{ height: "140px", width: "128px" }}
                                  alt=""
                                />
                              </Grid>
                              <Grid item>
                                <p>{item.title}</p>
                              </Grid>
                            </Grid>
                            <Grid
                              item
                              container
                              className={
                                classes.myDashboard_content_bottom_flexColumn
                              }
                              maxWidth="364px"
                              height="166px"
                              justifyContent="space-between"
                              alignItems="flex-end"
                            >
                              <Grid item className={classes.progressBar}>
                                <div style={{ width: progressLine }} />
                              </Grid>
                              <Grid
                                item
                                container
                                className={classes.fund_raised}
                              >
                                <Grid item color="#ff5c00">
                                  <Typography component="p">Raised</Typography>
                                  <Typography component="p">
                                    Rs. {item.raisedAmt}
                                  </Typography>
                                </Grid>

                                <Grid item>
                                  <Typography component="p" textAlign={"end"}>
                                    Goal
                                  </Typography>
                                  <Typography component="p">
                                    Rs. {item.targetAmt}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid item>
                                <Typography
                                  component="h5"
                                  className={classes.days_left}
                                >
                                  19 Days to go{" "}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          {i < otherFundDetails.length - 1 && (
                            <Divider item pt="44px" />
                          )}
                        </Grid>
                      );
                    })}
                </>
              )}

              {/* Donation */}
              {donate && (
                <>
                  <Grid item pl="25px" pt="44px" pr="25px">
                    <Grid item container className={classes.detail}>
                      <Grid
                        item
                        container
                        className={classes.projects_details}
                        sx={{
                          height: withdraw ? "131px" : "166px",
                          maxWidth: "345px",
                        }}
                      >
                        <Grid
                          item
                          className={classes.project_image}
                          sx={{ height: withdraw ? "112px" : "140px" }}
                        >
                          Img
                        </Grid>
                        <Grid item>
                          <p>Support trible</p>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography sx={{ fontSize: "29px" }}>
                          Rs. 500
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Button sx={{ color: "#FF5C00", maxWidth: "300px" }}>
                          <img
                            src={myDashboard_download}
                            alt="."
                            style={{ paddingRight: "25px" }}
                          />
                          <span style={{ fontSize: "25px" }}>
                            Payment acknowledgemnet
                          </span>
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider item pt="44px" />
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyDashboard;
