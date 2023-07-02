import { Component } from "react";
import { postAPI } from "../../../../apis";
import Comment from "./Comment";
class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: props.post.comments,
      likes: props.post.liked_by
    }
    this.likeHandler = this.likeHandler.bind(this)
    // this.changeStatus = this.changeStatus.bind(this)
  }
  calPostTimeAgo(post_date) {
    return post_date;
  }
  likeHandler(event) {
    event.preventDefault();
    const currentLikes = [...this.state.likes];
    const newLikes = [...currentLikes];
    if (newLikes.indexOf(this.props.user.username) > -1) {
      newLikes.splice(newLikes.indexOf(this.props.user.username, 1));
    } else {
      newLikes.push(this.props.user.username);
    }
    this.setState({ likes: newLikes })
    const that = this
    fetch(postAPI + "/update_likes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        post_id: this.props.post.id,
        user_id: this.props.user?.id
      }),
    })
      .then((resp) => {
        if (resp.status !== 200) {
          that.setState({ likes: currentLikes })
        }
        return resp.json()
      })
      .then((data) => {
        if (data) {
          that.setState({ likes: data })
          // document.querySelector("#err").innerHTML = "";
        }
      })
      .catch((err) => {
        console.error(err);
        that.setState({ likes: currentLikes })
        // document.querySelector("#err").innerHTML = "Login Failed";
      });
  }

  // commentHandler(event){
  //   event.preventDefault()
  //   const commentInput = document.querySelector(".comment-input");
  //   const commentBtn = document.querySelector(".comment-button")
  //   if(commentInput.classList.contains("comment-active")){
  //     commentInput.classList.remove("comment-active")
  //     commentBtn.classList.remove("comment-active")
  //   }else{
  //   commentInput.classList.add("comment-active")
  //   commentBtn.classList.add("comment-active")
  //   }





  // changeStatus(event){
  //   document.querySelector(".comment-input").classList.remove("comment-active")
  //   document.querySelector(".comment-button").classList.remove("comment-active")

  //   var comment = document.querySelector(".comment-input").value
  //   const currentComments = [...this.state.comments];
  //   const newComments = [...currentComments];
  //   if(comment.length > 0){
  //     newComments.push(comment)
  //   }
  //   this.setState({comments: newComments})
  //   const that = this
  //   fetch(postAPI +  "/update_comment", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "accept": "application/json"
  //     },
  //     body: JSON.stringify({
  //       post_id: this.props.post.id,
  //       user_id: this.props.user?.id,
  //       comments: that.state.comments
  //     }),
  //   })
  //     .then((resp) => {
  //       if(resp.status !== 200){
  //       that.setState({comments: currentComments})
  //       }
  //       return resp.json()
  //     })
  //     .then((data) => {
  //       if (data) {
  //         that.setState({comments: data})
  //         // document.querySelector("#err").innerHTML = "";
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       that.setState({comments: currentComments})
  //       // document.querySelector("#err").innerHTML = "Login Failed";
  //     });



  // }
  render() {
    const { post_date, post_by_username, post_by_fullname, location, title, job_type, pay_rate_per_hr_dollar, description, skills, viewed_by, comments } = this.props.post;

    const liked_by = this.state.likes;
    return (
      <div className="postyy post-bar">
        <div className="post_topbar">
          <div className="usy-dt">
            <img src={"./images/" + (post_by_username.split(" ")[0]).toLowerCase() + ".jpg"} alt="" />
            <div className="usy-name">
              <h3>{post_by_fullname}</h3>
              <span>{this.calPostTimeAgo(post_date)}</span>
            </div>
          </div>
          <div className="ed-opts">
            <a href="/#" title="" className="ed-opts-open">
              <i className="la la-ellipsis-v"></i>
            </a>
            <ul className="ed-options">
              <li>
                <a href="/#" title="">
                  Edit Post
                </a>
              </li>
              <li>
                <a href="/#" title="">
                  Unsaved
                </a>
              </li>
              <li>
                <a href="/#" title="">
                  Unbid
                </a>
              </li>
              <li>
                <a href="/#" title="">
                  Close
                </a>
              </li>
              <li>
                <a href="/#" title="">
                  Hide
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="epi-sec">
          <ul className="descp">
            {/* <li>
              <img src="./images/icon8.png" alt="" />
              <span>Epic Coder</span>
            </li> */}
            <li>
              <img src="./images/icon9.png" alt="" />
              <span>{location}</span>
            </li>
          </ul>
          <ul className="bk-links" style={{ display: "none" }}>
            <li>
              <a href="/#" title="">
                <i className="la la-bookmark"></i>
              </a>
            </li>
            <li>
              <a href="/#" title="">
                <i className="la la-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="job_descp">
          <h3>{title}</h3>
          <ul className="job-dt">
            <li>
              <a href="/#" title="">
                {job_type}
              </a>
            </li>
            <li>
              <span>
                $<>{pay_rate_per_hr_dollar}</> / hr
              </span>
            </li>
          </ul>
          <p>
            {description.length > 50 ? description.substring(0, 20) + "... " : description}
            {description.length > 50 && (
              <a href="/#" title="">
                view more
              </a>
            )}
          </p>
          <ul className="skill-tags">
            {skills.map((skill, idx) => (
              <li key={idx}>
                <a href="/#" title="">
                  {skill}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="job-status-bar">
          <ul className="like-com">
            <li>
              <a href="/#" onClick={this.likeHandler}>
                <i className="fas fa-heart"></i> {liked_by.indexOf(this.props.user?.username) > -1 ? <b>Liked</b> : "Like"}
              </a>
              <img src="./images/liked-img.png" alt="" />
              <span className="like-count">{liked_by.length}</span>
              {console.log(liked_by.length)}
            </li>
            <li>
              <a href="/#" className="com comment-box" onClick={this.commentHandler}>
                <i className="fas fa-comment-alt"></i> Comment <>{comments.length}</>

              </a>
            </li>
            {/* <input type="text" name="comment-box" className="comment-input" placeholder="comment"></input> */}
            {/* <button className="comment-button" onClick={this.changeStatus}>Comment</button> */}
            <li>

            </li>
          </ul>
          <a href="/#">
            <i className="fas fa-eye"></i>Views <>{viewed_by.length}</>
          </a>
          <div>
            <Comment user={this.props.user} comments={comments} postId={this.props.post.id} ></Comment>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;