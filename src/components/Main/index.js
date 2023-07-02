import { Component } from "react";
import Content from "./Content";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

class Main extends Component {
  render() {
    return (
      <main>
        <div className="main-section">
          <div className="container">
            <div className="main-section-data">
              <div className="row">
                <LeftSide user={this.props.user} />
                <Content user={this.props.user}searchKeyword = {this.props.searchKeyword} />
                <RightSide />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
