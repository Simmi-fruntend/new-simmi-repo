import { Button } from "@mui/material";
import React from "react";
import classes from "./Header.module.scss";
import logo from "../../assests/logo.png";

const Header = () => {
  return (
    <header className={classes.header_container}>
      <div>
        <button className={classes.logo_box}>
          <img src={logo} alt="SIMMI FOUNDATION" />
        </button>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
      </nav>
      <div>
        <Button className={classes.startFundraiser}>Start Fundraiser</Button>
        <Button className={classes.donate}>Donate</Button>
        <Button className={classes.logIn}>Log In</Button>
      </div>
    </header>
  );
};

export default Header;
