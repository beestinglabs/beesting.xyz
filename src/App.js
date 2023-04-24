import { Routes, Route, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import './App.css';

import NavibarDesktop from './NavibarDesktop.js';
import NavibarMobile from './NavibarMobile.js';
import HomeDesktop from "./pages/HomeDesktop.js";
import HomeMobile from "./pages/HomeMobile.js";
import ProjectsDesktop from "./pages/ProjectsDesktop.js";
import ProjectsMobile from "./pages/ProjectsMobile.js";
import ServicesDesktop from "./pages/ServicesDesktop.js";
import ServicesMobile from "./pages/ServicesMobile.js";
import ContactDesktop from "./pages/ContactDesktop.js";
import ContactMobile from "./pages/ContactMobile.js";
import TeamDesktop from "./pages/TeamDesktop.js";
import TeamMobile from './pages/TeamMoblie.js';
import Footer from './Footer';

function App() {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({query: "(max-width: 786px)"});
  return (
    <div className="App">
      {isMobile ? <NavibarMobile/> : <NavibarDesktop/>}
      <Routes>
        <Route path="/" element={isMobile ? <HomeMobile/> : <HomeDesktop/>}/>
        <Route path="/projects" element={isMobile ? <ProjectsMobile/> : <ProjectsDesktop/>}/>
        <Route path="/services" element={isMobile ? <ServicesMobile/> : <ServicesDesktop/>}/>
        <Route path="/contact" element={isMobile ? <ContactMobile/> : <ContactDesktop/>}/>
        <Route path="/team" element={isMobile ? <TeamMobile/> : <TeamDesktop/>}/>
      </Routes>
      {pathname !== '/' && <Footer />}
    </div>
  );
}

export default App;
