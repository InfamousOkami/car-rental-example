import React from "react";
import "../Styles/Contact/contact.css";
import {
  PhoneAndroidOutlined,
  MailOutline,
  PinDropOutlined,
} from "@mui/icons-material/";

import HeroPages from "../components/HeroPages/HeroPages";

function Contact() {
  return (
    <section>
      <HeroPages name="Contact" />
      <div className="container">
        <div className="contact-div">
          <div className="contact-div__text">
            <h2>Need additional information?</h2>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <a href="/">
              <PhoneAndroidOutlined /> &nbsp; (123) 456-7869
            </a>
            <a href="/">
              <MailOutline /> &nbsp; carrental@rental.com
            </a>
            <a href="/">
              <PinDropOutlined />
              &nbsp; Phoenix, Arizona
            </a>
          </div>
          <div className="contact-div__form">
            <form>
              <label>
                Full Name <b>*</b>
              </label>
              <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

              <label>
                Email <b>*</b>
              </label>
              <input type="email" placeholder="youremail@example.com"></input>

              <label>
                Tell us about it <b>*</b>
              </label>
              <textarea placeholder="Write Here.."></textarea>

              <button type="submit">
                <MailOutline />
                &nbsp; Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <PhoneAndroidOutlined width={40} height={40} />
              <h3>(123) 456-7869</h3>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
