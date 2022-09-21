import { Avatar, Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
// import Cookies from "js-cookie";
import classes from "./Header.module.scss";
import logo from "../../assests/logo.png";
import {
  Dashboard,
  KeyboardArrowRight,
  Logout,
  Person,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { GoogleLogout } from "react-google-login";
const clientId =
  "101154564786-02909v6m0f2tnoj4dppi901mpbl5oikp.apps.googleusercontent.com";
// import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

// const ginfo = localStorage.getItem('gdata');
const ginfoemail = localStorage.getItem("gemail");
const ginfoname = localStorage.getItem("gname");
const ginfoimg = localStorage.getItem("gimg");

const accessToken = localStorage.getItem("token");
const Header = (props) => {
  const apiUrl = "http://127.0.0.1:8000/api";
  const navigate = useNavigate();
  const [profile, setProfile] = useState(false);
  const [userData, setUserData] = useState(null);
  const [gdata, setGData] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("gemail")) {
      setGData(localStorage.getItem("gemail"));
    }
  }, [ginfoemail]);
  
  // const ids = localStorage.getItem('id');

  // localStorage.getItem('islogin',false);
  // console.log(ids);
  if (userData) {
    localStorage.setItem("useremail", userData.email);
  }

  console.log(localStorage.getItem("useremail"));

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem("id") && localStorage.getItem("id");
    // const userId = Cookies.get("id")
    console.log(userId);
    const isLoginState = localStorage.getItem("islogin");
    console.log(isLoginState);
    // const isLoginState = Cookies.get("islogin");
    console.log(isLoginState);
    const headers = {
      "Content-type": "Application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    isLoginState === "true" &&
      userId &&
      axios
        .get(`${apiUrl}/loggeduser/${userId}`, { headers: headers })
        .then((response) => {
          console.log(response);
          const posts = response.data;
          console.log(posts);
          setUserData(posts["user is"]);

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
        });
  }, []);

  //
  const onsucess = () => {
    console.log("logout");
    localStorage.removeItem("gemail");
    localStorage.removeItem("gname");
    localStorage.removeItem("gimg");
    window.location.reload(true);
  };
  //

  const loginButtonHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const signupButtonHandler = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const dashboardHandler = (e) => {
    navigate("/myDashboard");
  };

  const profileHandler = (e) => {
    e.preventDefault();
    setProfile(!profile);
  };
  console.log(localStorage.getItem("islogin"));
  const startfundHandler = (e) => {
    e.preventDefault();
    if (localStorage.getItem("islogin") === "false") {
      navigate("/login");
    } else {
      navigate("/startfunds");
    }
  };
  const donateHandler = (e) => {
    e.preventDefault();
    if (localStorage.getItem("islogin") === "false") {
      navigate("/login");
    } else {
      navigate("/fundraising-showpage");
    }
  };
  console.log(localStorage.getItem("ishomepage"));
  const logoutHandler = (e) => {
    localStorage.setItem("islogin", "false");
    localStorage.removeItem("id");
    localStorage.removeItem("useremail");

    localStorage.removeItem("gemail");
    localStorage.removeItem("gname");
    localStorage.removeItem("gimg");
    setUserData(null);
    window.location.reload(true);
  };

  const loginButton = !gdata && !userData && (
    <Button className={classes.logIn} onClick={loginButtonHandler}>
      Login
    </Button>
  );

  const signupButton = !gdata && !userData && (
    <Button className={classes.signIn} onClick={signupButtonHandler}>
      Sign Up
    </Button>
  );

  const loggedInUser = userData && (
    <div className={classes.userLogedIn}>
      <Button onClick={profileHandler}>
        <Avatar
          sx={{ backgroundColor: "#FF8C21", width: "39px", height: "39px" }}
        >
          {userData.name.charAt(0)}
        </Avatar>
      </Button>
      {profile && (
        <Grid container className={classes.userLogedIn_userProfile}>
          <Grid item container>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: "#FF8C21",
                  width: "80px",
                  height: "80px",
                  mt: "20px",
                  mb: "16px",
                  fontSize: "70px",
                  justifyContent: "flex-start",
                }}
              >
                {userData.name.charAt(0)}
              </Avatar>
            </Grid>
            <Grid item>
              <Typography component="h3">{userData.name}</Typography>
            </Grid>
            <Grid item mb="16px">
              <Typography component="h5">{userData.email}</Typography>
            </Grid>
          </Grid>
          <Grid item container className={classes.userProfile_myDashboard}>
            <Grid item>
              <Button
                className={classes.myDashboard}
                onClick={dashboardHandler}
              >
                <Dashboard />
                <span style={{ paddingLeft: "20px" }}> My Dashboard</span>
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.profile}>
                <Person />
                <span style={{ paddingLeft: "20px" }}>My Profile</span>
              </Button>
            </Grid>
          </Grid>
          <Grid item container my="10px">
            <Button
              sx={{ padding: "10px !important", fontSize: "16px" }}
              onClick={(e) => {
                logoutHandler(e);
              }}
            >
              <Logout />
              <span style={{ paddingLeft: "20px" }}> Logout </span>
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );

  const gLoggedInUser = ginfoemail && (
    <div className={classes.userLogedIn}>
      <Button onClick={profileHandler}>
        <Avatar
          sx={{ backgroundColor: "#FF8C21", width: "39px", height: "39px" }}
        >
          {ginfoname.charAt(0)}
        </Avatar>
      </Button>
      {profile && (
        <Grid container className={classes.userLogedIn_userProfile}>
          <Grid item container>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: "#FF8C21",
                  width: "80px",
                  height: "80px",
                  mt: "20px",
                  mb: "16px",
                  fontSize: "70px",
                  justifyContent: "flex-start",
                }}
              >
                {ginfoname.charAt(0)}
              </Avatar>
            </Grid>
            <Grid item>
              <Typography component="h3">{ginfoname}</Typography>
            </Grid>
            <Grid item mb="16px">
              <Typography component="h5">{ginfoemail}</Typography>
            </Grid>
          </Grid>
          <Grid item container className={classes.userProfile_myDashboard}>
            <Grid item>
              <Button
                className={classes.myDashboard}
                onClick={dashboardHandler}
              >
                <Dashboard />
                <span style={{ paddingLeft: "20px" }}> My Dashboard</span>
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.profile}>
                <Person />
                <span style={{ paddingLeft: "20px" }}>My Profile</span>
              </Button>
            </Grid>
          </Grid>
          <Grid item container my="10px">
            <Button
              sx={{ fontSize: "16px" }}
              onClick={(e) => {
                logoutHandler(e);
              }}
            >
              {/* <Logout />
              <span style={{ paddingLeft: "20px" }}> Logout </span> */}
              {/*  */}
              <GoogleLogout
                style={{ padding: "10px !important", fontSize: "16px" }}
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutsuccess={onsucess}
              />
              {/*  */}
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );

  return (
    <header className={classes.header_container}>
      <div>
        <Link to="/" className={classes.logo_box}>
          <img src={logo} alt="SIMMI FOUNDATION" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className={classes.dropdown_menu} id="dropdown">
            {props.homestate ? (
              <>
                <a href="#">
                  Donate <KeyboardArrowRight />
                </a>
                <ul className={classes.dropdown}>
                  <li>
                    <a href="/aboutus">Trending Fundraisers </a>
                    <hr />
                  </li>
                  <li>
                    <a href="#mission_vision">NGO</a>
                  </li>
                </ul>
              </>
            ) : (
              <></>
            )}
          </li>

          <li className={classes.dropdown_menu} id="dropdown">
            {props.homestate ? (
              <>
                <a href="#">
                  Company <KeyboardArrowRight />
                </a>
                <ul className={classes.dropdown}>
                  <li>
                    <a href="/aboutus">About Us </a>
                    <hr />
                  </li>
                  <li>
                    <a href="/faqpage">FAQ</a>
                    <hr />
                  </li>
                </ul>
              </>
            ) : (
              <></>
            )}
          </li>
          <li>
          <Button className={classes.startFundraiser} onClick={startfundHandler}>Start Fundraiser</Button>
          </li>
          <li>
            <Link to="/contactus">Contact us</Link>
          </li>

         
        </ul>
      </nav>
      <div className={classes.profile_buttons}>
        {/* <Button className={classes.startFundraiser} onClick={startfundHandler}>Start Fundraiser</Button>
        <Button className={classes.donate} onClick={donateHandler}  >Donate</Button> */}
        {loginButton}
        {signupButton}
        {ginfoemail ? gLoggedInUser : loggedInUser}
      </div>
    </header>
  );
};

export default Header;
