import { Component } from "react";
import { postAPI } from "../../../../apis";

class Comment extends Component {
    constructor(props) {
        super(props);
        console.log(111, props.comments)
        this.state = {
            comments: [...props.comments]
        }
        this.handlePostComment = this.handlePostComment.bind(this)

    }

    handlePostComment(event) {
        event.preventDefault();
        let comment = document.querySelector("#input_" + this.props.postId).value
        if (!comment) {
            return
        }
        let currentComments = [...this.state.comments]
        let newComments = [...currentComments]
        newComments.push(comment)
        this.setState({ comments: newComments })
        const that = this

        fetch(postAPI + "/update_comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                post_id: this.props.postId,
                user_id: this.props.user?.id,
                comment: comment
            }),
        })
            .then((resp) => {
                if (resp.status !== 200) {
                    that.setState({ comments: currentComments })
                }
                return resp.json()
            })
            .then((data) => {
                if (data) {
                    that.setState({ comments: data })
                }
            })
            .catch((err) => {
                console.error(err);
                that.setState({ comments: currentComments })
                // document.querySelector("#err").innerHTML = "Login Failed";
            });
    }
    render() {
        // const comments = [
        //   {
        //     fullname: "Saroj Shakya",
        //     username: "testuser1",
        //     text: "I am interested",
        //   },
        //   {
        //     fullname: "Ram Shakya",
        //     username: "testuser2",
        //     text: "I am interested too",
        //   },
        // ]
        ;
        console.log(this.state)
        return (

            <div className="comment-section">
                <div className="comment-sec">
                    {console.log(this.state.comments)}
                    <ul>
                        {this.state.comments?.map((comment, i) => {
                            return (
                                <li key={i}>
                                    <div className="comment-list">
                                        <div className="bg-img">
                                            <img src="./images/bg-img1.png" alt="" />
                                        </div>
                                        <div className="comment">
                                            <h3>{comment.fullname}</h3>
                                            <span>
                                                <img src="./images/clock.png" alt="" /> 3 min ago
                                            </span>
                                            <p>{comment.comment}</p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="post-comment">
                    <div className="cm_img">
                        <img src="./images/bg-img4.png" alt="" />
                    </div>
                    <div className="comment_box">
                        <form>
                            <input id={"input_" + this.props.postId} type="text" placeholder="Post a comment" />
                            <button type="button" onClick={this.handlePostComment}>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;