import React, { useState } from "react";
import classes from "./Portfolio.module.css";

import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className={`${classes.work} container section`} id="portfolio">
      <h2 className="section__title">My Recent Projects</h2>
      <div className={classes.filters}>
        <span className="btn" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="btn" onClick={() => filterItem("React.js")}>
          React.js
        </span>
        <span className="btn" onClick={() => filterItem("Next.js")}>
          Next.js
        </span>
        <span className="btn" onClick={() => filterItem("Vanilla JavaScript")}>
          Vanilla JavaScript
        </span>
      </div>

      <div className={`${classes.workContainer} grid`}>
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className={classes.workCard} key={id}>
              <div className={classes.thumbnail}>
                <img src={image} alt="" className={classes.workImg} />
                <div className={classes.mask}></div>
              </div>
              <span className={classes.workCategory}>{category}</span>
              <h3 className={classes.workTitle}>{title}</h3>
              <a href={link} className={classes.workButton}>
                <i className={`${classes.workButtonIcon} icon-link`}></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
