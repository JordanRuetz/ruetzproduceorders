import React from "react";
import "./Page.css";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

function Contact() {
  return (
    <div>
      <PageHeader></PageHeader>
      <div className="main-content column-flex">
        <h1>Contact Us</h1>
        <p>Content Coming Soon!</p>
      </div>
      <PageFooter></PageFooter>
    </div>
  );
}

export default Contact;
