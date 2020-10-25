import React from "react";
import Particles from "react-particles-js";


const ParticleContainer = () => {
    return (
        <Particles style={{ position: "fixed", top: "0", right: "0", width: "100vw", height: "100vh", zIndex: "-1000" }}
            params={{
                particles: {
                    number: {
                        value: 44,
                    },
                    color: {
                        value: "#e1ad01"
                    },
                    shape: {
                        type: "circle"
                    },
                    line_linked: {
                        enable: false
                    },
                    size: {
                        value: 4
                    }
                }
            }}>

        </Particles>
    )
}
export default ParticleContainer;