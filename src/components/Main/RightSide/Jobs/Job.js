import { Component } from "react";

class Job extends Component {
  render() {
    return (
      <div className="job-info">
        <div className="job-details">
          <h3>Senior Product Designer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
        </div>
        <div className="hr-rate">
          <span>$25/hr</span>
        </div>
      </div>
    );
  }
}

export default Job;
