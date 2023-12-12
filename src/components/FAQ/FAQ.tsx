import React, { useState } from "react";
import "./faq.css";

function FAQ() {
  const [faqQuestion, setFaqQuestion] = useState<number>(1);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-text">
          <h3>FAQ</h3>
          <h1>Frequently Asked Questions</h1>
          <p>
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>

        <div className="faq-content">
          <div
            className={`question ${faqQuestion === 1 ? "active" : ""}`}
            onClick={() => setFaqQuestion(1)}
          >
            <h1 className="question-title">
              1. What is special about comparing rental car deals?
            </h1>
            <p className="question-answer">
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </p>
          </div>

          <div
            className={`question ${faqQuestion === 2 ? "active" : ""}`}
            onClick={() => setFaqQuestion(2)}
          >
            <h1 className="question-title">
              2. How do I find the car rental deals?
            </h1>
            <p className="question-answer">
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </p>
          </div>

          <div
            className={`question ${faqQuestion === 3 ? "active" : ""}`}
            onClick={() => setFaqQuestion(3)}
          >
            <h1 className="question-title">
              3. How do I find such low rental car prices?
            </h1>
            <p className="question-answer">
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. Compare prices from multiple companies:
              Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that you can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
