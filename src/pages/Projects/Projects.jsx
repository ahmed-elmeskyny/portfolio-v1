import React, { useRef, useEffect } from "react";
import "./Projects.scss";

//component 
import Project from "../../components/Project/Project";

//assets
import para from "../../assets/projects/para2.JPG";
import todo from "../../assets/projects/todo.JPG";
import crown from "../../assets/projects/crown.JPG";
import portfolio from '../../assets/projects/portfolio.JPG';

//animation 
import { gsap } from "gsap"

const Projects = () => {

    return (
        <div className="projects-container">
            <h1>Work</h1>
            <p>here is some of my projects that I've done</p>
            <div className="projects">
                <Project img={para} h4="Parapharmacie" span="website for parapharmacie" ></Project>
                <Project img={todo} h4="ToDo app" span="app for time management"  ></Project>
                <Project img={crown} h4="Crown Shop" span="online clothes shop "  ></Project>
                <Project img={portfolio} h4="portfolio" span="React CV template" ></Project>
            </div>
        </div>
    )
};

export default Projects;