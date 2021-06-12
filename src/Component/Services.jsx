import React from "react";
import "../index.css";
import Card from "./Card";
import Sdata from "./Sdata";
const Services = () => {
  
  return (
    <>
      <div className="service">
        {/* <h1 className="text-center">heyy Service</h1> */}
      
      <div className="container-fluid">
        <div className=" row ">
          <div className=" ri col-8 ">
            <div className="row">
              {
                Sdata.map((val,ind)=>{
                 return(
                   <Card 
                     key={ind}
                     imgsrc={val.imgsrc}
                     title={val.title}
                     text={val.text}
                   />
                 )
                })
              }
              </div>
            </div>
          </div>
          </div> </div>
    </>
  );
};

export default Services;
