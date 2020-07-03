import React from "react";
import "./page.scss";
import PageFooter from "../pageLayoutComponents/PageFooter";
import Header from "../pageLayoutComponents/Header";

function FindUs() {
  return (
    <div className="flex-page single-page">
      <Header headerName="page-header"></Header>
      <div className="main-content">
        <h1>Where to Find Us</h1>
        <h2>Our Farm</h2>
        <p>1106 Concession 8, Teeswater, Ontario</p>
        <h2>Kincardine Farmers Market</h2>
        <p>Every Monday throughout the summer</p>
        <h2>Keady Farmers Market</h2>
        <p>Every Tuesday thoughout the summer</p>
        <h2>St. Jacobs Farmers Market</h2>
        <p>Thursdays & Saturdays throughout the summer</p>
      </div>
      <PageFooter></PageFooter>
    </div>
  );
}

export default FindUs;
