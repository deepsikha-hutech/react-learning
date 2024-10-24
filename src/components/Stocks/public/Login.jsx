import React, { useState } from "react";
import "./Login.css";
import logo from "../images/logo.svg";

function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [person, setPerson] = useState([]);

  const handleSubmit = (e) => {
    console.log("Login data:", loginData);
  };

  function login(formValues) {
    alert("login success");
  }

  return (
    <div className="login-main-page">
      <div className="login-inner-container">
        <div className="login-left-bar">
          <div className="login-left-bar-1">
            <img src={logo} alt="Company Logo" className="login-left-bar-1" />
          </div>

          <br></br>
          <div className="login-left-bar-2">
            <p>
              Manage Portfolios, Optimise Investments,<br></br> & Drive
              Performance
            </p>
          </div>
        </div>

        <div className="login-right-bar">
          <h2>Login</h2>
          <form onSubmit={login}>
            <div className="login-flex-start-col input-container-1">
              <input
                required
                placeholder="Email"
                type="email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
            </div>

            <div className="login-flex-start-col input-container-2">
              <input
                required
                placeholder="Password"
                type="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </div>
            <div className="login-create-account-forgot-password">
              <div className="login-create-account">
                <a href="/signup">Create Account</a> {""}
              </div>
              <div className="login-forgot-password">
                <a href="/forgotPassword">Forgot Password?</a>
              </div>
            </div>

            <button type="submit" className="login-submit-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
