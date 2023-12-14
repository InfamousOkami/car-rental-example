import React from "react";
import HeroPages from "../components/HeroPages/HeroPages";

import {
  PhoneAndroidOutlined,
  DirectionsCarFilledOutlined,
  StarBorderOutlined,
} from "@mui/icons-material/";

import CarImg1 from "../Images/audia1.jpg";
import CarImg2 from "../Images/golf6.jpg";
import CarImg3 from "../Images/toyotacamry.jpg";
import CarImg4 from "../Images/bmw320.jpg";
import CarImg5 from "../Images/benz.jpg";
import CarImg6 from "../Images/passatcc.jpg";

import "../Styles/Models/models.css";

function Models() {
  return (
    <section className="models-section">
      <HeroPages name="Models" />
      <div className="models-container">
        <div className="models-div">
          <div className="models-div__box">
            <div className="models-div__box__img">
              <img src={CarImg1} alt="car_img" />
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>Audi A1</p>
                    <span>
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>$45</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span>
                    <DirectionsCarFilledOutlined /> &nbsp; Audi
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <DirectionsCarFilledOutlined />
                  </span>
                  <span>
                    <DirectionsCarFilledOutlined /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <DirectionsCarFilledOutlined />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__btn">
                  <a onClick={() => window.scrollTo(0, 0)} href="/">
                    Book Ride
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="models-div__box">
            <div className="models-div__box__img">
              <img src={CarImg2} alt="car_img" />
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>Golf 6</p>
                    <span>
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>$37</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span>
                    <DirectionsCarFilledOutlined /> &nbsp; VW
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <DirectionsCarFilledOutlined />
                  </span>
                  <span>
                    <DirectionsCarFilledOutlined /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <DirectionsCarFilledOutlined />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__btn">
                  <a onClick={() => window.scrollTo(0, 0)} href="/">
                    Book Ride
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="models-div__box">
            <div className="models-div__box__img">
              <img src={CarImg3} alt="car_img" />
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>Toyota</p>
                    <span>
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>$30</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span>
                    <DirectionsCarFilledOutlined /> &nbsp; Camry
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <DirectionsCarFilledOutlined />
                  </span>
                  <span>
                    <DirectionsCarFilledOutlined /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <DirectionsCarFilledOutlined />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__btn">
                  <a onClick={() => window.scrollTo(0, 0)} href="/">
                    Book Ride
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="models-div__box">
            <div className="models-div__box__img">
              <img src={CarImg4} alt="car_img" />
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>BMW 320</p>
                    <span>
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>$35</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span>
                    <DirectionsCarFilledOutlined /> &nbsp; ModernLine
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <DirectionsCarFilledOutlined />
                  </span>
                  <span>
                    <DirectionsCarFilledOutlined /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <DirectionsCarFilledOutlined />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__btn">
                  <a onClick={() => window.scrollTo(0, 0)} href="/">
                    Book Ride
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="models-div__box">
            <div className="models-div__box__img">
              <img src={CarImg5} alt="car_img" />
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>Mercedes</p>
                    <span>
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>$50</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span>
                    <DirectionsCarFilledOutlined /> &nbsp; Benz GLK
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <DirectionsCarFilledOutlined />
                  </span>
                  <span>
                    <DirectionsCarFilledOutlined /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <DirectionsCarFilledOutlined />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__btn">
                  <a onClick={() => window.scrollTo(0, 0)} href="/">
                    Book Ride
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="models-div__box">
            <div className="models-div__box__img">
              <img src={CarImg6} alt="car_img" />
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>VW Passat</p>
                    <span>
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                      <StarBorderOutlined width={15} height={15} />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>$25</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span>
                    <DirectionsCarFilledOutlined /> &nbsp; CC
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <DirectionsCarFilledOutlined />
                  </span>
                  <span>
                    <DirectionsCarFilledOutlined /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <DirectionsCarFilledOutlined />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__btn">
                  <a onClick={() => window.scrollTo(0, 0)} href="/">
                    Book Ride
                  </a>
                </div>
              </div>
            </div>
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

export default Models;
