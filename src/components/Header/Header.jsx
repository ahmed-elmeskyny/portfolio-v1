import React, { useState } from "react";
import "./Header.scss";

//icons
import { FaPlay } from "react-icons/fa";
import { BsFillPauseFill } from "react-icons/bs";

//components 
import Wave from "../../assets/Music/music"

//assets 
import StaticWave from "../../assets/Music/StaticWave"
import lofi from "../../assets/lofii.mp3"

//Sound library
import { Howl } from "howler"

const sound = new Howl({
    src: [lofi],
    loop: true,
    volume: 0.3,
});

const Header = () => {
    const [play, setPlay] = useState(false);
    return (
        <div className="header">
            <p>Ae</p>
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

export default Header;