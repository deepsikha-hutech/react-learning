import React, { useState } from "react";
import "./Signup.css";
import background from "../images/background.svg";
import logo from "../images/logo.svg";
import background3 from "../images/background (3).svg";

function Signup() {
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [person, setPerson] = useState([]);

  return (
    <div className="main-page">
      {/* <div className="main-background">
        <img
          src={background3}
          alt="main background"
          className="main-background"
        ></img> */}

      <div className="inner-container">
        <div className="left-bar">
          {/* <div className="background-img">
            <img src={background} alt="" />
          </div> */}

          <div className="left-bar-1">
            <img src={logo} alt="Company Logo" className="left-bar-1" />
          </div>

          <br></br>
          <div className="left-bar-2">
            <p>
              Manage Portfolios, Optimise <br /> Investments, & Drive
              <br /> Performance
            </p>
          </div>
        </div>

        <div className="right-bar">
          <h2>Signup</h2>

          <div className="flex-start-col input-container-3">
            <input placeholder="Name" type="name" />
          </div>

          <div className="flex-start-col input-container-1">
            <input placeholder="Email" type="email" />
          </div>

          <div className="flex-start-col input-container-2">
            <input placeholder="Password" type="password" />
          </div>

          <div className="login">
            Already have an account? <a href="/login">Login</a>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Signup;
