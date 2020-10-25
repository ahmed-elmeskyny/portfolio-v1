import React from "react";
import "./Projects.scss";

//component 
import Project from "../../components/Project/Project";


//redux 
import { connect } from "react-redux";

const Projects = ({ projects }) => {

    return (
        <div className="projects-container">
            <h1>Work</h1>
            <p>here is some of my projects that I've done</p>
            <div className="projects">
                {projects.map((project) => <Project {...project}></Project>)}
            </div>
        </div>
    )
};

const state = (state) => ({
    projects: state.projects.projects,
})
export default connect(state)(Projects);