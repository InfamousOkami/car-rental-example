import { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import "./bookCar.css";

import {
  CalendarMonthOutlined,
  PlaceOutlined,
  AirportShuttleOutlined,
  CloseOutlined,
  InfoOutlined,
} from "@mui/icons-material/";

import CarAudi from "../../Images/audia1.jpg";
import CarBenz from "../../Images/benz.jpg";
import CarBmw320 from "../../Images/bmw320.jpg";
import Cargolf6 from "../../Images/golf6.jpg";
import CarJaguar from "../../Images/jaguar.png";
import CarPassatcc from "../../Images/passatcc.jpg";
import CarCamry from "../../Images/toyotacamry.jpg";

function BookCar() {
  const [modal, setModal] = useState<boolean>(false);

  // Booking Car
  const [carType, setCarType] = useState<string>("");
  const [pickUp, setPickUp] = useState<string>("");
  const [dropOff, setDropOff] = useState<string>("");
  const [pickTime, setPickTime] = useState<string>("");
  const [dropTime, setDropTime] = useState<string>("");
  const [carImg, setCarImg] = useState<string>("");

  // modal infos
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipcode, setZipCode] = useState<string>("");

  // Taking value of model inputs
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleAge = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleZip = (e: ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
  };

  // Confirm value of booking inputs
  const confirmBooking = (e: MouseEvent) => {
    e.preventDefault();
    setModal(!modal);

    const doneMsg = document.querySelector<HTMLElement>(".booking-done");
    if (doneMsg) {
      doneMsg.style.display = "flex";
    }
  };

  // Taking values from booking inputs
  const handleCar = (e: ChangeEvent<HTMLSelectElement>) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e: ChangeEvent<HTMLSelectElement>) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e: ChangeEvent<HTMLSelectElement>) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e: ChangeEvent<HTMLInputElement>) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e: ChangeEvent<HTMLInputElement>) => {
    setDropTime(e.target.value);
  };

  let imgUrl;
  switch (carImg) {
    case "Audi A1 S-Line":
      imgUrl = CarAudi;
      break;
    case "VW Golf 6":
      imgUrl = Cargolf6;
      break;
    case "Toyota Camry":
      imgUrl = CarCamry;
      break;
    case "BMW 320 ModernLine":
      imgUrl = CarBmw320;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = CarBenz;
      break;
    case "VW Passat CC":
      imgUrl = CarPassatcc;
      break;
    case "Jaguar XF 2":
      imgUrl = CarJaguar;
      break;
    default:
      imgUrl = "";
  }

  // open modal when all inputs are fulfilled
  const openModal = (e: MouseEvent) => {
    e.preventDefault();
    const errorMsg = document.querySelector<HTMLElement>(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      if (errorMsg) {
        errorMsg.style.display = "flex";
      }
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector<HTMLElement>(".booking-modal");
      if (modalDiv) {
        modalDiv.scroll(0, 0);
      }
      if (errorMsg) {
        errorMsg.style.display = "none";
      }
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [modal]);

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector<HTMLElement>(".booking-done");
    if (doneMsg) {
      doneMsg.style.display = "none";
    }
  };

  const hideMessage2 = () => {
    const doneMsg = document.querySelector<HTMLElement>(".error-message");
    if (doneMsg) {
      doneMsg.style.display = "none";
    }
  };

  return (
    <section>
      {/* overlay */}

      <div className="container">
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="booking-container">
          <h1 className="booking-title">Book A Car</h1>

          <p className="error-message">
            All fields required! <CloseOutlined onClick={hideMessage2} />
          </p>

          <p className="booking-done">
            Check your email to confirm an order.{" "}
            <CloseOutlined onClick={hideMessage} />
          </p>

          <form className="box-form">
            <div className="box-form__car-type">
              <label>
                <AirportShuttleOutlined className="input-icon" /> &nbsp; Select
                Your Car Type <b>*</b>
              </label>
              <select value={carType} onChange={handleCar}>
                <option>Select your car type</option>
                <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                <option value="VW Golf 6">VW Golf 6</option>
                <option value="Toyota Camry">Toyota Camry</option>
                <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                <option value="VW Passat CC">VW Passat CC</option>
                <option value="Jaguar XF 2">Jaguar XF 2</option>
              </select>
            </div>

            <div className="box-form__car-type">
              <label>
                <PlaceOutlined className="input-icon" /> &nbsp; Pick-up <b>*</b>
              </label>
              <select value={pickUp} onChange={handlePick}>
                <option>Select pick up location</option>
                <option>Belgrade</option>
                <option>Novi Sad</option>
                <option>Nis</option>
                <option>Kragujevac</option>
                <option>Subotica</option>
              </select>
            </div>

            <div className="box-form__car-type">
              <label>
                <PlaceOutlined className="input-icon" /> &nbsp; Drop-of <b>*</b>
              </label>
              <select value={dropOff} onChange={handleDrop}>
                <option>Select drop off location</option>
                <option>Novi Sad</option>
                <option>Belgrade</option>
                <option>Nis</option>
                <option>Kragujevac</option>
                <option>Subotica</option>
              </select>
            </div>

            <div className="box-form__car-time">
              <label htmlFor="picktime">
                <CalendarMonthOutlined className="input-icon" /> &nbsp; Pick-up{" "}
                <b>*</b>
              </label>
              <input
                id="picktime"
                value={pickTime}
                onChange={handlePickTime}
                type="date"
              ></input>
            </div>

            <div className="box-form__car-time">
              <label htmlFor="droptime">
                <CalendarMonthOutlined className="input-icon" /> &nbsp; Drop-of{" "}
                <b>*</b>
              </label>
              <input
                id="droptime"
                value={dropTime}
                onChange={handleDropTime}
                type="date"
              ></input>
            </div>

            <button onClick={openModal} type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
          {/* title */}
          <div className="booking-modal__title">
            <h2>Complete Reservation</h2>
            <CloseOutlined onClick={openModal} />
          </div>
          {/* message */}
          <div className="booking-modal__message">
            <h4>
              <InfoOutlined /> Upon completing this reservation enquiry, you
              will receive:
            </h4>
            <p>
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>
          {/* car info */}
          <div className="booking-modal__car-info">
            <div className="dates-div">
              <div className="booking-modal__car-info__dates">
                <h5>Location & Date</h5>
                <span>
                  <PlaceOutlined />
                  <div>
                    <h6>Pick-Up Date & Time</h6>
                    <p>
                      {pickTime} /{" "}
                      <input type="time" className="input-time"></input>
                    </p>
                  </div>
                </span>
              </div>

              <div className="booking-modal__car-info__dates">
                <span>
                  <PlaceOutlined />
                  <div>
                    <h6>Drop-Off Date & Time</h6>
                    <p>
                      {dropTime} /{" "}
                      <input type="time" className="input-time"></input>
                    </p>
                  </div>
                </span>
              </div>

              <div className="booking-modal__car-info__dates">
                <span>
                  <PlaceOutlined />
                  <div>
                    <h6>Pick-Up Location</h6>
                    <p>{pickUp}</p>
                  </div>
                </span>
              </div>

              <div className="booking-modal__car-info__dates">
                <span>
                  <PlaceOutlined />
                  <div>
                    <h6>Drop-Off Location</h6>
                    <p>{dropOff}</p>
                  </div>
                </span>
              </div>
            </div>
            <div className="booking-modal__car-info__model">
              <h5>
                <span>Car -</span> {carType}
              </h5>
              {imgUrl && <img src={imgUrl} alt="car_img" />}
            </div>
          </div>
          {/* personal info */}
          <div className="booking-modal__person-info">
            <h4>Personal Information</h4>
            <form className="info-form">
              <div className="info-form__2col">
                <span>
                  <label>
                    First Name <b>*</b>
                  </label>
                  <input
                    value={name}
                    onChange={handleName}
                    type="text"
                    placeholder="Enter your first name"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>

                <span>
                  <label>
                    Last Name <b>*</b>
                  </label>
                  <input
                    value={lastName}
                    onChange={handleLastName}
                    type="text"
                    placeholder="Enter your last name"
                  ></input>
                  <p className="error-modal ">This field is required.</p>
                </span>

                <span>
                  <label>
                    Phone Number <b>*</b>
                  </label>
                  <input
                    value={phone}
                    onChange={handlePhone}
                    type="tel"
                    placeholder="Enter your phone number"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>

                <span>
                  <label>
                    Age <b>*</b>
                  </label>
                  <input
                    value={age}
                    onChange={handleAge}
                    type="number"
                    placeholder="18"
                  ></input>
                  <p className="error-modal ">This field is required.</p>
                </span>
              </div>

              <div className="info-form__1col">
                <span>
                  <label>
                    Email <b>*</b>
                  </label>
                  <input
                    value={email}
                    onChange={handleEmail}
                    type="email"
                    placeholder="Enter your email address"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>

                <span>
                  <label>
                    Address <b>*</b>
                  </label>
                  <input
                    value={address}
                    onChange={handleAddress}
                    type="text"
                    placeholder="Enter your street address"
                  ></input>
                  <p className="error-modal ">This field is required.</p>
                </span>
              </div>

              <div className="info-form__2col">
                <span>
                  <label>
                    City <b>*</b>
                  </label>
                  <input
                    value={city}
                    onChange={handleCity}
                    type="text"
                    placeholder="Enter your city"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>

                <span>
                  <label>
                    Zip Code <b>*</b>
                  </label>
                  <input
                    value={zipcode}
                    onChange={handleZip}
                    type="text"
                    placeholder="Enter your zip code"
                  ></input>
                  <p className="error-modal ">This field is required.</p>
                </span>
              </div>

              <span className="info-form__checkbox">
                <input type="checkbox"></input>
                <p>Please send me latest news and updates</p>
              </span>

              <div className="reserve-button">
                <button onClick={confirmBooking}>Reserve Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookCar;
