import React from "react";
import { Link } from "react-router-dom";
import "./styles/header-button.scss";

function HeaderButton(props) {
  return (
    <h2 className={props.class}>
      <Link to={props.target}>{props.name}</Link>
    </h2>
  );
}

export default HeaderButton;
