import React from "react";
import "./page.scss";
import PageFooter from "../pageLayoutComponents/PageFooter";
import Header from "../pageLayoutComponents/Header";

import beans from "../resources/compressedPics/beans.jpg";
import onions from "../resources/compressedPics/onions.jpg";
import peas from "../resources/compressedPics/peas.jpg";
import squash from "../resources/compressedPics/squash.jpg";
import cow from "../resources/compressedPics/cow.jpg";
import storm from "../resources/compressedPics/storm.jpg";
import sunny from "../resources/compressedPics/sunny.jpg";
import sunset from "../resources/compressedPics/sunset.jpg";
import watering2 from "../resources/compressedPics/watering2.jpg";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }
  componentDidMount = () => {
    this.setState({
      images: [
        beans,
        onions,
        peas,
        squash,
        cow,
        storm,
        sunny,
        sunset,
        watering2,
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
        <div className="main-content">
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
