import React from "react";
import classes from "./ProductPreview.module.css";
const ProductPreview = (props) => {
  const currentHour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();
  const currentMinutes =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();
  return (
    <div className={classes.ProductPreview}>
      <img src={props.currentPreviewImage} alt="Watch Img" />
      {props.showHeartBeatSection ? (
        <div className={classes.HeartSection}>
          <i className="fa-solid fa-heart-pulse"></i>
          <p>80</p>
        </div>
      ) : (
        <div className={classes.TimeSection}>
          <p>{`${currentHour}:${currentMinutes}`}</p>
        </div>
      )}
    </div>
  );
};
export default ProductPreview;
