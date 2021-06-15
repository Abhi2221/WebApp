import React from 'react';
import "../index.css";
import one from "../image/one.jpg";
import Same from './Same';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <>
     <Same 
        name="Grow with us"
        imgsrc={one}
        visit="/Service"
        btname="Get Started" />
    </>
  );
}

export default Home;
