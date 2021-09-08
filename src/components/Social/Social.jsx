import React from "react";
import "./Social.scss";

//react-icons
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Social = () => {
  return (
    <div className="social">
      <div className="social-icon github">
        {" "}
        <a
          href="https://github.com/ahmed-elmeskyny"
          target="_blank"
          style={{ color: "black" }}
        >
          {" "}
          <AiFillGithub></AiFillGithub>{" "}
        </a>
      </div>
      <div className="social-icon linkdn">
        <a
          href="www.linkedin.com/in/ahmed-el-meskyny-b570041b5"
          target="_blank"
          style={{ color: "black" }}
        >
          <GrLinkedinOption></GrLinkedinOption>{" "}
        </a>
      </div>
      <div className="social-icon facebook">
        <a
          href="https://www.facebook.com/itsmeahmedelmeskyny/"
          target="_blank"
          style={{ color: "black" }}
        >
          <FaFacebookF></FaFacebookF>
        </a>
      </div>
      <div className="social-icon instagram">
        <a
          href="https://www.instagram.com/ahmed_e_l/"
          target="_blank"
          style={{ color: "black" }}
        >
          <AiOutlineInstagram></AiOutlineInstagram>
        </a>
      </div>
    </div>
  );
};
export default Social;
