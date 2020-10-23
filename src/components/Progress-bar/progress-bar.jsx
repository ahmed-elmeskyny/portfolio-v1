import React, { useRef, useEffect } from "react";
import "./progress-bar.scss";

//animation
import { gsap } from "gsap"


const ProgressBar = ({ title, width }) => {
    let progress = useRef(null)

    useEffect(() => {
        gsap.from([progress], 1, {
            delay: 0.9,
            width: 0,
            ease: "power0.in"
        })
    }, [progress])

    return (
        <div className="progress-container">
            <div className="title">
                <span>{title}</span>
                <span>{width}</span>
            </div>
            <div className="progress-bar">
                <div className="bar" style={{ width: width }} ref={el => progress = el}>
                </div>
            </div>
        </div>
    )
};
export default ProgressBar;