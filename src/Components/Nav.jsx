import React from "react";
import logo from "../shared/logo.svg";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="container f-2">
        <img src={logo} alt="" />
        <ul>
          <li>
            <Link to="/">
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/Destination/moon">
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/Crew/victor-glover">
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="/Technology">
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
