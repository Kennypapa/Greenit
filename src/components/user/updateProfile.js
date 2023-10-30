import React, { useState } from "react";
import { Link } from "react-router-dom";
const UserProfile = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    firstname: "",
    lastname: "",
  });
  
  const inputChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [input]: value,
      };
    });
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
                <h3>Update Your Profile</h3>
                <form>
                  <div className="form-group form-box">
                    <input
                      name="firstname"
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      aria-label="First Name"
                    />
                  </div>
                  <div className="form-group form-box">
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      placeholder="Last Name"
                      aria-label="Last Name"
                    />
                  </div>
                  <div className="form-group form-box">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      autoComplete="on"
                      placeholder="Email Address"
                      aria-label="Email Address"
                    />
                  </div>
                  <div className="form-group form-box">
                    <input
                      name="phone"
                      type="text"
                      className="form-control"
                      autoComplete="on"
                      placeholder="Phone Number"
                      aria-label="Phone Number"
                    />
                  </div>

                  <div className="form-group clearfix">
                    <button type="submit" className="btn-md btn-theme w-100">
                      Edit Profile
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

export default UserProfile;
