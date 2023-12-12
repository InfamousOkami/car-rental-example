import React from "react";
import "./testimonials.css";

import naruto from "../../Images/naruto.webp";
import harryPotter from "../../Images/harry-potter.jpg";

import { FormatQuoteOutlined } from "@mui/icons-material";

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-text">
          <h3>Reviews From Users</h3>
          <h1>User's Testimonials</h1>
          <p>
            Explore the testimonials from our clients and witness the positive
            impact our service and results have had on them. They're
            enthusiastic about sharing their positive experiences with you after
            experiencing our service.
          </p>
        </div>
        <div className="testimonials-content">
          <div className="testimonials-content-Item">
            <p>
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website!"
            </p>
            <div className="user">
              <div className="user-content">
                <img src={harryPotter} alt="profile Picture" />
                <div>
                  <h2>Harry P.</h2>
                  <p>Jaguar</p>
                </div>
              </div>
              <FormatQuoteOutlined fontSize="large" />
            </div>
          </div>

          <div className="testimonials-content-Item">
            <p>
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>
            <div className="user">
              <div className="user-content">
                <img src={naruto} alt="profile Picture" />
                <div>
                  <h2>Naruto U.</h2>
                  <p>Audi A1 S Line</p>
                </div>
              </div>
              <FormatQuoteOutlined fontSize="large" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
