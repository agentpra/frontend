import { Component } from "react";
import { userAPI } from "../apis";

class Login extends Component {
  handleSignIn(event) {
    event.preventDefault();
    const form = event.target.closest("form#loginform");
    const username = form.querySelector("#username").value;
    const password = form.querySelector("#password").value;
    fetch(userAPI + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.id) {
          document.querySelector("#err").innerHTML = "";
          window.sessionStorage.setItem("loggedInUser", data.id);
          window.location.href = "/";
        } else if (data.detail) {
          document.querySelector("#err").innerHTML = data.detail;
        }
      })
      .catch((err) => {
        console.error(err);
        document.querySelector("#err").innerHTML = "Login Failed";
      });
  }
  handleSignUp(event) {
    event.preventDefault();
    const form = event.target.closest("form#signupform");
    const username = form.querySelector("#username").value;
    const email = form.querySelector("#email").value;
    const fullname = form.querySelector("#fullname").value;
    const address = form.querySelector("#address").value;
    const job_type = form.querySelector("#job_type").value;
    const title = form.querySelector("#title").value;
    const skills = form.querySelector("#skills").value.split(",");
    const password = form.querySelector("#password").value;
    const rpassword = form.querySelector("#rpassword").value;
    if (password !== rpassword) {
      return;
    }
    fetch(userAPI + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        fullname,
        address,
        job_type,
        title,
        skills,
        password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.id) {
          document.querySelector("#err").innerHTML = "";
          window.sessionStorage.setItem("loggedInUser", data.id);
          window.location.href = "/";
        } else if (data.detail) {
          document.querySelector("#err").innerHTML = data.detail;
        }
      })
      .catch((err) => {
        console.error(err);
        document.querySelector("#err").innerHTML = "Signup failed";
      });
  }
  render() {
    return (
      <div className="sign-in-page" style={{ background: "cornflowerblue" }}>
        <div className="signin-popup">
          <div className="signin-pop">
            <div className="row">
              <div className="col-lg-6">
                <div className="cmp-info">
                  <div className="cm-logo">
                    <img src="images/logo2.png" alt="" />
                    <p>KMC, is a global freelancing platform and social networking where businesses and independent professionals connect and collaborate remotely</p>
                  </div>
                  <img src="images/logo.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="login-sec">
                  <ul className="sign-control">
                    <li data-tab="tab-1" className="current">
                      <a href="/#" title="">
                        Sign in
                      </a>
                    </li>
                    <li data-tab="tab-2">
                      <a href="/#" title="">
                        Sign up
                      </a>
                    </li>
                  </ul>
                  <div className="sign_in_sec current" id="tab-1">
                    <h3>Sign in</h3>
                    <form id="loginform">
                      <div className="row">
                        <div className="col-lg-12 no-pdd">
                          <div className="sn-field">
                            <input type="text" name="username" id="username" placeholder="Username" />
                            <i className="la la-user"></i>
                          </div>
                        </div>
                        <div className="col-lg-12 no-pdd">
                          <div className="sn-field">
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <i className="la la-lock"></i>
                          </div>
                        </div>
                        <div className="col-lg-12 no-pdd">
                          <div className="checky-sec">
                            <div className="fgt-sec">
                              <input type="checkbox" name="cc" id="c1" />
                              <label htmlFor="c1">
                                <span></span>
                              </label>
                              <small>Remember me</small>
                            </div>
                            {/* <a href="/#" title="">
                              Forgot Password?
                            </a> */}
                          </div>
                        </div>
                        <div className="col-lg-12 no-pdd">
                          <button type="submit" value="submit" onClick={this.handleSignIn}>
                            Sign in
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* <div className="login-resources">
                      <h4>Login Via Social Account</h4>
                      <ul>
                        <li>
                          <a href="/#" title="" className="fb">
                            <i className="fa fa-facebook"></i>Login Via Facebook
                          </a>
                        </li>
                        <li>
                          <a href="/#" title="" className="tw">
                            <i className="fa fa-twitter"></i>Login Via Twitter
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                  <div className="sign_in_sec" id="tab-2">
                    <div className="signup-tab">
                      <i className="fa fa-long-arrow-left"></i>
                      {/* <h2>johndoe@example.com</h2> */}
                      <ul>
                        <li data-tab="tab-3" className="current">
                          <a href="/#" title="">
                            User
                          </a>
                        </li>
                        <li data-tab="tab-4">
                          <a href="/#" title="">
                            Company
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="dff-tab current" id="tab-3">
                      <form id="signupform">
                        <div className="row">
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <input type="text" name="username" id="username" placeholder="Username" />
                              <i className="la la-user"></i>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <input type="text" name="email" id="email" placeholder="Email" />
                              <i className="la la-user"></i>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <input type="text" name="fullname" id="fullname" placeholder="Full Name" />
                              <i className="la la-user"></i>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <input type="text" name="address" id="address" placeholder="Address" />
                              <i className="la la-globe"></i>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <input type="text" name="title" id="title" placeholder="Title" />
                              <i className="la la-user"></i>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <input type="text" name="skills" id="skills" placeholder="Skills (comma separated)" />
                              <i className="la la-user"></i>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <select name="job_type" id="job_type">
                                <option>Job Type</option>
                                <option value={"Part Time"}>Part Time</option>
                                <option value={"Full Time"}>Full Time</option>
                              </select>
                              <i className="la la-dropbox"></i>
                              <span>
                                <i className="fa fa-ellipsis-h"></i>
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <input type="password" name="password" id="password" placeholder="Password" />
                              <i className="la la-lock"></i>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <input type="password" name="repeat-password" id="rpassword" placeholder="Repeat Password" />
                              <i className="la la-lock"></i>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="checky-sec st2">
                              <div className="fgt-sec">
                                <input type="checkbox" name="cc" id="c2" />
                                <label htmlFor="c2">
                                  <span></span>
                                </label>
                                <small>Yes, I understand and agree to the KMC Terms &amp; Conditions.</small>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <button type="submit" value="submit" onClick={this.handleSignUp}>
                              Get Started
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="dff-tab" id="tab-4">
                      <form>
                        <div className="row">
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <input type="text" name="company-name" placeholder="Company Name" />
                              <i className="la la-building"></i>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <input type="text" name="country" placeholder="Country" />
                              <i className="la la-globe"></i>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <input type="password" name="password" placeholder="Password" />
                              <i className="la la-lock"></i>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <input type="password" name="repeat-password" placeholder="Repeat Password" />
                              <i className="la la-lock"></i>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="checky-sec st2">
                              <div className="fgt-sec">
                                <input type="checkbox" name="cc" id="c3" />
                                <label htmlFor="c3">
                                  <span></span>
                                </label>
                                <small>Yes, I understand and agree to the KMC Terms &amp; Conditions.</small>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <button type="submit" value="submit">
                              Get Started
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div id="err"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footy-sec">
          <div className="container">
            <ul>
              <li>
                <a href="/#" title="">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/#" title="">
                  About
                </a>
              </li>
              <li>
                <a href="/#" title="">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/#" title="">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="/#" title="">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="/#" title="">
                  Career
                </a>
              </li>
              <li>
                <a href="/#" title="">
                  Forum
                </a>
              </li>
              <li>
                <a href="/#" title="">
                  Language
                </a>
              </li>
              <li>
                <a href="/#" title="">
                  Copyright Policy
                </a>
              </li>
            </ul>
            <p>
              <img src="images/copy-icon.png" alt="" />
              Copyright 2019
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
