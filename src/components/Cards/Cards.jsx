import React from "react";
import Card from "../Card/Card";

import img1 from "../../assets/220px-Cube-War.jpg";
import img2 from "../../assets/220px-Curtain_Call_cover.jpg";
import img3 from "../../assets/220px-Curtis_50_Cent_album.jpg";
import "./cards-style.css";

const Cards = (props) => {
  return (
    <div className="container ">
      <div className="row mx-auto">
        <div className="col-sm col-md-offset-3">
          <Card imgsrc={img1} title={"test"} />
        </div>
        <div className="col-sm col-md-offset-3">
          <Card imgsrc={img2} title={"test"} />
        </div>
        <div className="col-sm col-md-offset-3">
          <Card imgsrc={img3} title={"test"} />
        </div>
      </div>
      <div className="row mx-auto">
        <div className="col-sm col-md-offset-3">
          <Card imgsrc={img1} title={"test"} />
        </div>
        <div className="col-sm col-md-offset-3">
          <Card imgsrc={img2} title={"test"} />
        </div>
        <div className="col-sm col-md-offset-3">
          <Card imgsrc={img3} title={"test"} />
        </div>
      </div>
      <div className="row mx-auto">
        <div className="col-sm col-md-offset-3">
          <Card imgsrc={img1} title={"test"} />
        </div>
        <div className="col-sm col-md-offset-3">
          <Card imgsrc={img2} title={"test"} />
        </div>
        <div className="col-sm col-md-offset-3">
          <Card imgsrc={img3} title={"test"} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
