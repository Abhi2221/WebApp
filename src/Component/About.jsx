import React from 'react';
import Same from './Same';
import covid from '../image/covid.jpg';

const About = () => {
  return (
    <>
      <Same 
        name="Welcome to About Page"
        imgsrc={covid}
        visit="/contact"
        btname="Contact Us" />
    </>
  );
}

export default About;
