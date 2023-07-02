import { Component } from "react";
import Suggestions from "./Suggestions";
import Tags from "./Tags";
import UserData from "./UserData";

class LeftSide extends Component {
  render() {
    return (
      <div className="left-nav col-lg-3 col-md-4 pd-left-none no-pd">
        <div className="main-left-sidebar no-margin">
          <UserData user={this.props.user} />
          <Suggestions user={this.props.user} />
          <Tags />
        </div>
      </div>
    );
  }
}

export default LeftSide;
