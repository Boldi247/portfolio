import React from "react";
import classes from "./Home.module.css";
import Me from "../../assets/avatar-1.svg";
import ProfilePic from "../../assets/profilepic.jpeg";
import HeaderSocials from "./HeaderSocials";
import Scrolldown from "./Scrolldown";

const Home = () => {
  return (
    <div className="gradient-bg">
      <section id="home" className={`${classes.home} container`}>
        <div className={classes.intro}>
          <img src={ProfilePic} alt="" className={classes.home__img}></img>
          <h1>&#128075; Hi, I'm</h1>
          <h1 className={classes.name}>Kovács Boldizsár</h1>
          <span className={classes.shortIntro}>I'm a Web developer</span>
          <HeaderSocials />
          <a href="#contact" className="btn">
            Hire Me
          </a>
          <Scrolldown />
        </div>
      </section>
    </div>
  );
};

export default Home;
