import React from "react";
import "./Page.css";
import PageFooter from "../pageLayoutComponents/PageFooter";
import Header from "../pageLayoutComponents/Header";

import farmfield from "../resources/gallery/farmfield.jpg";
import farmfield2 from "../resources/gallery/farmfield2.jpg";
import farmfield3 from "../resources/gallery/farmfield3.jpg";
import farmfield4 from "../resources/gallery/farmfield4.jpg";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }
  componentDidMount = () => {
    console.log("testing...");
    console.log(farmfield);
    this.setState({
      images: [
        farmfield,
        farmfield2,
        farmfield3,
        farmfield4,
        farmfield,
        farmfield2,
        farmfield3,
        farmfield4,
      ],
    });
  };

  renderImages = () => {
    let images = [];

    this.state.images.forEach((img) => {
      images.push(
        <div class="gallery">
          <a target="_blank" href={img}>
            <img src={img} alt="Farm" />
          </a>
        </div>
      );
    });

    return images;
  };

  render() {
    return (
      <div>
        <Header headerName="page-header"></Header>
        <div className="main-content column-flex">
          <h1 className="main-content-header">Gallery</h1>
          <div id="gallery" className="main-content-body">
            {this.renderImages()}
          </div>
        </div>
        <PageFooter></PageFooter>
      </div>
    );
  }
}

export default Gallery;
