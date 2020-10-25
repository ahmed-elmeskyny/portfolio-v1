import React, { useState } from "react";
import "./Header.scss";

//icons
import { FaPlay } from "react-icons/fa";
import { BsFillPauseFill } from "react-icons/bs";
import { RiMenu4Fill } from "react-icons/ri"
import { GiBeard } from "react-icons/gi"

//components 
import Wave from "../../assets/Music/music"

//assets 
import StaticWave from "../../assets/Music/StaticWave"
import lofi from "../../assets/lofii.mp3"

//Sound library
import { Howl } from "howler"

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
                <RiMenu4Fill className="menu-icon" onClick={() => toggle()}></RiMenu4Fill>
                <GiBeard style={{ fontSize: "40px", color: "#e1ad01" }}></GiBeard>
            </div>
            <div className="music">
                {play ? <BsFillPauseFill
                    style={{ fontSize: "25px", marginBottom: "5px" }}
                    onClick={() => {
                        setPlay(false);
                        sound.pause()
                    }}></BsFillPauseFill>
                    : <FaPlay
                        style={{ fontSize: "20px", marginBottom: "5px" }}
                        onClick={() => { setPlay(true); sound.play() }} >
                    </FaPlay>}
                <span> {play ? <Wave></Wave> : <StaticWave></StaticWave>}</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch(toggle()),
})

export default connect(null, mapDispatchToProps)(Header);