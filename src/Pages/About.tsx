import React from "react";
import "../Styles/About/about.css";
import HeroPages from "../components/HeroPages/HeroPages";
import IconPhone from "@mui/icons-material/PhoneAndroidOutlined";
import PlanTrip from "../components/PlanTrip/PlanTrip";

import ParkedCar from "../Images/parkedCar.png";
import GarageCar from "../Images/garage.png";
import Car from "../Images/car.png";

import CD from "../Images/cardealership.jpg";

function About() {
  return (
    <section>
      <HeroPages name="About" />
      <div className="container">
        <div className="about-main">
          <img className="about-main__img" src={CD} alt="car-renting" />
          <div className="about-main__text">
            <h3>About Company</h3>
            <h2>You start the engine and your adventure begins</h2>
            <p>
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="about-main__text__icons">
              <div className="about-main__text__icons__box">
                <img src={Car} alt="car-icon" />
                <span>
                  <h4>20</h4>
                  <p>Car Types</p>
                </span>
              </div>
              <div className="about-main__text__icons__box">
                <img src={GarageCar} alt="car-icon" />
                <span>
                  <h4>85</h4>
                  <p>Rental Outlets</p>
                </span>
              </div>
              <div className="about-main__text__icons__box">
                <img src={ParkedCar} alt="car-icon" className="last-fk" />
                <span>
                  <h4>75</h4>
                  <p>Repair Shop</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <PlanTrip />
      </div>

      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <IconPhone width={40} height={40} />
              <h3>(123) 456-7869</h3>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
