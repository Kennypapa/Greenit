import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../services/loginService";

const Login = () => {

  const { onSubmitHandler } = useLogin();
  const deviceUrl = {
    appVersion: '4.0.15', 
    customerPushId: 'cFmPYZw2Rea3j6HW02hlFk:APA91bG8L2q5aX5LAN34gIAcjxgZvW1cXmP6_FSgMVGDZEeOtGBm8FjIZC3GPrVGOINPNNDPtK4VgEMzsDJ0b8g6ABdyeoaKP7pEG-zMqhfKB4VfSvaKj3f9sEijLM4TANsqlo4Dznsu',
    latitude: null,
    longitude: null,
    source: 'MOBILE', 
    devicePlatform: 'ANDROID',
    deviceId: 'TECNO-CC9:PPR1.180610.011', 
    deviceName: 'iphone', 
    ipAddress:'129.18.220.19'
  }
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    device: deviceUrl,
  });
 

  //payload
  const userPostData = {
    email: userInput.email,
    password: userInput.password,
    device: userInput.device,
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [input]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler({ payload: userPostData });
  };

  return (
    <div>
      <div className="login-38">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 form-section">
              <div className="form-inner">
                <a href="login-38.html" className="logo">
                  <img src="assets/img/logos/logo-2.png" alt="logo" />
                </a>
                <h3>Sign Into Your Account</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group form-box">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      aria-label="Email Address"
                      value={userInput.email}
                      onChange={(e) =>
                        inputChangeHandler("email", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group form-box clearfix">
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      autoComplete="off"
                      placeholder="Password"
                      aria-label="Password"
                      value={userInput.password}
                      onChange={(e) =>
                        inputChangeHandler("password", e.target.value)
                      }
                    />
                  </div>
                 
                  <div className="checkbox form-group form-box">
                    <Link to="/forgot-password" className="forgot-password">
                      Forgot Password
                    </Link>
                  </div>
                  <div className="form-group clearfix">
                    <button type="submit" className="btn-md btn-theme w-100">
                      Login
                    </button>
                  </div>
                  <div className="extra-login clearfix">
                    <span>Or Login With</span>
                  </div>
                </form>
                <div className="clearfix"></div>
                <div className="social-buttons">
                  <a href="#" className="social-button social-button-facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="social-button social-button-twitter">
                    <i className="fa fa-twitter"></i>
                 </a>
                  <a href="#" className="social-button social-button-google">
                    <i className="fa fa-google"></i>
                  </a>
                  <a href="#" className="social-button social-button-linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup" className="thembo">
                    Register here
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-6 bg-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;