import React from "react";
import "./chooseUs.css";
import carBg from "../../Images/multiCar.png";
import circleBg from "../../Images/circle-bg.svg";
import driveIcon from "../../Images/driveIcon.png";
import moneyIcon from "../../Images/money.png";
import nomoneyIcon from "../../Images/no-money.png";

function ChooseUs() {
  return (
    <section className="chooseUs-section">
      <div className="chooseUs-container">
        <img className="cu-img" src={carBg} alt="cars" />
        <div className="chooseUs-content">
          <div className="chooseUs-text">
            <h3 className="chooseUs-text-subtitle">Why Choose Us</h3>
            <h1 className="chooseUs-text-title">
              The Best Deals You'll Ever Come Across
            </h1>
            <p className="chooseUs-text-description">
              Choose us for the ultimate car rental experience. We offer
              top-quality vehicles at unbeatable prices, ensuring an affordable
              and hassle-free journey every time. Our dedication to customer
              satisfaction sets us apart, making your rental experience
              exceptional. Drive with confidence; choose us for the best in
              quality, value, and service.
            </p>
            <a className="chooseUs-text-btn" href="#home">
              Find Details
            </a>
          </div>
          <div className="chooseUs-list">
            {/* Item 1 */}
            <div className="list-item">
              <div className="list-item-img">
                <img className="icon-bg" src={circleBg} alt="icon-background" />
                <img className="icon" src={driveIcon} alt="icon" />
              </div>
              <div className="list-item-text">
                <h1>Long Distance Drives</h1>
                <p>
                  Discover the joy of long-distance drives with our reliable car
                  rentals, designed for comfort and safety on your epic
                  journeys. Start your adventure today and explore the open road
                  with competitive rates and flexible options
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="list-item">
              <div className="list-item-img">
                <img className="icon-bg" src={circleBg} alt="icon-background" />
                <img className="icon" src={moneyIcon} alt="icon" />
              </div>
              <div className="list-item-text">
                <h1>All Inclusive Pricing</h1>
                <p>
                  Experience true convenience with our all-encompassing pricing
                  approach. Unlock everything you require, neatly packaged in a
                  single, transparent cost, courtesy of our all-inclusive
                  pricing policy.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="list-item">
              <div className="list-item-img">
                <img className="icon-bg" src={circleBg} alt="icon-background" />
                <img className="icon" src={nomoneyIcon} alt="icon" />
              </div>
              <div className="list-item-text">
                <h1>No Hidden Charges</h1>
                <p>
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
