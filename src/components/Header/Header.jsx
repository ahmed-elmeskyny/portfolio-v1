import React, { useState } from "react";
import "./Header.scss";

//react-router
import { NavLink } from "react-router-dom";

//icons
import { FaPlay } from "react-icons/fa";
import { BsFillPauseFill } from "react-icons/bs";
import { RiMenu4Fill } from "react-icons/ri";
import { GiBeard } from "react-icons/gi";

//components
import Wave from "../../assets/Music/music";
import { TiDelete } from "react-icons/ti";

//assets
import StaticWave from "../../assets/Music/StaticWave";
import lofi from "../../assets/lofii.mp3";
import avatar from "../../assets/avataaars.svg";

//Sound library
import { Howl } from "howler";

//redux
import { connect } from "react-redux";
import toggle from "../../redux/mobile-reducer/mobile-action";

const sound = new Howl({
  src: [lofi],
  loop: true,
  volume: 0.3,
});

const Header = ({ toggle }) => {
  const [play, setPlay] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <RiMenu4Fill
          className="menu-icon"
          onClick={() => toggle()}
        ></RiMenu4Fill>
        <NavLink to="/">
          <img src={avatar} width="60px"></img>
        </NavLink>
      </div>

      <div className="music">
        {play ? (
          <BsFillPauseFill
            style={{ fontSize: "25px", marginBottom: "5px" }}
            onClick={() => {
              setPlay(false);
              sound.pause();
            }}
          ></BsFillPauseFill>
        ) : (
          <FaPlay
            style={{ fontSize: "20px", marginBottom: "5px" }}
            onClick={() => {
              setPlay(true);
              sound.play();
            }}
          ></FaPlay>
        )}
        <span> {play ? <Wave></Wave> : <StaticWave></StaticWave>}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggle()),
});

export default connect(null, mapDispatchToProps)(Header);
