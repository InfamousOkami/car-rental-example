import React from "react";
import "./heroPages.css";

function HeroPages({ name }: { name: string }) {
  return (
    <section className="heroPages">
      <div className="heroPages-overlay"></div>
      <div className="container">
        <div className="heroPages-text">
          <h3>{name}</h3>
          <p>
            <a href="/">Home</a> / {name}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroPages;
