import React from "react";
import "./Page.css";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

function Csa() {
  return (
    <div>
      <PageHeader></PageHeader>
      <div className="main-content column-flex">
        <h1>CSA</h1>
        <p>Content Coming Soon!</p>
      </div>
      <PageFooter></PageFooter>
    </div>
  );
}

export default Csa;
