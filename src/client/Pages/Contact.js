import React from "react";
import "./Page.css";
import PageFooter from "./PageFooter";
import Header from "../pageLayoutComponents/Header";

function Contact() {
  return (
    <div>
      <Header headerName="page-header"></Header>
      <div className="main-content column-flex">
        <h1>Contact Us</h1>
        <p>Content Coming Soon!</p>
      </div>
      <PageFooter></PageFooter>
    </div>
  );
}

export default Contact;
