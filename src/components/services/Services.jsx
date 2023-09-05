import React from "react";
import classes from "./Services.module.css";
import data from "./Experiences";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <section className={`${classes.services} container section`} id="services">
      <h2 className="section__title">
        Services / Experiences
        <FontAwesomeIcon icon={faCode} className={classes.code_icon} />
      </h2>

      <div className={`${classes.services__container} grid`}>
        {data.firstRowdata.map(({ id, techIcon, title, description }) => {
          return (
            <div className={classes.card} key={id}>
              <div className={classes.img_wrapper}>
                <i class={`${techIcon} ${classes.icon}`}></i>
              </div>
              <h3 className={classes.services__title}>{title}</h3>
              <p className={classes.services__description}>{description}</p>
            </div>
          );
        })}

        {data.secondRowdata.map(({ id, techIcon, title, description }) => {
          return (
            <div className={classes.card} key={id}>
              <div className={classes.img_wrapper}>
                <i class={`${techIcon} ${classes.icon}`}></i>
              </div>
              <h3 className={classes.services__title}>{title}</h3>
              <p className={classes.services__description}>{description}</p>
            </div>
          );
        })}

        {data.thirdRowdata.map(({ id, techIcon, title, description }) => {
          return (
            <div className={classes.card} key={id}>
              <div className={classes.img_wrapper}>
                <i class={`${techIcon} ${classes.icon}`}></i>
              </div>
              <h3 className={classes.services__title}>{title}</h3>
              <p className={classes.services__description}>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
