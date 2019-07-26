import { connect } from "react-redux";
import { getPosts, loadPostsRequest } from "../../../redux/PostsRedux";
import Posts from "./Posts";

const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPostsRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
