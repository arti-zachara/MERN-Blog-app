import { connect } from "react-redux";
import {
  getRequest,
  getSinglePost,
  loadSinglePostRequest
} from "../../../redux/PostsRedux";
import SinglePost from "./SinglePost";

const mapStateToProps = state => ({
  singlePost: getSinglePost(state),
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  loadSinglePost: id => dispatch(loadSinglePostRequest(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost);
