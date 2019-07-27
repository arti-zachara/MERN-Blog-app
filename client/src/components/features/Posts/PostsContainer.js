import { connect } from "react-redux";
import {
  getRequest,
  getPosts,
  loadPostsRequest
} from "../../../redux/PostsRedux";
import Posts from "./Posts";

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPostsRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
