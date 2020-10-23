import React from "react";
import "./page.scss";
import PageFooter from "../pageLayoutComponents/PageFooter";
import Header from "../pageLayoutComponents/Header";

function Contact() {
  return (
    <div>
      <Header headerName="page-header"></Header>
      <div id="contact-main">
        <h1>Contact Us</h1>

        <div id="contact-subheading">
          <h3>Email us at pandlruetz@gmail.com</h3>
          <h3>OR</h3>
          <h3>Complete the form below</h3>
        </div>

        <div>
          <form id="contact-form">
            <label for="name">Name:</label>
            <br></br>
            <input type="text" id="name"></input>
            <br></br>
            <label for="email">Email Address:</label>
            <br></br>
            <input type="text" id="email"></input>
            <br></br>
            <label for="message">Message:</label>
            <br></br>
            <input type="text" id="message"></input>
            <br></br>
            <button type="submit" id="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <PageFooter></PageFooter>
    </div>
  );
}

export default Contact;
