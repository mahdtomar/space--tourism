import React from "react";
import { useEffect } from "react";
// import PlanetInfo from "./PlanetInfo";
import { Link } from "react-router-dom";
import "../sass/destination.css";
const Destination = (props) => {
  useEffect(() => {
    let planetNavBtns = document.querySelectorAll(".planet-btn");

    planetNavBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let currentActive = e.target;
        setActive(currentActive);
      });
    });
    function setActive(target) {
      planetNavBtns.forEach((btn) => {
        btn.removeAttribute("active");
      });
      target.setAttribute("active", true);
    }
  }, []);
  return (
    <section className="destination f-2">
      <div className="info-container">
        <nav>
          <ul>
            <Link className="planet-btn" active="true" to="/space--tourism/Destination/moon">
              moon
            </Link>
            <Link className="planet-btn" to="/space--tourism/Destination/titan">
              titan
            </Link>
            <Link className="planet-btn" to="/space--tourism/Destination/europa">
              europa
            </Link>
            <Link className="planet-btn" to="/space--tourism/Destination/mars">
              mars
            </Link>
          </ul>
        </nav>
        {props.planetInfo}
      </div>
      {props.planet}
    </section>
  );
};

export default Destination;
