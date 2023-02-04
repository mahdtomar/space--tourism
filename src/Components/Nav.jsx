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
    let menu = document.getElementById("menu");
    let list = document.querySelector(".blur");
    menu.addEventListener("click", () => {
      list.hasAttribute("visible")
        ? list.removeAttribute("visible")
        : list.setAttribute("visible", true);
    });
  }, []);
  function changeBG(bg) {
    console.log(document.body.classList);
    document.body.removeAttribute("class");
    document.body.classList.add(bg);
  }
  return (
    <nav>
      <div className="container nav-container f-2">
        <img src={logo} alt="" />
        <hr />
        <div className="blur">
          <ul>
            <Link
              className="main-nav-btn"
              onClick={() => {
                changeBG("main");
              }}
              to="/space--tourism"
            >
              <span>00</span> Home
            </Link>
            <Link
              className="main-nav-btn"
              id="destination"
              to="/space--tourism/Destination/moon"
              onClick={() => {
                changeBG("moon");
              }}
            >
              <span>01</span> Destination
            </Link>
            <Link
              className="main-nav-btn"
              onClick={() => {
                changeBG("crew");
              }}
              to="/space--tourism/Crew/victor-glover"
            >
              <span>02</span> Crew
            </Link>
            <Link
              className="main-nav-btn"
              onClick={() => {
                changeBG("tech");
              }}
              to="/space--tourism/Technology/vehicle"
            >
              <span>03</span> Technology
            </Link>
          </ul>
        </div>
        <div className="menu" id="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
