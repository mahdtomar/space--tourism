import React from "react";
import { Link } from "react-router-dom";
import "../sass/tech.css";
const Technology = (props) => {
  return (
    <section className="technology f-2">
      <div className="info-container f-2">
        <nav className="f-2-v link-container">
          <Link className="link active" to="/Technology/vehicle">
            1
          </Link>
          <Link className="link" to="/Technology/capsule">
            2
          </Link>
          <Link className="link" to="/Technology/spaceport">
            3
          </Link>
        </nav>
        <div className="info">
          <span className="operation-name">{props.intro}</span>
          <span className="banner">{props.name}</span>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="imageContainer">
        <img src={props.image} alt="" />
      </div>
    </section>
  );
};

export default Technology;
