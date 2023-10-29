import React, {useState} from "react";
import { Link } from "react-router-dom";
import useSignup from '../services/signupService';
const Register = () => {
  const { onSubmitHandler, error } = useSignup();
  const [userInput, setUserInput] = useState({
    firstname: 'john',
    lastname: "Doe",
    email: "daramolakehinde339@gmail.com",
    phone:'09018913599',
    password:'Kenny'
  });
  //payload
  const userPostData =  {
    firstname: userInput.firstname,
    lastname: userInput.lastname,
    email: userInput.email,
    phone: userInput.phone,
    password: userInput.password,
  }

  const inputChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [input]: value
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler({payload: userPostData});
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
                <h3>Create An Cccount</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group form-box">
                    <input
                      name="firstname"
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      aria-label="First Name"
                      value={userInput.firstname}
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
                      value={userInput.lastname}
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
                      value={userInput.email}
                      onChange={(e) =>
                        inputChangeHandler("email", e.target.value)
                      }
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
                      value={userInput.phone}
                      onChange={(e) =>
                        inputChangeHandler("phone", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group form-box clearfix">
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      autoComplete="on"
                      placeholder="Password"
                      aria-label="Password"
                      value={userInput.password}
                      onChange={(e) =>
                        inputChangeHandler("password", e.target.value)
                      }
                    />
                  </div>
                  <div className="checkbox form-group form-box">
                    <div className="checkbox clearfix">
                      <div className="form-check checkbox-theme">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="rememberMe"
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                          I agree to the
                          <a href="#" className="terms">
                            terms of service
                          </a>
                        </label>
                      </div>
                    </div>
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

export default Register;
