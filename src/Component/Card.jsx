import React from "react";
import { NavLink } from "react-router-dom";
import one from "../image/one.jpg"
import "../index.css";
const Card = (props) => {
  return (
    <>
      <div className=" col-md-4 col-10 mx-auto">
        <div className="card">
          <img className="card-img-top " src= {props.imgsrc}alt="{props.imgsrc}" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              {props.text}
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
