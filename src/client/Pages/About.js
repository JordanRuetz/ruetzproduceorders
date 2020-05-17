import React from "react";
import "./Page.css";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

function About() {
  return (
    <div className="page">
      <PageHeader></PageHeader>
      <div className="main-content column-flex">
        <h1>About Us</h1>
        <p>Content Coming Soon!</p>
      </div>
      <PageFooter></PageFooter>
    </div>
  );
}

export default About;
