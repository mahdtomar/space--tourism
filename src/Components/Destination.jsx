import React from "react";
// import PlanetInfo from "./PlanetInfo";
import { Link } from "react-router-dom";
const Destination = (props) => {
  return (
    <section className="destination f-2">
      <div className="info-container">
        <nav>
          <ul>
            <Link to="/Destination/moon">moon</Link>
            <Link to="/Destination/titan">titan</Link>
            <Link to="/Destination/europa">europa</Link>
            <Link to="/Destination/mars">mars</Link>
          </ul>
        </nav>
        {props.planetInfo}
      </div>
      {props.planet}
    </section>
  );
};

export default Destination;
