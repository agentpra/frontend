import { Component } from "react";
import About from "./About";
import Jobs from "./Jobs";
import Suggestions from "./Suggestions";

class RightSide extends Component {
  render() {
    return (
      <div className="right-nav col-lg-3 pd-right-none no-pd">
        <div className="right-sidebar">
          <About />
          <Jobs />
          <Suggestions />
        </div>
      </div>
    );
  }
}

export default RightSide;
