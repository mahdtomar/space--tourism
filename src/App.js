// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./sass/main.css";
import Nav from "./Components/Nav";
import "./sass/nav.css";
import Home from "./Components/Home";
import Destination from "./Components/Destination";
import Planet from "./Components/Planet";
import moon from "./assets/destination/image-moon.png";
import titan from "./assets/destination/image-titan.png";
import mars from "./assets/destination/image-mars.png";
import PlanetInfo from "./Components/PlanetInfo";
import europa from "./assets/destination/image-europa.png";
import Crew from "./Components/Crew";
import victor from "./assets/crew/image-victor-glover.png";
import mark from "./assets/crew/image-mark-shuttleworth.png";
import douglas from "./assets/crew/image-douglas-hurley.png";
import anousheh from "./assets/crew/image-anousheh-ansari.png";
import Technology from "./Components/Technology";
function App() {
  return (
    <div className="App container">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Destination" element={<Destination />} />  */}
          {/* Destinatin routes */}
          <Route
            path="/Destination/moon"
            element={
              <Destination
                planet={<Planet image={moon} />}
                planetInfo={
                  <PlanetInfo
                    planetName="moon"
                    planetDescriptoin="this is the moon's description"
                    distance="100"
                    time="1.3"
                    name="moon"
                  />
                }
              />
            }
          />

          <Route
            path="/Destination/titan"
            element={
              <Destination
                planet={<Planet image={titan} />}
                planetInfo={
                  <PlanetInfo
                    planetName="titan"
                    planetDescriptoin="this is the titan's description"
                    distance="560"
                    time="12"
                    name="titan"
                  />
                }
              />
            }
          />

          <Route
            path="/Destination/mars"
            element={
              <Destination
                planet={<Planet image={mars} />}
                planetInfo={
                  <PlanetInfo
                    planetName="mars"
                    planetDescriptoin="this is the mars's description"
                    distance="50"
                    time="32"
                    name="mars"
                  />
                }
              />
            }
          />

          <Route
            path="/Destination/europa"
            element={
              <Destination
                planet={<Planet image={europa} />}
                planetInfo={
                  <PlanetInfo
                    planetName="europa"
                    planetDescriptoin="this is the europa's description"
                    distance="230"
                    time="962"
                    name="europa"
                  />
                }
              />
            }
          />
          {/* crew routes */}
          <Route
            path="Crew/Victor-Glover"
            element={
              <Crew
                job="Pilot"
                name="Victor Glover"
                description="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a  station systems flight engineer."
                image={victor}
              />
            }
          />

          <Route
            path="Crew/Douglas-Hurley"
            element={
              <Crew
                job="Commander"
                name="Douglas Hurley"
                description="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
                image={douglas}
              />
            }
          />

          <Route
            path="Crew/Anousheh-Ansari"
            element={
              <Crew
                job="Flight Engineer"
                name="Anousheh Ansari"
                description="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
                image={anousheh}
              />
            }
          />

          <Route
            path="Crew/Mark-Shuttleworth"
            element={
              <Crew
                job="Mission Specialist"
                name="Mark Shuttleworth"
                description="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
                image={mark}
              />
            }
          />
          {/* technology routes */}
          <Route
            path="Technology/vehicle"
            element={
              <Technology
                intro="this is intro"
                name="this is the name"
                description="this is descriptoin"
              />
            }
          />
        </Routes>
        {/* < */}
      </main>
    </div>
  );
}

export default App;
