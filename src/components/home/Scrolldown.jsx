import React from "react";
import classes from "./ScrollDown.module.css";

const Scrolldown = () => {
  return (
    <div className={classes.scroll__down}>
      <a href="#about" className={classes.mouse__wrapper}>
        <span className={classes["scroll-name"]}>Scroll Down</span>
        <span className={classes.mouse}>
          <span className={classes.wheel}></span>
        </span>
      </a>
    </div>
  );
};

export default Scrolldown;
