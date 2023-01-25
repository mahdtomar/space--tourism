import React from "react";
import logo from "../shared/logo.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Nav = () => {
  useEffect(() => {
    console.log("fires");
    let btns = document.querySelectorAll(".main-nav-btn"); // selecting the a tags in nav
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let target = e.target;
        let tag = target.tagName; // checking if the element selected is the a tag
        tag === "A" ? setActive(target) : setActive(target.parentElement); // making sure the target is the a not the span inside it
      });
    });
    function setActive(e) {
      btns.forEach((btn) => {
        btn.removeAttribute("active");
      });
      e.setAttribute("active", true);
    }
  }, []);
  return (
    <nav>
      <div className="container nav-container f-2">
        <img src={logo} alt="" />
        <hr />
        <div className="blur">
          <ul>
            <Link className="main-nav-btn" to="/">
              <span>00</span> Home
            </Link>
            <Link
              className="main-nav-btn"
              id="destination"
              to="/Destination/moon"
            >
              <span>01</span> Destination
            </Link>
            <Link className="main-nav-btn" to="/Crew/victor-glover">
              <span>02</span> Crew
            </Link>
            <Link className="main-nav-btn" to="/Technology/vehicle">
              <span>03</span> Technology
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
