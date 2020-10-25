import React, { useEffect, useRef } from "react";
import "./Project.scss";
import { withRouter } from "react-router-dom"

//animation 
import { gsap } from "gsap"


const Project = ({ match, history, img, title, subtitle, projectId }) => {

    let proj = useRef(null);

    useEffect(() => {

        gsap.from([proj], 0.8, {
            delay: 0.3,
            opacity: 0,
            ease: "power1.out",
            y: -64,
            stagger: {
                amount: 0.4
            }
        });

    }, [proj])

    return (
        <div className="project-container" onClick={() => history.push(`${match.url}/${projectId}`)} ref={el => proj = el}>
            <div className="project-img">
                <img src={img} width="100%" height="100%"></img>
            </div>
            <div className="titles">
                <h4>{title}</h4>
                <span>{subtitle}</span>
            </div>
        </div>
    )
};
export default withRouter(Project);