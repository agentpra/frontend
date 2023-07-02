import { Component } from "react";

class PostTop extends Component {
  constructor() {
    super();
    this.handleShowPopup = this.handleShowPopup.bind(this);
  }

  handleShowPopup(event) {
    this.props.handleShowPopup(event);
  }
  render() {
    return (
      <div className="post-topbar">
        <div className="user-picy">
        <img src={"./images/" + this.props.user?.username.split(" ")[0] + ".jpg"} alt="" />
        </div>
        <div className="post-st">
          <ul>
            {/* <li>
              <a className="post_project" href="/#" title="">
                Post a Project
              </a>
            </li> */}
            <li>
              <a
                className="post-jb active"
                href="/#"
                title=""
                onClick={this.handleShowPopup}
              >
                Post a Job
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PostTop;
