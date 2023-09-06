import React from "react";
import classes from "./About.module.css";
import ProfileImage from "../../assets/IMG_1185.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import CV from "../../assets/pdf/CV_Kovacs_Boldizsar.pdf";

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
              Hi, my name is Kovács Boldizsár. I am currently studying at the
              University of Debrecen, Faculty of Informatics - Computer Science
              MSc. I am open to work and I look forward to provide IT solutions
              and to deepen my skills in practice. I have an inexhaustible
              desire to learn and I am always looking for new challenges.
            </p>
            <p className={classes.about__description}>
              My main interest is front-end development, I like to create
              responsive, user-friendly websites. I self-taught myself the
              basics of web development, and I am currently learning React.
            </p>
            <a
              className="btn"
              href={CV}
              download="CV_Kovacs_Boldizsar.pdf"
              target="_blank"
              rel="noreferrer"
            >
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
