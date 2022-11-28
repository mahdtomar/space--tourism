import React from "react";

const Planet = (props) => {
  return (
    <div className="planet">
      <p><span>01</span> Pick Your Destination</p>
      <img src={props.image} alt="" />
    </div>
  );
};

export default Planet;
