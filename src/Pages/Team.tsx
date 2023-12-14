import React from "react";
import HeroPages from "../components/HeroPages/HeroPages";

import "../Styles/Team/team.css";

import Person1 from "../Images/1.jpg";
import Person2 from "../Images/2.jpg";
import Person3 from "../Images/3.jpg";
import Person4 from "../Images/4.jpg";
import Person5 from "../Images/5.jpg";
import Person6 from "../Images/6.jpg";

import { PhoneAndroidOutlined } from "@mui/icons-material/";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Briana Ross", job: "Salesman" },
    { img: Person2, name: "Michael Diaz", job: "Business Owner" },
    { img: Person3, name: "Luke Miller", job: "Photographer" },
    { img: Person4, name: "Lauren Rivera", job: "Car Detailist" },
    { img: Person5, name: "Martin Rizz", job: "Mechanic" },
    { img: Person6, name: "Josh Hunt", job: "Manager" },
  ];

  return (
    <section className="team-page">
      <HeroPages name="Team" />
      <div className="team-cotnainer">
        <div className="team-container">
          {teamPpl.map((ppl, id) => (
            <div key={id} className="team-container__box">
              <div className="team-container__box__img-div">
                <img src={ppl.img} alt="team_img" />
              </div>
              <div className="team-container__box__descr">
                <h3>{ppl.name}</h3>
                <p>{ppl.job}</p>
              </div>
            </div>
          ))}
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

export default Team;
