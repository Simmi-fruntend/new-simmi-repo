import { KeyboardArrowUp } from "@mui/icons-material";
import React, { useState } from "react";
import classes from "./GoToTop.module.scss";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className={classes.goToTop_box}
      onClick={scrollToTop}
      style={{ display: visible ? "flex" : "none" }}
    >
      <KeyboardArrowUp />{" "}
    </button>
  );
};

export default GoToTop;
