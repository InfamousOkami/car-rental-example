import React from "react";
import "./footer.css";
import mailIcon from "../../Images/mail.png";
import phoneIcon from "../../Images/phone-call.png";

function Footer() {
  return (
    <section>
      <div className="footer-container">
        <div className="car-rental f-item">
          <p className="cr-title">
            <span>CAR</span> Rental
          </p>
          <p className="cr-description">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <div className="contact-info">
            <a href="tel:1234567890">
              <img src={phoneIcon} alt="phone" /> (123)-456-7890
            </a>
            <a href="mailto: carrental@rental.com">
              <img src={mailIcon} alt="mail" /> carrental@rental.com
            </a>
          </div>
        </div>

        <div className="company f-item">
          <h1>Company</h1>
          <a href="#home">Phoenix</a>
          <a href="#home">Careers</a>
          <a href="#home">Blog</a>
          <a href="#home">How We Work</a>
        </div>

        <div className="working-hours f-item">
          <h1>Working Hours</h1>
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 7:00PM</p>
        </div>

        <div className="subscription f-item">
          <h1>Subscribe!</h1>
          <p>Subscribe your Email address for latest news & updates.</p>
          <form>
            <input
              className="email-input"
              type="email"
              name="email"
              placeholder="Enter Email Address"
            />
            <input className="email-btn" type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Footer;
