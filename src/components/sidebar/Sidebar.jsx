import React, { useState } from "react";
import classes from "./Sidebar.module.css";
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const iconListItem = (classname, href) => {
    return (
      <li className={classes.nav__item}>
        <a href={href} className={classes.nav__link}>
          <i className={classname}></i>
        </a>
      </li>
    );
  };

  return (
    <>
      <aside
        className={
          showMenu ? `${classes.aside} ${classes.showMenu}` : classes.aside
        }
      >
        <a href="#home" className={classes.nav__logo}>
          <img src={Logo} alt="" />
        </a>

        <nav className={classes.nav}>
          <div className={classes.nav__menu}>
            <ul className={classes.nav__list}>
              {iconListItem("icon-home", "#home")}
              {iconListItem("icon-user-following", "#about")}
              {iconListItem("icon-briefcase", "#services")}
              {iconListItem("icon-graduation", "#resume")}
              {iconListItem("icon-layers", "#portfolio")}
              {iconListItem("icon-bubble", "#contact")}
            </ul>
          </div>
        </nav>

        <div className={classes.nav__footer}>
          <span className={classes.copyright}>&copy; 2023</span>
        </div>
      </aside>

      <div
        className={
          showMenu
            ? `${classes.toggle} ${classes.toggleOpen}`
            : `${classes.toggle}`
        }
        onClick={() => setShowMenu(!showMenu)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
