import React from "react";
import "./page.scss";
import PageFooter from "../pageLayoutComponents/PageFooter";
import Header from "../pageLayoutComponents/Header";

import sunny from "../resources/compressedPics/rsz_sunny.jpg";

function About() {
  return (
    <div className="flex-page">
      <Header headerName="page-header"></Header>
      <div className="main-content">
        <h1>About Us</h1>
        <img src={sunny} alt="Farm" />
        <p>
          After each growing up on their own family farms in the
          Teeswater-Mildmay area, Paul and Linda Ruetz began their own farm
          producing both vegetables and beef, adding a flower greenhouse soon
          after. Since that time, they have transitioned to focus solely on
          growing vegetables and have now been in the business for over 20
          years.
        </p>
        <p>
          Their family farm consists of them and their four children, Justin,
          Jordan, Erica and Sabrina. They produce a wide variety of produce
          including peas, beans, tomatoes, cucumbers and onions. Produce is sold
          through farmers markets in Kincardine, Keady and St. Jacobs and also
          through a local CSA food box.
        </p>
      </div>
      <PageFooter></PageFooter>
    </div>
  );
}

export default About;
