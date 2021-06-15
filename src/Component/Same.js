import React from 'react';
import "../index.css";
import one from "../image/one.jpg";
import { NavLink } from 'react-router-dom';
const Same = (props) => {
  return (
    <section id="header" className="d-flex ">
    <div className= "container-fluid">
      <div className =" row ">
      <div className= "col-10 mx-auto mt-4 ">
      <div className ="row">
      <div className = " col-md-6  pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
      <h1> {props.name} <strong className  = "brand_name"> OXYMO</strong></h1>
      <h5 className =" my-3 "> This is Our WebApp </h5>
      
      <div className = "mt-3" >
      <NavLink to={props.visit} href= "" className = "btn-get-started">{props.btname}</NavLink>
      </div>
      </div>
      <div className= "col-lg-6 order-1 order-lg-2 header-img" >
        <img src={props.imgsrc} className="img-fluid animated mt-lg-5 " alt="Home"/>
      </div>
      </div>
      </div>
      </div>
    </div>
  </section>

  );
}

export default Same;