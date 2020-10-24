import React from 'react';
import './App.scss';

//components
import Header from "./components/Header/Header";
import Menu from './components/Menu/Menu';
import Social from "./components/Social/Social";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import MobileMenu from "./pages/mobile-menu/mobile-menu"

//React Router 
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";

//particle
import ParticleContainer from "./assets/Particles/Particles-container";




function App() {
  return (
    <Router>
      <div className="App">
        <ParticleContainer style={{ position: "absolute", top: "0", right: "0", width: "100%", height: "100%" }}></ParticleContainer>
        <MobileMenu></MobileMenu>
        <Header></Header>
        <div className="main"  >
          <Social></Social>
          <div className="container"  >
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/about">
                <About></About>
              </Route>
              <Route exact path="/skills">
                <Skills></Skills>
              </Route>
              <Route exact path="/projects">
                <Projects></Projects>
              </Route>
              <Route exact path="/contact">
                <Contact></Contact>
              </Route>
            </Switch>
          </div>
        </div>
        <Menu></Menu>
      </div>
    </Router>
  );
}

export default App;
