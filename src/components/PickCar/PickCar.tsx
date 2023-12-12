import React, { useState } from "react";
import "./pickCar.css";
import { CAR_DATA } from "../CarData";
import CarBox from "../CarBox/CarBox";

function PickCar() {
  const [active, setActive] = useState<string>("FirstCar");
  const [colorBtn, setColorBtn] = useState<string>("btn1");

  const btnID = (id: string) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id: string) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <section>
      <div className="pc-container">
        <div className="pick-container">
          <div className="pick-container-title">
            <h3>Vehicle Models</h3>
            <h1>Our rental Models</h1>
            <p>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
          <div className="pick-container-car-content">
            <div className="pick-box">
              <button
                className={`${coloringButton("btn1")}`}
                id="btn1"
                onClick={() => {
                  setActive("FirstCar");
                  btnID("btn1");
                }}
              >
                Audi A1 S-Line
              </button>
              <button
                className={`${coloringButton("btn2")}`}
                id="btn2"
                onClick={() => {
                  setActive("SecondCar");
                  btnID("btn2");
                }}
              >
                VW Golf 6
              </button>
              <button
                className={`${coloringButton("btn3")}`}
                id="btn3"
                onClick={() => {
                  setActive("ThirdCar");
                  btnID("btn3");
                }}
              >
                Toyota Camry
              </button>
              <button
                className={`${coloringButton("btn4")}`}
                id="btn4"
                onClick={() => {
                  setActive("FourthCar");
                  btnID("btn4");
                }}
              >
                BMW 320 ModernLine
              </button>
              <button
                className={`${coloringButton("btn5")}`}
                id="btn5"
                onClick={() => {
                  setActive("FifthCar");
                  btnID("btn5");
                }}
              >
                Mercedes-Benz GLK
              </button>
              <button
                className={`${coloringButton("btn6")}`}
                id="btn6"
                onClick={() => {
                  setActive("SixthCar");
                  btnID("btn6");
                }}
              >
                VW Passat CC
              </button>
              <button
                className={`${coloringButton("btn7")}`}
                id="btn7"
                onClick={() => {
                  setActive("SeventhCar");
                  btnID("btn7");
                }}
              >
                Jaguar XF 2
              </button>
            </div>

            {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
            {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
            {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
            {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
            {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
            {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
            {active === "SeventhCar" && <CarBox data={CAR_DATA} carID={6} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PickCar;
