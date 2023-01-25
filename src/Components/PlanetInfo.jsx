import React from "react";

const PlanetInfo = (props) => {
  return (
    <div className="planet-info">
      <span className="banner">{props.name}</span>
      <p>{props.planetDescriptoin}</p>
      <hr />
      <div className="planet-calc f-2">
        <div className="distance f-2-v"><p>avg. distance</p><p>{props.distance}</p></div>
        <div className="time f-2-v"><p>est. travel time</p><p>{props.time}</p></div>
      </div>
    </div>
  );
};

export default PlanetInfo;
