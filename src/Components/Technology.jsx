import React from "react";
import { Link } from "react-router-dom";

const Technology = (props) => {
  return (
    <section className="technology f-2">
      <div className="info-container f-2">
        <nav>
        <Link to='Technology/vehicle'>1</Link>
        <Link to='Technology/capsule'>2</Link>
        <Link to='Technology/spaceport'>3</Link>
        </nav>
        <div className="info">
          <span className="operation-name">{props.intro}</span>
          <span className="banner">{props.name}</span>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="imageContainer"></div>
    </section>
  );
};

export default Technology;
