import React from "react";
import { PropTypes } from "prop-types";

import Pagination from "../../common/Pagination/Pagination";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import PostsList from "../PostsList/PostsList";

class Posts extends React.Component {
  componentDidMount() {
    const { loadPostsByPage, resetRequestStatus } = this.props;
    resetRequestStatus();
    loadPostsByPage(1);
  }

  loadPostsPage = page => {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(page);
  };

  render() {
    const { posts, request, postsNumber, pages } = this.props;
    const { loadPostsPage } = this;

    if (
      request.pending === false &&
      request.success === true &&
      postsNumber > 0
    ) {
      return (
        <div>
          <PostsList posts={posts} />
          <Pagination pages={pages} onPageChange={loadPostsPage} />
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
      postsNumber === 0
    ) {
      return (
        <div>
          <Alert variant="info">No posts</Alert>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ),
  request: PropTypes.object.isRequired,
  postsNumber: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  loadPostsByPage: PropTypes.func.isRequired,
  resetRequestStatus: PropTypes.func.isRequired
};

export default Posts;
