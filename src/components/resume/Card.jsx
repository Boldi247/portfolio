import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.item}>
      <i className={`${props.icon} ${classes.activityIcon}`}></i>
      <span className={classes.date}>{props.year}</span>
      <h3 className={classes.title}>{props.title}</h3>
      <p className={classes.text}>{props.desc}</p>
    </div>
  );
};

export default Card;
