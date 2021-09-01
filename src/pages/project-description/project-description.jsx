import React, { useEffect, useRef } from "react";
import "./project-description.scss";

//components
import CusttomButton from "../../components/CusttomButton/Custtom-button";

//react-icons
import { AiOutlineArrowLeft } from "react-icons/ai";

//react-router
import { withRouter } from "react-router-dom";

//animation
import { gsap } from "gsap";

//redux
import { filtredProjects } from "../../utils/projects";
import { connect } from "react-redux";

const ProjectDescription = ({ history, project }) => {
  let image = useRef(null);
  let text = useRef(null);
  let icon = useRef(null);

  useEffect(() => {
    gsap.from([text, image, icon], 0.8, {
      delay: 0.1,
      opacity: 0,
      ease: "power1.out",
      y: -64,
      stagger: {
        amount: 0.2,
      },
    });
  }, [image, text]);

  return (
    <div className="el-container">
      <div ref={(el) => (icon = el)}>
        <AiOutlineArrowLeft
          style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={() => history.push("/projects")}
        ></AiOutlineArrowLeft>
      </div>
      <div className="project-description-container" ref={(el) => (image = el)}>
        <div className="project-image">
          <img src={project.img} height="100%" width="100%"></img>
        </div>
        <div className="project-description" ref={(el) => (text = el)}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <h3>Tools</h3>
          <p> {project.tools}</p>
          <div className="button">
            <CusttomButton
              isLink
              href={project.href}
              className="inverted"
              style={{ margin: "0", marginRight: "10px" }}
            >
              See Live
            </CusttomButton>
            <CusttomButton
              isLink
              href={project.hrefCode}
              className="button-container"
              style={{ margin: "0" }}
            >
              {" "}
              See code{" "}
            </CusttomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const state = (state, ownProps) => ({
  project: filtredProjects(
    state.projects.projects,
    ownProps.match.params.projectId
  ),
});
export default withRouter(connect(state)(ProjectDescription));
