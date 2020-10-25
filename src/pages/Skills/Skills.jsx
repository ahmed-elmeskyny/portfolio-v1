import React, { useRef, useEffect } from "react";
import "./Skills.scss";

//components 
import ProgressBar from "../../components/Progress-bar/progress-bar";

//animaton 
import { gsap } from "gsap";

const Skills = () => {
    let web = useRef(null);
    let programming = useRef(null);
    let design = useRef(null);

    useEffect(() => {


        gsap.from([web, programming, design], 0.8, {
            delay: 0.3,
            opacity: 0,
            ease: "power1.out",
            y: 64,
            stagger: {
                amount: 0.4
            }
        })

    }


        , [web, programming, design])
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="skills">
                <div className="web" ref={el => web = el}>
                    <h3>- web developement</h3>
                    <ProgressBar title="Html" width="90%"></ProgressBar>
                    <ProgressBar title="Css - Sass" width="90%"></ProgressBar>
                    <ProgressBar title="Javascript" width="80%"></ProgressBar>
                    <ProgressBar title="ReactJs" width="70%"></ProgressBar>
                    <ProgressBar title="Redux" width="45%"></ProgressBar>
                </div>
                <div className="programming" ref={el => programming = el}>
                    <h3>- porgramming & db</h3>
                    <ProgressBar title="C++" width="30%"></ProgressBar>
                    <ProgressBar title="Java" width="10%"></ProgressBar>
                    <ProgressBar title="firebase" width="30%"></ProgressBar>
                    <ProgressBar title="MYSQL" width="10%"></ProgressBar>

                </div>
                <div className="design" ref={el => design = el}>
                    <h3>- design</h3>
                    <ProgressBar title="photoshop" width="20%"></ProgressBar>
                    <ProgressBar title="Figma" width="40%"></ProgressBar>
                    <ProgressBar title="git/github" width="70%"></ProgressBar>
                </div>
            </div>
        </div>
    )
};

export default Skills;