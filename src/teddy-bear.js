import React from 'react';
import './teddy-bear.css'; // Make sure to create this CSS file
import teddyBearImage from './teddy.jpg';

function TeddyBear() {
  return (
    <div className="teddy-container">
       <img src={teddyBearImage} alt="Teddy Bear" className="teddy" />
    </div>
  );
}

export default TeddyBear;