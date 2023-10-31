import React, { useState } from "react";
import { Link } from "react-router-dom";
import useForgotPassword from "../services/forgotPasswordService";

const Login = () => {
  const { onSubmitHandler} = useForgotPassword();
  const [userInput, setUserInput] = useState('');
  
  //payload
  const userPostData = {
    username: userInput,
  };

  const inputChangeHandler = (e) => {
    setUserInput(e.target.value);
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
                <h3>Recover Your Password</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group form-box">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone Number"
                      aria-label="Phone Number"
                      value={userInput}
                      onChange={inputChangeHandler}
                    />
                  </div>
                  <div className="form-group clearfix">
                    <button type="submit" className="btn-md btn-theme w-100">
                      Submit
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
                  Already a member? <Link to="/login">Login here</Link>
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
