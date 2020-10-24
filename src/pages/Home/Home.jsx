import React, { useRef, useEffect } from "react";
import "./Home.scss";

//react-icons
import { GiBeard } from "react-icons/gi";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

//gsap 
import { gsap } from "gsap";




const Home = () => {
    let title = useRef(null);
    let svg = useRef(null);
    let social = useRef(null);

    useEffect(() => {
        gsap.from([title, svg, social], 0.8, {
            delay: 0.4,
            opacity: 0,
            ease: "power1.out",
            y: -64,
            stagger: {
                amount: 0.4
            }
        })
    }, [title, svg])

    return (
        <div style={{
            display: "flex", flexDirection: "column"
        }}>
            <div className="home-container">
                <div className="title" ref={el => title = el}>
                    <h1>Hi , I'm <span>Ahmed El Meskyny</span> , a web developer and a sowftware engineering student </h1>
                    <p>Front end and Back end developer</p>
                </div>
                <div className="svg-container" ref={el => svg = el}>
                    <div className="svg">
                        <GiBeard></GiBeard>
                    </div>
                </div>
            </div>
            <div className="social-mobile" ref={el => social = el}>
                <div > <AiFillGithub></AiFillGithub></div>
                <div ><GrLinkedinOption></GrLinkedinOption></div>
                <div ><FaFacebookF></FaFacebookF></div>
                <div ><AiOutlineInstagram></AiOutlineInstagram></div>
            </div>
        </div >
    )
};


export default Home;