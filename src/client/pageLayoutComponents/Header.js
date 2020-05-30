import React from "react";
import { Link } from "react-router-dom";
import HeaderButton from "../pageLayoutComponents/HeaderButton";
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
          <img src={closeIcon} alt="close icon" width="20" height="20"></img>
        </div>
        <HeaderButton
          class="menu-button"
          name="About Us"
          target="/about"
        ></HeaderButton>
        <HeaderButton
          class="menu-button"
          name="Where to Find Us"
          target="/findus"
        ></HeaderButton>
        <HeaderButton
          class="menu-button"
          name="CSA"
          target="/csa"
        ></HeaderButton>
        <HeaderButton
          class="menu-button"
          name="Gallery"
          target="/gallery"
        ></HeaderButton>
        <HeaderButton
          class="menu-button"
          name="Contact"
          target="/contact"
        ></HeaderButton>
      </div>
      <header id="app-header">
        <div id="home-button">
          <h1>
            <Link to="/">Ruetz's Farm Fresh Produce</Link>
          </h1>
        </div>
        <div className="spacer"></div>
        <div id="right-buttons">
          <HeaderButton
            class="nav-button"
            name="About Us"
            target="/about"
          ></HeaderButton>
          <HeaderButton
            class="nav-button"
            name="Where to Find Us"
            target="/findus"
          ></HeaderButton>
          <HeaderButton
            class="nav-button"
            name="CSA"
            target="/csa"
          ></HeaderButton>
          <HeaderButton
            class="nav-button"
            name="Gallery"
            target="/gallery"
          ></HeaderButton>
          <HeaderButton
            class="nav-button"
            name="Contact"
            target="/contact"
          ></HeaderButton>
        </div>
        <div id="expand-button" onClick={addClass}>
          <img src={openIcon} alt="open icon" width="25" height="25"></img>
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
