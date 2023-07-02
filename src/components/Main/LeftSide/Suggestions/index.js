import { Component } from "react";
import { suggestionsAPI } from "../../../../apis";
import Suggestion from "./Suggestion";

class Suggestions extends Component {
  constructor() {
    super();
    this.state = {
      suggestions: [],
    };
  }

  componentDidMount() {
    fetch(suggestionsAPI + "?user_id=" + this.props.user?.id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data?.length) {
          this.setState({ suggestions: data });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="suggestions full-width">
        <div className="sd-title">
          <h3>Suggestions</h3>
          <i className="la la-ellipsis-v"></i>
        </div>
        <div className="suggestions-list">
          {this.state.suggestions.map((suggestion, i) => (
            <Suggestion key={i} suggestion={suggestion} />
          ))}

          <div className="view-more">
            <a href="/suggestions" title="">
              View More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Suggestions;
