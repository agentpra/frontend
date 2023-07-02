import { Component } from "react";

class Suggestion extends Component {
  render() {
    return (
      <div className="suggestion-usd">
        <img src="./images/s1.png" alt="" />
        <div className="sgt-text">
          <h4>Jessica William</h4>
          <span>Graphic Designer</span>
        </div>
        <span>
          <i className="la la-plus"></i>
        </span>
      </div>
    );
  }
}

export default Suggestion;
