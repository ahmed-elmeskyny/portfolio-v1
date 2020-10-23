import React, { useEffect, useRef } from "react";
import "./About.scss";

//components
import CusttomButton from "../../components/CusttomButton/Custtom-button"
import TimeLine from "../../components/Time-line/Time-line"


//assets
import Ahmed from "../../assets/pdp3.jpeg";

//react-icons 
import { BsCaretDownFill } from "react-icons/bs"

//animation
import { gsap, TimelineMax } from "gsap";




const About = () => {

    let text = useRef(null);
    let picture = useRef(null);
    let scroll = useRef(null);

    useEffect(() => {
        gsap.from([text, picture], 0.8, {
            delay: 0.1,
            opacity: 0,
            ease: "power1.out",
            y: 64,
            stagger: {
                amount: 0.4
            }
        });
        let hello = new TimelineMax({ repeat: -1, yoyo: true })
        hello.fromTo([scroll], 0.5, { y: 10 }, { ease: "power0.easeNone", y: -10 })
    }, [text, picture, scroll])

    return (
        <div className="about-container" >
            <div className="about">
                <div className="about-text" ref={el => text = el}>
                    <h1>About me</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dolores animi pariatur dolorem maiores eveniet voluptatum sequi ratione magnam ab cumque, aut, quibusdam placeat maxime quo alias architecto at harum.</p>
                    <CusttomButton isLink pdf={Ahmed}> Resume </CusttomButton>
                </div>
                <div className="picture-container" ref={el => picture = el}>
                    <div className="picture"></div>
                </div>
            </div>
            <div className='scroll' ref={el => scroll = el}>
                <BsCaretDownFill></BsCaretDownFill>
            </div>
            <div className="education">
                <h2>#Education</h2>
                <TimeLine education></TimeLine>
            </div>
            <div className="experience">
                <h2>#Experience</h2>
                <TimeLine ></TimeLine>
            </div>
        </div>
    )
};

export default About;