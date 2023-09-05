import React from "react";
import classes from "./About.module.css";
import ProfileImage from "../../assets/avatar-2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className={`${classes.about} container section`} id="about">
      <h2 className="section__title">About Me</h2>

      <div className={`${classes.about__container} grid`}>
        <div className={classes.about__image_container}>
          <img src={ProfileImage} alt="" className={classes.about__image} />
        </div>

        <div className={classes.about__data}>
          <div className={classes.about__info}>
            <p className={classes.about__description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              qui iste totam incidunt eum non quod nobis, dolores natus iusto
              exercitationem vitae blanditiis impedit similique quas. Error
              repellendus laudantium dolor.
            </p>
            <a href="" className="btn">
              <FontAwesomeIcon icon={faFile} className={classes.doc_icon} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
