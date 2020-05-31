import React from "react";
import "./page.scss";
import PageFooter from "../pageLayoutComponents/PageFooter";
import Header from "../pageLayoutComponents/Header";

function FindUs() {
  return (
    <div>
      <Header headerName="page-header"></Header>
      <div className="main-content">
        <h1>Where to Find Us</h1>
        <p>Content Coming Soon!</p>
      </div>
      <PageFooter></PageFooter>
    </div>
  );
}

export default FindUs;
