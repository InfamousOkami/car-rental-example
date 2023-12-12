import React from "react";
import heroImg from "../../Images/hero-bg.png";
import carBg from "../../Images/bluecar-bg.png";
import {
  CheckCircleOutline,
  ArrowCircleRightOutlined,
} from "@mui/icons-material";

import "./hero.css";

function Hero() {
  return (
    <section className="hero-container">
      <img className="hero-bg" src={heroImg} alt="hero-bg" />
      <div className="hero-content">
        <div className="hero-content-text">
          <h2 className="sub-title">Plan your trip now</h2>
          <h1 className="title">
            Save <span>big</span> with our car rental
          </h1>
          <p className="description">
            Rent the car of your dreams. Unbeatable prices unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="hero-btns">
            <div className="book-btn btn">
              Book Ride
              <CheckCircleOutline />
            </div>

            <div className="learn-btn btn">
              Learn More
              <ArrowCircleRightOutlined />
            </div>
          </div>
        </div>
        <img className="hero-content-img" src={carBg} alt="car-bg" />
      </div>
    </section>
  );
}

export default Hero;
