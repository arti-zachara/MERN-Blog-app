import React from "react";
import SinglePostContainer from "../../features/SinglePost/SinglePostContainer";

const SinglePostPage = props => (
  <div>
    <SinglePostContainer id={props.match.params.id} />
  </div>
);

export default SinglePostPage;
