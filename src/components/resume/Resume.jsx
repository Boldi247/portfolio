import React from "react";
import classes from "./Resume.module.css";
import experiences from "./ResumeData";
import Card from "./Card";

const Resume = () => {
  return (
    <section className={`${classes.resume} container section`} id="resume">
      <h2 className="section__title">Experience</h2>
      <div className={`${classes.resume__container} grid`}>
        <div className={`${classes.timeline} grid`}>
          {experiences.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.description}
                />
              );
            }
          })}
        </div>
        <div className={`${classes.timeline} grid`}>
          {experiences.map((val, id) => {
            if (val.category === "work") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.description}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
