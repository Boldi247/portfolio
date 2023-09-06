import React, { useRef, useState } from "react";
import classes from "./Contact.module.css";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_el07w74",
        "template_rmnd7yr",
        form.current,
        "R5V55FUxY-XrqdS5s"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Message not sent!");
        }
      );
    e.target.reset();
  };

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
          <form
            action=""
            className={classes.contactForm}
            id="contact-form"
            onSubmit={sendEmail}
            ref={form}
          >
            <div className={classes.formGroup}>
              <div className={classes.formDiv}>
                <input
                  type="text"
                  className={classes.formInput}
                  placeholder="Insert your name"
                  name="user_name"
                  autoComplete="off"
                  required
                />
              </div>
              <div className={classes.formDiv}>
                <input
                  type="email"
                  className={classes.formInput}
                  placeholder="Insert your email"
                  name="user_email"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className={classes.formDiv}>
              <input
                type="text"
                className={classes.formInput}
                placeholder="Insert your subject"
                name="subject"
                required
              />
            </div>
            <div className={`${classes.formDiv} ${classes.formArea}`}>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className={classes.formInput}
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <button className="btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
