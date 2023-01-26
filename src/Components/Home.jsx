import React from "react";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../sass/home.css";
// import Nav from "./Nav";

const Home = () => {
  // useEffect(() => {
  //   let exploreBtn = document.getElementById('exploreBtn')
  //   function goto(){
    
  //   }
  // }, []);
  return (
    <section className="home f-2">
      <div>
        <span className="intro">So, you want to travel to</span>
        <span className="banner">Space</span>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="button">
          <Link id='exploreBtn'to="/Destination/moon">
            <button>
            Explore
            </button>
          </Link>
      </div>
    </section>
  );
};

export default Home;
