import { connect } from "react-redux";
import {
  getRequest,
  getSinglePost,
  loadRandomPostRequest,
  resetRequest
} from "../../../redux/PostsRedux";
import RandomPost from "./RandomPost";

const mapStateToProps = state => ({
  singlePost: getSinglePost(state),
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  loadRandomPost: () => dispatch(loadRandomPostRequest()),
  resetRequestStatus: () => dispatch(resetRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomPost);
