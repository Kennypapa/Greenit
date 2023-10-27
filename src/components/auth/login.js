import React from "react";
// import '../../assets/css/style.css';
const Login = () => {
  return (
    <div>
      <div class="login-38">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 form-section">
              <div class="form-inner">
                <a href="login-38.html" class="logo">
                  <img src="assets/img/logos/logo-2.png" alt="logo" />
                </a>
                <h3>Sign Into Your Account</h3>
                <form  method="GET">
                  <div class="form-group form-box">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Email Address"
                      aria-label="Email Address"
                    />
                  </div>
                  <div class="form-group form-box clearfix">
                    <input
                      name="password"
                      type="password"
                      class="form-control"
                      autocomplete="off"
                      placeholder="Password"
                      aria-label="Password"
                    />
                  </div>
                  <div class="checkbox form-group form-box">
                    <div class="form-check checkbox-theme">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="rememberMe"
                      />
                      <label class="form-check-label" for="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a href="forgot-password-38.html" class="forgot-password">
                      Forgot Password
                    </a>
                  </div>
                  <div class="form-group clearfix">
                    <button type="submit" class="btn-md btn-theme w-100">
                      Login
                    </button>
                  </div>
                  <div class="extra-login clearfix">
                    <span>Or Login With</span>
                  </div>
                </form>
                <div class="clearfix"></div>
                <div class="social-buttons">
                  <a href="#" class="social-button social-button-facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#" class="social-button social-button-twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#" class="social-button social-button-google">
                    <i class="fa fa-google"></i>
                  </a>
                  <a href="#" class="social-button social-button-linkedin">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </div>
                <p>
                  Don't have an account?{" "}
                  <a href="register-38.html" class="thembo">
                    {" "}
                    Register here
                  </a>
                </p>
              </div>
            </div>
            <div class="col-lg-6 bg-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
