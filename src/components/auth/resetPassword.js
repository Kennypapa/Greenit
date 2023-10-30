import React, { useState } from "react";
import { Link } from "react-router-dom";
import useResetPassword from "../services/resetPassword";
const Register = () => {
  const { onSubmitHandler } = useResetPassword();
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    otp: "",
  });
  //payload
  const userPostData = {
    username: userInput.username,
    password: userInput.password,
    otp: userInput.otp
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
                <h3>Create New Password</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group form-box">
                    <input
                      name="username"
                      type="text"
                      className="form-control"
                      placeholder="User Name"
                      aria-label="User Name"
                      value={userInput.username}
                      onChange={(e) =>
                        inputChangeHandler("username", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group form-box">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="New Password"
                      aria-label="New Password"
                      value={userInput.password}
                      onChange={(e) =>
                        inputChangeHandler("password", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group form-box">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      aria-label="Confirm Password"
                      onChange={(e) =>
                        inputChangeHandler("password", e.target.value)
                      }
                    />
                  </div>

                  <div className="form-group form-box clearfix">
                    <input
                      name="otp"
                      type="text"
                      className="form-control"
                      autoComplete="on"
                      placeholder="OTP"
                      aria-label="Password"
                      value={userInput.otp}
                      onChange={(e) =>
                        inputChangeHandler("otp", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group clearfix">
                    <button type="submit" className="btn-md btn-theme w-100">
                      Submit
                    </button>
                  </div>
                </form>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="col-lg-6 bg-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
