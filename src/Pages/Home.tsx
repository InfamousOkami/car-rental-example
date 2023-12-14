import React from "react";
import Hero from "../components/Hero/Hero";
import BookCar from "../components/BookCar/BookCar";
import PlanTrip from "../components/PlanTrip/PlanTrip";
import PickCar from "../components/PickCar/PickCar";
import Banner from "../components/Banner/Banner";
import Download from "../components/Download/Download";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";

function Home() {
  return (
    <div>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <FAQ />
      <Download />
    </div>
  );
}

export default Home;
