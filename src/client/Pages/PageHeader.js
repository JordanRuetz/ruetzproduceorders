import React from "react";
import { Link } from "react-router-dom";
import "./Page.css";
import HeaderButton from "./HeaderButton";

function PageHeader() {
  return (
    <header id="page-header">
      <div id="page-home-button">
        <h1>
          <Link to="/">Ruetz's Farm Fresh Produce</Link>
        </h1>
      </div>
      <div className="spacer"></div>
      <div id="page-right-buttons">
        <HeaderButton name="About Us" target="/about"></HeaderButton>
        <HeaderButton name="Where to Find Us" target="/findus"></HeaderButton>
        <HeaderButton name="CSA" target="/csa"></HeaderButton>
        <HeaderButton name="Gallery" target="/gallery"></HeaderButton>
        <HeaderButton name="Contact" target="/contact"></HeaderButton>
      </div>
      <div id="page-expand-button">
        <h2>TT</h2>
      </div>
    </header>
  );
}

export default PageHeader;
