import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../sass/crew.css";
const Crew = (props) => {
  useEffect(()=>{
    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot)=>{
      
    })
  },[])
  return (
    <section className="Crew f-2">
      <div className="f-2-v">
        <div className="person-info">
          <span className="job-title">{props.job}</span>
          <span className="banner">{props.name}</span>
          <p>{props.description}</p>
        </div>
        <div className="navigation">
          <Link to="/Crew/Victor-Glover">
            <span className="dot"></span>
          </Link>
          <Link to="/Crew/Mark-Shuttleworth">
            <span className="dot"></span>
          </Link>
          <Link to="/Crew/Anousheh-Ansari">
            <span className="dot"></span>
          </Link>
          <Link to="/Crew/Douglas-Hurley">
            <span className="dot"></span>
          </Link>
        </div>
      </div>
      <div className="image">
        <img src={props.image} alt="" />
      </div>
    </section>
  );
};

export default Crew;
