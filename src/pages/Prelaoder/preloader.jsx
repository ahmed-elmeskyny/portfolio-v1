import React from "react";
import "./preloader.scss";

//react-icons
import { BiHappyBeaming } from "react-icons/bi";

//particles
import ParticleContainer from "../../assets/Particles/Particles-container"


const Preloader = () => {

    return (
        <div className="svg1" >
            <ParticleContainer style={{ position: "absolute", top: "0", right: "0", width: "100%", height: "100%" }}></ParticleContainer>
            <div>
                <div id="preloader">
                    <svg class="circle" viewbox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
                        <circle class="ripple" cx="80" cy="80" r="20"></circle>
                        <circle class="ripple ripple2" cx="80" cy="80" r="40"></circle>
                    </svg>
                </div>
                <p>Greetings!!</p>
                <p>Ahmed El Meskyny</p>
                <span>Web developer - software engineering student</span>
            </div>
        </div>

    )
};

export default Preloader;