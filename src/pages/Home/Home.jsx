import React, { useRef, useEffect } from "react";
import "./Home.scss";

//react-icons
import { GiBeard } from "react-icons/gi"

//gsap 
import { gsap } from "gsap";



const Home = () => {
    let title = useRef(null);
    let svg = useRef(null)

    useEffect(() => {
        gsap.from([title, svg], 0.8, {
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
    )
};


export default Home;