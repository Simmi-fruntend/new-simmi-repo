import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import classes from "./Footer.module.scss";
import footerLogo from "../../assests/footerLogo.png";
import fb from "../../assests/fb.png";
import instagram from "../../assests/instagram.png";
import twitter from "../../assests/twitter.png";
import linkedin from "../../assests/linkedin.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className={classes.footerTop_container}>
        <Grid container justifyContent="space-around">
          <ol item>
            <li>
              <img src={footerLogo} alt="SIMMI" />
            </li>
            <li>
              <Typography component="h3">SIMMI FOUNDATION</Typography>
            </li>
            <li>
              <Typography component="p">
                Simmi Foundation envisions to develop a society based on
                legitimate rights, equity, justice, honesty, social sensitivity
                and a culture of service in which all are self-reliant.
              </Typography>
            </li>
          </ol>
          <ul item>
            <li>
              <Typography component="h2">Quick Links</Typography>
            </li>
            <li>
              <Button>Donate</Button>
            </li>
            <li>
              <Button>Start a Fundraiser</Button>
            </li>
            <li>
              <Button>Contact us</Button>
            </li>
            <li>
              <Button>About us</Button>
            </li>
          </ul>
          <ul item>
            <li>
              <Typography component="h2">Legal</Typography>
            </li>
            <li>
              <Button>Privacy</Button>
            </li>
            <li>
              <Button>Disclaimer</Button>
            </li>
            <li>
              <Button>Terms & Conditions</Button>
            </li>
            <li className={classes.socialLinks}>
              <Button sx={{ borderRadius: "50%" }}>
                <img src={fb} alt="Fb" />
              </Button>
              <Button sx={{ borderRadius: "50%" }}>
                <img src={instagram} alt="Insta" />
              </Button>
              <Button sx={{ borderRadius: "50%" }}>
                <img src={twitter} alt="twitter" />
              </Button>
              <Button sx={{ borderRadius: "50%" }}>
                <img src={linkedin} alt="linkedIn" />
              </Button>
            </li>
          </ul>
        </Grid>
      </div>
      <div className={classes.footerBottom_container}>
        <Typography component="p">
          Copyright ©{currentYear} All rights reserved | Simmi Foundation{" "}
        </Typography>
      </div>
    </>
  );
};

export default Footer;
