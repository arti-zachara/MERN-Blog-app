import { connect } from "react-redux";
import {
  getRequest,
  getPosts,
  getPostsNumber,
  loadPostsRequest
} from "../../../redux/PostsRedux";
import Posts from "./Posts";

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
  postsNumber: getPostsNumber(state)
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPostsRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
