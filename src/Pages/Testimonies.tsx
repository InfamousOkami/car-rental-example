import React from "react";
import HeroPages from "../components/HeroPages/HeroPages";
import Testimonials from "../components/Testimonials/Testimonials";

import IconPhone from "@mui/icons-material/PhoneAndroidOutlined";

function Testimonies() {
  return (
    <section>
      <HeroPages name="Testimonials" />
      <Testimonials />
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

export default Testimonies;
