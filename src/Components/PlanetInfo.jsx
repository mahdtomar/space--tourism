import React from "react";

const PlanetInfo = (props) => {
  return (
    <div className="planet-info">
      <span className="banner">{props.name}</span>
      <p>this is p</p>
      <hr />
      <div className="f-2">
        <div className="distance">{props.distance} Kilo Meters</div>
        <div className="time">{props.time} Months</div>
      </div>
    </div>
  );
};

export default PlanetInfo;
