import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../common/Logo/Logo";
import MainMenu from "../../layout/MainMenu/MainMenu";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Logo />
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/new">Add Post</Link>
        <Link to="/contact">Contact</Link>
      </div>
    );
  }
}

export default NavBar;
