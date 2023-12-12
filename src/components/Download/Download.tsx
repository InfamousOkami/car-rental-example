import React from "react";
import "./download.css";
import appStoreIcon from "../../Images/appstore.svg";
import googleStoreIcon from "../../Images/googleapp.svg";
import iphoneImg from "../../Images/iphone.png";

function Download() {
  return (
    <section className="download-section">
      <div className="download-container">
        <div className="download-content">
          <h1>Download our app!</h1>
          <p>
            Rev up your travel experience with our convenient and user-friendly
            car rental app. Say goodbye to the hassle of traditional rental
            services and hello to seamless, on-the-go bookings. Download our app
            today to unlock a world of options at your fingertips, from an
            impressive fleet of vehicles to flexible pickup locations. With just
            a few taps, you'll be on the road to your next adventure. Travel
            smart, travel easy – get our app now and start exploring the world
            on your terms!
          </p>
          <div className="download-imgs">
            <img src={appStoreIcon} alt="App Store" />
            <img src={googleStoreIcon} alt="Google Store" />
          </div>
        </div>

        <div className="download-img">
          <img src={iphoneImg} alt="iphone" />
        </div>
      </div>
    </section>
  );
}

export default Download;
