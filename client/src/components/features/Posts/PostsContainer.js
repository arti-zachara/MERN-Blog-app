import { connect } from "react-redux";
import {
  getRequest,
  getPosts,
  getPostsNumber,
  loadPostsRequest,
  resetRequest
} from "../../../redux/PostsRedux";
import Posts from "./Posts";

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
  postsNumber: getPostsNumber(state)
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPostsRequest()),
  resetRequestStatus: () => dispatch(resetRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
