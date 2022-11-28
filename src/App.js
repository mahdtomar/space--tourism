// import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom'
import './sass/main.css';
import Nav from './Components/Nav';
import './sass/nav.css'
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route/>
          <Route/>
        </Routes>
        {/* < */}
      </main>
    </div>
  );
}

export default App;
