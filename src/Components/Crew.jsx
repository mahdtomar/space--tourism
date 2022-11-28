import React from "react";
import { Link } from "react-router-dom";

const Crew = (props) => {
  return (
    <section className="Crew f-2">
      <div className="f-2-v">
        <div className="person-info">
          <span className="job-title">{props.job}job</span>
          <span className="banner">{props.name}name</span>
          <p>{props.description}desctiption</p>
        </div>
        <div className="navigation">
            <Link to='/Crew/Victor-Glover'><span>victor</span></Link>
            <Link to='/Crew/Mark-Shuttleworth'><span>Mark</span></Link>
            <Link to='/Crew/Anousheh-Ansari'><span>Anousheh</span></Link>
            <Link to='/Crew/Douglas-Hurley'><span>Douglas</span></Link>
        </div>
      </div>
      <div className="image">
        <img src={props.image} alt="" />
      </div>
    </section>
  );
};

export default Crew;
