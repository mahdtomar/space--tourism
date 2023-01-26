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
import archive from "./data.json";
import vehicleImage from "./assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportImage from "./assets/technology/image-spaceport-portrait.jpg";
import capsuletImage from "./assets/technology/image-space-capsule-portrait.jpg";
const data = archive;
const Moon = data.destinations[0];
const Mars = data.destinations[1];
const Europe = data.destinations[2];
const Titan = data.destinations[3];
// console.log(Moon, Mars, Titan, Europe);
function App() {
  return (
    <div className="App container">
      <Nav />
      <main>
        <Routes>
          <Route path="/space--tourism" element={<Home />} />
          {/* Destinatin routes */}
          <Route
            path="/Destination/moon"
            element={
              <Destination
                planet={<Planet image={moon} />}
                planetInfo={
                  <PlanetInfo
                    planetName="moon"
                    planetDescriptoin={Moon.description}
                    distance={Moon.distance}
                    time={Moon.travel}
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
                    planetDescriptoin={Titan.description}
                    distance={Titan.distance}
                    time={Titan.travel}
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
                    planetDescriptoin={Mars.description}
                    distance={Mars.distance}
                    time={Mars.travel}
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
                    planetDescriptoin={Europe.description}
                    distance={Europe.distance}
                    time={Europe.travel}
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
                intro="The terminology..."
                name="Launch vehicle"
                description="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                it's quite an awe-inspiring sight on the launch pad!"
                image={vehicleImage}
              />
            }
          />
          <Route
            path="Technology/Spaceport"
            element={
              <Technology
                intro="The terminology..."
                name="Spaceport"
                description="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                by analogy to the seaport for ships or airport for aircraft. Based in the 
                famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                of the Earth’s rotation for launch."
                image={spaceportImage}
              />
            }
          />
          <Route
            path="Technology/capsule"
            element={
              <Technology
                intro="The terminology..."
                name="Space capsulet"
                description="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                you'll spend your time during the flight. It includes a space gym, cinema, 
                and plenty of other activities to keep you entertained."
                image={capsuletImage}
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
