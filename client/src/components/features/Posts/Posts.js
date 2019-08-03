import React from "react";
import { PropTypes } from "prop-types";

import Pagination from "../../common/Pagination/Pagination";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import PostsList from "../PostsList/PostsList";

class Posts extends React.Component {
  state = {
    initialPage: this.props.initialPage || 1,
    postsPerPage: this.props.postsPerPage || 10,
    pagination: this.props.pagination
  };

  componentDidMount() {
    const { loadPostsByPage, resetRequestStatus } = this.props;
    const { initialPage, postsPerPage } = this.state;
    resetRequestStatus();
    loadPostsByPage(initialPage, postsPerPage);
  }

  loadPostsPage = page => {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(page);
  };

  render() {
    const { pagination } = this.state;
    const { posts, request, postsNumber, pages, presentPage } = this.props;
    const { loadPostsPage } = this;

    if (
      request.pending === false &&
      request.success === true &&
      postsNumber > 0 &&
      !pagination
    ) {
      return (
        <div>
          <PostsList posts={posts} />
        </div>
      );
    } else if (
      request.pending === false &&
      request.success === true &&
      postsNumber > 0 &&
      pagination
    ) {
      return (
        <div>
          <PostsList posts={posts} />
          <Pagination
            pages={pages}
            initialPage={presentPage}
            onPageChange={loadPostsPage}
          />
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
  resetRequestStatus: PropTypes.func.isRequired,
  presentPage: PropTypes.number.isRequired,
  initialPage: PropTypes.number,
  postsPerPage: PropTypes.number,
  pagination: PropTypes.bool
};

export default Posts;
