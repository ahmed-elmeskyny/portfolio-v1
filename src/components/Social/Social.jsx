import React from "react";
import "./Social.scss"

//react-icons
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Social = () => {
    return (
        <div className="social">
            <div className="social-icon github"> <AiFillGithub></AiFillGithub></div>
            <div className="social-icon linkdn"><GrLinkedinOption></GrLinkedinOption></div>
            <div className="social-icon facebook"><FaFacebookF></FaFacebookF></div>
            <div className="social-icon instagram"><AiOutlineInstagram></AiOutlineInstagram></div>
        </div>
    )
}
export default Social;