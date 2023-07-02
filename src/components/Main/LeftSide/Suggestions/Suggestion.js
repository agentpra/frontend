import { Component } from "react";

class Suggestion extends Component {
  render() {
    return (
      <div className="suggestion-usd">
        <img src={"./images/" + this.props.suggestion?.username + ".png"} alt="" />
        <div className="sgt-text">
          <h4>{this.props.suggestion?.fullname}</h4>
          <span>{this.props.suggestion?.title}</span>
        </div>
        <span>
          <i className="la la-plus"></i>
        </span>
      </div>
    );
  }
}

export default Suggestion;
