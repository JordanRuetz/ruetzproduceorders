import React from "react";
import "./Page.css";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

function FindUs() {
  return (
    <div>
      <PageHeader></PageHeader>
      <div className="main-content column-flex">
        <h1>Where to Find Us</h1>
        <p>Content Coming Soon!</p>
      </div>
      <PageFooter></PageFooter>
    </div>
  );
}

export default FindUs;
