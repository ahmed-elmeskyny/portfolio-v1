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
import Preloader from './pages/Prelaoder/preloader';

//redux
import { connect } from "react-redux";
import { isActive } from "./redux/preloader-reducer/preloader-action";


class App extends React.Component {

  componentDidMount() {
    this.fakeRequest().then(() => {
      const loader = document.querySelector(".preloader");
      console.log(loader)
      if (loader) {
        loader.remove();
        this.props.toggleActive();
      }
    })
  }




  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  };

  render() {
    const { isActive } = this.props;
    if (isActive) {
      return null;
    }
    return (
      <Router>
        <ParticleContainer style={{ position: "absolute", top: "0", right: "0", width: "100%", height: "100%" }}></ParticleContainer>
        <div className="App">
          <MobileMenu></MobileMenu>
          <ParticleContainer style={{ position: "absolute", top: "0", right: "0", width: "100%", height: "100%" }}></ParticleContainer>

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


};

const state = (state) => ({
  isActive: state.active.active,
})

const dispatch = (dispatch) => ({
  toggleActive: () => dispatch(isActive(),)
})
export default connect(state, dispatch)(App);
