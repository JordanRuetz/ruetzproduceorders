import React from "react";
import "./Page.css";
import PageFooter from "../pageLayoutComponents/PageFooter";
import Header from "../pageLayoutComponents/Header";

function Csa() {
  return (
    <div>
      <Header headerName="page-header"></Header>
      <div className="main-content column-flex">
        <h1>CSA</h1>
        <p>Content Coming Soon!</p>
      </div>
      <PageFooter></PageFooter>
    </div>
  );
}

export default Csa;
