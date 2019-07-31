import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import TextField from "../../common/TextField/TextField";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Button from "../../common/Button/Button";

class PostForm extends React.Component {
  state = {
    post: {
      title: "",
      author: "",
      content: ""
    }
  };

  render() {
    const { post } = this.state;

    return (
      <div>
        <TextField label="Title" value={post.title} />

        <TextField label="Author" value={post.author} />

        <SectionTitle>Edit post content</SectionTitle>

        <Button variant="primary">Add post</Button>
      </div>
    );
  }
}

export default PostForm;
