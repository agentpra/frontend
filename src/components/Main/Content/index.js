import { Component } from "react";
import PostSection from "./PostSection";
import PostTop from "./PostTop";
import PostPopup from "./PostPopup";

class Content extends Component {
  handleShowPopup(event) {
    event.preventDefault();
    document.querySelector(".post-popup.job_post").classList.add("active");
    document.querySelector(".wrapper").classList.add("overlay");
    return false;
  }
  render() {
    return (
      <div className="content col-lg-6 col-md-8 no-pd">
        <div className="main-ws-sec">
          <PostTop user={this.props.user}  handleShowPopup={this.handleShowPopup} />
          <PostSection searchKeyword = {this.props.searchKeyword} user={this.props.user}/>
          <PostPopup user={this.props.user} />
        </div>
      </div>
    );
  }
}

export default Content;
