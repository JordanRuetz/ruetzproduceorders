import React from "react";
import "./App.css";
import Home from "./Home/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Csa from "./Pages/Csa";
import FindUs from "./Pages/FindUs";
import Gallery from "./Pages/Gallery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/findus">
          <FindUs></FindUs>
        </Route>
        <Route path="/csa">
          <Csa></Csa>
        </Route>
        <Route path="/gallery">
          <Gallery></Gallery>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
