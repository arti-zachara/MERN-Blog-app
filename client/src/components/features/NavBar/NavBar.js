import React from "react";

import Logo from "../../common/Logo/Logo";
import MainMenu from "../../layout/MainMenu/MainMenu";
import "./NavBar.scss";

class NavBar extends React.Component {
  state = {
    links: [
      { path: "/", title: "Home" },
      { path: "/posts/new", title: "Add post" },
      { path: "/random", title: "Random post" },
      { path: "/posts", title: "Posts" },
      { path: "/contact", title: "Contact" }
    ]
  };

  render() {
    const { links } = this.state;

    return (
      <nav className="navbar">
        <Logo />
        <MainMenu links={links} />
      </nav>
    );
  }
}

export default NavBar;
