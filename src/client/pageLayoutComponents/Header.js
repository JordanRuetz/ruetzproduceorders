import React from "react";
import { Link } from "react-router-dom";
import HeaderButton from "../HeaderButton/HeaderButton";
import openIcon from "../resources/icons/open-menu.png";
import closeIcon from "../resources/icons/close.png";
import "./styles/header.scss";
import "./styles/page-header.scss";

let shown = false;

function Header(props) {
  return (
    <div className={props.headerName}>
      <div id="cover">
        <div id="cover-close" onClick={addClass}>
          <img src={closeIcon} alt="close icon" width="30" height="30"></img>
        </div>
        <HeaderButton name="About Us" target="/about"></HeaderButton>
        <HeaderButton name="Where to Find Us" target="/findus"></HeaderButton>
        <HeaderButton name="CSA" target="/csa"></HeaderButton>
        <HeaderButton name="Gallery" target="/gallery"></HeaderButton>
        <HeaderButton name="Contact" target="/contact"></HeaderButton>
      </div>
      <header id="app-header">
        <div id="home-button">
          <h1>
            <Link to="/">Ruetz's Farm Fresh Produce</Link>
          </h1>
        </div>
        <div className="spacer"></div>
        <div id="right-buttons">
          <HeaderButton name="About Us" target="/about"></HeaderButton>
          <HeaderButton name="Where to Find Us" target="/findus"></HeaderButton>
          <HeaderButton name="CSA" target="/csa"></HeaderButton>
          <HeaderButton name="Gallery" target="/gallery"></HeaderButton>
          <HeaderButton name="Contact" target="/contact"></HeaderButton>
        </div>
        <div id="expand-button" onClick={addClass}>
          <img src={openIcon} alt="open icon" width="30" height="30"></img>
        </div>
      </header>
    </div>
  );
}

function addClass() {
  const dropdown = document.getElementById("cover");

  if (shown) {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
  shown = !shown;
}

export default Header;
