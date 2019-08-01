import { connect } from "react-redux";
import {
  getRequest,
  getPosts,
  getPostsNumber,
  loadPostsByPageRequest,
  getPages,
  resetRequest
} from "../../../redux/PostsRedux";
import Posts from "./Posts";

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
  postsNumber: getPostsNumber(state),
  pages: getPages(state)
});

const mapDispatchToProps = dispatch => ({
  loadPostsByPage: page => dispatch(loadPostsByPageRequest(page)),
  resetRequestStatus: () => dispatch(resetRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
