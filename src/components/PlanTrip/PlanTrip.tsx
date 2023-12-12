import React from "react";
import "./planTrip.css";

import carPlanIcon from "../../Images/car-plan-icon.png";
import callIcon from "../../Images/call.png";
import carDriveIcon from "../../Images/cardrive.png";

function PlanTrip() {
  return (
    <section>
      <div className="plantrip-container">
        <h1>Plan Your Trip Now</h1>
        <h1 className="title">Quick & Easy Car Rental</h1>
        <div className="steps">
          <div className="step">
            <div className="img-bg" />
            <img className="img-1" src={carPlanIcon} alt="logo" />
            <h1>Select Car</h1>
            <p>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </div>
          <div className="step">
            <div className="img-bg" />
            <img className="img-2" src={callIcon} alt="logo" />
            <h1>Contact Operator</h1>
            <p>
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </div>
          <div className="step">
            <div className="img-bg" />
            <img className="img-3" src={carDriveIcon} alt="logo" />
            <h1>Let's Drive</h1>
            <p>
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanTrip;
