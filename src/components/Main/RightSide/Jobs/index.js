import { Component } from "react";
import Job from "./Job";
import Title from "./Title";

class Jobs extends Component {
  render() {
    return (
      <div className="widget widget-jobs">
        <Title />
        <div className="jobs-list">
          <Job />
        </div>
      </div>
    );
  }
}

export default Jobs;
