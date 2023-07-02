import { Component } from "react";

class UserData extends Component {
  render() {
    return (
      <div className="user-data full-width">
        <div className="user-profile">
          <div className="username-dt">
            <div className="usr-pic">
            <img src={"./images/" + this.props.user?.username.split(" ")[0] + ".jpg"} alt="" />
            </div>
          </div>
          <div className="user-specs">
            <h3>{this.props.user?.fullname}</h3>
            <span>{this.props.user?.title}</span>
          </div>
        </div>
        <ul className="user-fw-status">
          <li>
            <h4>Following</h4>
            <span>{this.props.user?.followings?.length}</span>
          </li>
          <li>
            <h4>Followers</h4>
            <span>{this.props.user?.followers?.length}</span>
          </li>
          <li>
            <a href={"/profile/" + this.props.user?.username} title="">
              View Profile
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserData;
