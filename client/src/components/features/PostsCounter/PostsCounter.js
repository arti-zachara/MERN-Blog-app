import React from "react";
import { PropTypes } from "prop-types";

class PostsCounter extends React.Component {
  render() {
    const { postsNumber } = this.props;
    return (
      <div>
        {postsNumber > 0 ? "No of posts: " + postsNumber : "- no posts -"}
      </div>
    );
  }
}

PostsCounter.propTypes = {
  postsNumber: PropTypes.number
};

export default PostsCounter;
