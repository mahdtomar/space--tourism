import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../sass/tech.css";
const Technology = (props) => {
  useEffect(() => {
    let links = document.querySelectorAll(".link");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        let target = e.target;
        setActive(target);
      });
    });

    function setActive(target) {
      links.forEach((link) => {
        link.removeAttribute("active");
      });
      target.setAttribute("active", true);
    }

  }, []);
  return (
    <section className="technology f-2">
      <div className="info-container f-2">
        <nav className="f-2-v link-container">
          <Link className="link" active="ture" to="/space--tourism/Technology/vehicle">
            1
          </Link>
          <Link className="link" to="/space--tourism/Technology/capsule">
            2
          </Link>
          <Link className="link" to="/space--tourism/Technology/spaceport">
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
