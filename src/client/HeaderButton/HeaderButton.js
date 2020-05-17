import React from "react";
import { Link } from "react-router-dom";
import "./HeaderButton.css";

function HeaderButton(props) {
  return (
    <h2 className="nav-button">
      <Link to={props.target}>{props.name}</Link>
    </h2>
  );
}

export default HeaderButton;
