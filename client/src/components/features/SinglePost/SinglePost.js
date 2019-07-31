import React from "react";
import { PropTypes } from "prop-types";

import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import SmallTitle from "../../common/SmallTitle/SmallTitle";
import HtmlBox from "../../common/HtmlBox/HtmlBox";
import "../PostSummary/PostSummary.scss";

class SinglePost extends React.Component {
  componentDidMount() {
    const { loadSinglePost, id, resetRequestStatus } = this.props;
    resetRequestStatus();
    loadSinglePost(id);
  }

  render() {
    const { singlePost, request } = this.props;

    if (request.pending === false && request.success === true && singlePost) {
      return (
        <div>
          <article className="post-summary">
            <SmallTitle>{singlePost.title}</SmallTitle>
            <p>author: {singlePost.author}</p>
            <HtmlBox>{singlePost.content}</HtmlBox>
          </article>
        </div>
      );
    } else if (request.pending === true && request.success === null) {
      return (
        <div>
          <Spinner />
        </div>
      );
    } else if (request.pending === false && request.error !== null) {
      return (
        <div>
          <Alert variant="error">{request.error}</Alert>
        </div>
      );
    } else if (
      request.pending === false &&
      request.success === true &&
      singlePost === null
    ) {
      return (
        <div>
          <Alert variant="info">No post</Alert>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

SinglePost.propTypes = {
  singlePost: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }),
  loadSinglePost: PropTypes.func.isRequired
};

export default SinglePost;
