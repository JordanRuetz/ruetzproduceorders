import React from "react";
import { Link } from "react-router-dom";

function HeaderButton(props) {
  return (
    <h2>
      <Link to={props.target}>{props.name}</Link>
    </h2>
  );
}

export default HeaderButton;
