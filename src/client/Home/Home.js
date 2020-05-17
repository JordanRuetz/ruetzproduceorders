import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import HeaderButton from "../HeaderButton/HeaderButton";
import PageFooter from "../Pages/PageFooter";

function Home() {
  return (
    <div>
      <div id="app">
        <header id="app-header">
          <div id="home-button">
            <h1>
              <Link to="/">Ruetz's Farm Fresh Produce</Link>
            </h1>
          </div>
          <div className="spacer"></div>
          <div id="right-buttons">
            <HeaderButton name="About Us" target="/about"></HeaderButton>
            <HeaderButton
              name="Where to Find Us"
              target="/findus"
            ></HeaderButton>
            <HeaderButton name="CSA" target="/csa"></HeaderButton>
            <HeaderButton name="Gallery" target="/gallery"></HeaderButton>
            <HeaderButton name="Contact" target="/contact"></HeaderButton>
          </div>
        </header>
        <div id="main">
          <h1>Ruetz's Farm Fresh Produce</h1>
          <h3>A Local Family Farm</h3>
        </div>
      </div>
      <div className="content-pane">
        <div className="content-container">
          <h1>About Us</h1>
          <p>
            The Ruetz's is a local family farm located just outside Teeswater,
            Ontario and has been producing high quality, fresh produce for over
            20 years.{" "}
            <span className="link">
              <Link to="/about">Read More...</Link>
            </span>
          </p>
        </div>
      </div>
      <div id="background1" className="column-flex">
        <div className="parallax-container column-flex">
          <h1 className="parallax-link">
            <Link to="/findus">Find Us</Link>
          </h1>
          <h3>Farm and Market Locations</h3>
        </div>
      </div>
      <div className="content-pane">
        <div className="content-container">
          <h1>CSA</h1>
          <p>
            Get an assortment of fresh, in-season produce delivered to your
            house or an area near you weekly through our CSA.{" "}
          </p>
          <h3>
            <Link to="/csa">More Information</Link>
          </h3>
        </div>
      </div>
      <div id="background2" className="column-flex">
        <div className="parallax-container column-flex">
          <h1>
            <Link to="/gallery">Gallery</Link>
          </h1>
        </div>
      </div>
      <PageFooter></PageFooter>
    </div>
  );
}

export default Home;
