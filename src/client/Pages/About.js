import React from "react";
import "./page.scss";
import PageFooter from "../pageLayoutComponents/PageFooter";
import Header from "../pageLayoutComponents/Header";

function About() {
  return (
    <div className="page">
      <Header headerName="page-header"></Header>
      <div className="main-content">
        <h1>About Us</h1>
        <p>Content Coming Soon!</p>
      </div>
      <PageFooter></PageFooter>
    </div>
  );
}

export default About;
