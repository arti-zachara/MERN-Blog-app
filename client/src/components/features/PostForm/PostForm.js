import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Editor from "react-medium-editor";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";

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

        <Editor
          className="content-editor"
          text={post.content}
          options={{
            placeholder: false,
            toolbar: {
              buttons: ["bold", "italic", "underline", "anchor", "h2", "h3"]
            }
          }}
        />

        <Button variant="primary">Add post</Button>
      </div>
    );
  }
}

export default PostForm;
