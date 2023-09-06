import React from "react";
import classes from "./HeaderSocials.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderSocials = () => {
  return (
    <div className={classes.socials}>
      <a
        href="https://www.linkedin.com/in/boldizsár-kovács-6362b7281/"
        className={classes["social-link"]}
        target="_blank"
      >
        <i className="icon-social-linkedin"></i>
      </a>
      <a
        href="https://github.com/Boldi247"
        className={classes["social-link"]}
        target="_blank"
      >
        <i className="icon-social-github"></i>
      </a>
      <a
        href="mailto:kovacsboldizsarjozsef@outlook.hu"
        className={classes["social-link"]}
        target="_blank"
      >
        <i className="icon-envelope"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
