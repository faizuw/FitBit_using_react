import React, { Component } from "react";
import logo from "./logo.svg";
import classes from "./App.module.css";

import ProductPreview from "./ProductPreview/ProductPreview";
import ProductDetails from "./ProductDetails/ProductDetails";
import TopBar from "./TopBar/TopBar";
import ProductData from "./Utils/ProductData";

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImage: "http://imgur.com/xSIK4M8.png",
    currentPreviewImagePos: 0,
    showHeartBeatSection: false,
  };
  onColorOptionClick = (pos) => {
    this.setState({ currentPreviewImagePos: pos });
  };
  onFeatureItemClick = (pos) => {
    let updatedState = false;
    if (pos === 1) {
      updatedState = true;
    }
    this.setState({ showHeartBeatSection: updatedState });
  };
  render() {
    return (
      <div className="App">
        <TopBar />

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview
              currentPreviewImage={
                this.state.productData.colorOptions[
                  this.state.currentPreviewImagePos
                ].imageUrl
              }
              showHeartBeatSection={this.state.showHeartBeatSection}
            ></ProductPreview>
          </div>
          <div className={classes.ProductData}>
            <ProductDetails
              data={this.state.productData}
              onColorOptionClick={this.onColorOptionClick}
              currentPreviewImagePos={this.state.currentPreviewImagePos}
              onFeatureItemClick={this.onFeatureItemClick}
              showHeartBeatSection={this.state.showHeartBeatSection}
            ></ProductDetails>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
