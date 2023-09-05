import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className="gradient-bg-inv">
      <section className={`${classes.contact} container section`} id="contact">
        <h2 className="section__title">Get In Touch</h2>
        <div className={`${classes.contactContainer} grid`}>
          <div className={classes.contactInfo}>
            <h3 className={classes.contactTitle}>Feel free to contact me!</h3>
            <p className={classes.contactDetails}>
              Don't like forms? Send me an email.
            </p>
          </div>
          <form action="" className={classes.contactForm}>
            <div className={classes.formGroup}>
              <div className={classes.formDiv}>
                <input
                  type="text"
                  className={classes.formInput}
                  placeholder="Insert your name"
                />
              </div>
              <div className={classes.formDiv}>
                <input
                  type="email"
                  className={classes.formInput}
                  placeholder="Insert your email"
                />
              </div>
            </div>
            <div className={classes.formDiv}>
              <input
                type="text"
                className={classes.formInput}
                placeholder="Insert your subject"
              />
            </div>
            <div className={`${classes.formDiv} ${classes.formArea}`}>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className={classes.formInput}
                placeholder="Write your message"
              ></textarea>
            </div>
            <button className="btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
