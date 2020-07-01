import React, { Component } from "react";
import Card from "./Card";

import img1 from "../assets/Capital_Punishment_1998.jpg";
import img2 from "../assets/LaurynHillTheMiseducationofLaurynHillalbumcover.jpg";
import img3 from "../assets/MosDef&TalibKweliBlackStar.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc={img1} title={"test"} />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img2} title={"test"} />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img3} title={"test"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
