import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../services/loginService";

const Login = () => {
  const { onSubmitHandler, isLoading, isDisabled } = useLogin();

  const deviceUrl = {
    appVersion: "4.0.15",
    customerPushId:
      "cFmPYZw2Rea3j6HW02hlFk:APA91bG8L2q5aX5LAN34gIAcjxgZvW1cXmP6_FSgMVGDZEeOtGBm8FjIZC3GPrVGOINPNNDPtK4VgEMzsDJ0b8g6ABdyeoaKP7pEG-zMqhfKB4VfSvaKj3f9sEijLM4TANsqlo4Dznsu",
    latitude: null,
    longitude: null,
    source: "MOBILE",
    devicePlatform: "ANDROID",
    deviceId: "TECNO-CC9:PPR1.180610.011",
    deviceName: "iphone",
    ipAddress: "129.18.220.19",
  };
  const [userInput, setUserInput] = useState({
    email: "daramolakehinde340@gmail.com",
    password: "kenny",
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

  //UI
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
                    <button disabled={isDisabled} type="submit" className="btn-md btn-theme w-100">
                      {isLoading && (
                        <svg
                          aria-hidden="true"
                          role="status"
                          class="inline w-5 h-5 mr-3 text-white animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
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
