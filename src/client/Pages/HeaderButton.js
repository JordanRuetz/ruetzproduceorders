import React from "react";
import { Link } from "react-router-dom";
import "./Page.css";

function HeaderButton(props) {
  return (
    <h2 className="page-nav-button">
      <Link to={props.target}>{props.name}</Link>
    </h2>
  );
}

export default HeaderButton;
