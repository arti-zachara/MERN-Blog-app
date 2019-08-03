import { connect } from "react-redux";
import {
  getRequest,
  getPosts,
  getPostsNumber,
  loadPostsByPageRequest,
  getPages,
  resetRequest,
  getPresentPage
} from "../../../redux/PostsRedux";
import Posts from "./Posts";

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
  postsNumber: getPostsNumber(state),
  pages: getPages(state),
  presentPage: getPresentPage(state)
});

const mapDispatchToProps = dispatch => ({
  loadPostsByPage: (page, postsPerPage) =>
    dispatch(loadPostsByPageRequest(page, postsPerPage)),
  resetRequestStatus: () => dispatch(resetRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
