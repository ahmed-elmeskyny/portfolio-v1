import React, { useEffect, useRef } from "react";
import "./About.scss";

//components
import CusttomButton from "../../components/CusttomButton/Custtom-button";
import TimeLine from "../../components/Time-line/Time-line";

//assets
import ahmed from "../../assets/Ahmed's Resume.pdf";

//react-router
import { NavLink } from "react-router-dom";

//react-icons
import { BsCaretDownFill } from "react-icons/bs";

//animation
import { gsap, TimelineMax } from "gsap";

const About = () => {
  let text = useRef(null);
  let picture = useRef(null);
  let scroll = useRef(null);
  let educ = useRef(null);
  let exp = useRef(null);

  useEffect(() => {
    gsap.from([text, picture, scroll, educ, exp], 0.8, {
      delay: 0.1,
      opacity: 0,
      ease: "power1.out",
      y: -64,
      stagger: {
        amount: 0.4,
      },
    });
    let hello = new TimelineMax({ repeat: -1, yoyo: true });
    hello.fromTo([scroll], 0.5, { y: 10 }, { ease: "power0.easeNone", y: -10 });
  }, [text, picture, scroll]);

  return (
    <div className="about-container">
      <div className="about">
        <div className="about-text" ref={(el) => (text = el)}>
          <h1>About me</h1>
          <p>
            Hi , i'am ahmed 👋 a freelance full stack web developer based in
            morocco and a Data Science and Cloud Computing engineering student
            at ENSAO . Powered by Figma, VS Code and coffee i enjoy building
            everything from small business sites to rich interactive web apps .
            Here some of my{" "}
            <NavLink
              style={{ textDecoration: "none", color: "#e1ad01" }}
              exact
              to="/projects"
            >
              Work
            </NavLink>{" "}
            , you can get in touch with me{" "}
            <NavLink
              style={{ textDecoration: "none", color: "#e1ad01" }}
              exact
              to="/contact"
            >
              Here
            </NavLink>
          </p>
          <CusttomButton
            href={ahmed}
            className="button-container resume"
            isLink
            isDownload
          >
            {" "}
            Download CV{" "}
          </CusttomButton>
        </div>
        <div className="picture-container" ref={(el) => (picture = el)}>
          <div className="picture"></div>
        </div>
      </div>
      <div className="scroll" ref={(el) => (scroll = el)}>
        <BsCaretDownFill></BsCaretDownFill>
      </div>
      <div className="education" ref={(el) => (educ = el)}>
        <h2>#Education</h2>
        <TimeLine education></TimeLine>
      </div>
      <div className="experience" ref={(el) => (exp = el)}>
        <h2>#Experience</h2>
        <TimeLine></TimeLine>
      </div>
    </div>
  );
};

export default About;
