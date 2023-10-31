import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useUpdateProfileService from '../services/updateProfileService';
const UserProfile = () => {
  const [userData, setUserData] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const {onSubmitHandler} = useUpdateProfileService()
  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem("user_details");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData.data);
    } else {
      console.log("No data found in localStorage");
    }
  }, []);
  const [userDataInput, setUserDataInput] = useState({
    firstname: "",
    lastname: "",
  });

  const inputChangeHandler = (input, value) => {
    setUserDataInput((prevState) => {
      return {
        ...prevState,
        [input]: value,
      };
    });
  };

  const userPayload = {
    firstname: userDataInput.firstname,
    lastname: userDataInput.lastname
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler({payload: userPayload})
  }

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
                <h3>Edit My Profile</h3>
                <p>Note: Only firstname and Lastname Can Be Edited. </p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group form-box">
                    <input
                      name="firstname"
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      aria-label="First Name"
                      value={userDataInput.firstname}
                      onChange={(e) =>
                        inputChangeHandler("firstname", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group form-box">
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      placeholder="Last Name"
                      aria-label="Last Name"
                      value={userDataInput.lastname}
                      onChange={(e) =>
                        inputChangeHandler("lastname", e.target.value)
                      }
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
                      value={userData.email}
                      disabled={isDisabled}
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
                      value={userData.phone}
                      disabled={isDisabled}
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

export default UserProfile;
