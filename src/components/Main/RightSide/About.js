import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="widget widget-about">
        <img src="./images/logo.png" alt="" />
        <h3>Track Time on KMC</h3>
        <span>Pay only for the Hours worked</span>
        <div className="sign_link">
          <h3>
            <a href="/#" title="">
              Sign up
            </a>
          </h3>
          <a href="/#" title="">
            Learn More
          </a>
        </div>
      </div>
    );
  }
}

export default About;
