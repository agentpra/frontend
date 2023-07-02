import { Component } from "react";

class PostPopup extends Component {
  // handlePopUp() {
  //   document.querySelectorAll(".post-jb")[0].on("click", function () {
  //     document.querySelector(".post-popup.job_post").addClass("active");
  //     document.querySelector(".wrapper").addClass("overlay");
  //     return false;
  //   });
  //   document.querySelector(".post-project > a").on("click", function () {
  //     document.querySelector(".post-popup.job_post").removeClass("active");
  //     document.querySelector(".wrapper").removeClass("overlay");
  //     return false;
  //   });
  // }

  // componentDidMount() {
  //   this.handlePopUp();
  // }
  constructor() {
    super();
    this.handlePostJob = this.handlePostJob.bind(this);
  }

  handlePostJob(event) {
    event.preventDefault();
    let form = event.target.closest("form.form");
    const userData = {
      title: form.querySelector("#title").value,
      description: form.querySelector("#description").value,
      location: form.querySelector("#location").value,
      skills: form.querySelector("#skills").value.split(","),
      pay_rate_per_hr_dollar: form.querySelector("#pay_rate_per_hr_dollar")
        .value,
      job_type: form.querySelector("#job_type").value,
    };
    fetch(
      "http://localhost:8000/api/v1/user/" + this.props.user?.id + "/post",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        window.location.href = "/"
      })
      .catch((err) => {
        console.error(err);
      });
  }
  closePopup(event){
    event.preventDefault();
  document.querySelector(".post-popup.job_post").classList.remove("active");
  document.querySelector(".wrapper").classList.remove("overlay");
  return false;
  }
  render() {
    return (
      <div className="post-popup job_post">
        <button id="close-popup" onClick={this.closePopup}>X</button>
        <div className="post-project">
          <h3>Post a job</h3>
          <div className="post-project-fields">
            <form className="form">
              <div className="row">
                <div className="col-lg-12">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                  />
                </div>
                {/* <div className="col-lg-12">
                  <div className="inp-field"
                  id="jobtype">
                    <select>
                      <option>Category</option>
                      <option>QA Tester</option>
                      <option>Full Stack dev</option>
                      <option>Designer</option>
                    </select>
                  </div>
                </div> */}
                <div className="col-lg-12">
                  <input
                    type="text"
                    name="skills"
                    placeholder="Skills"
                    id="skills"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="price-br">
                    <input
                      type="text"
                      name="price1"
                      placeholder="Price"
                      id="pay_rate_per_hr_dollar"
                    />
                    <i className="la la-dollar"></i>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="inp-field">
                    <select id="job_type">
                      <option value={"Full Time"}>Full Time</option>
                      <option value={"Part Time"}>Part tTime</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    name="location"
                    placeholder="location"
                    id="location"
                  />
                </div>
                <div className="col-lg-12">
                  <textarea
                    name="description"
                    placeholder="Description"
                    id="description"
                  ></textarea>
                </div>
                <div className="col-lg-12">
                  <ul>
                    <li>
                      <button
                        className="active"
                        type="submit"
                        value="post"
                        onClick={this.handlePostJob}
                      >
                        Post
                      </button>
                    </li>
                    <li>
                      <a href="./index.html#" title="">
                        Cancel
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <a href="./index.html#" title="">
            <i className="la la-times-circle-o"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default PostPopup;
