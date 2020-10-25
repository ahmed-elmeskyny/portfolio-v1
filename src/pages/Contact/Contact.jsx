import React from "react";
import "./Contact.scss";

//animation 
import { gsap } from "gsap";

//components
import CusttomButton from "../../components/CusttomButton/Custtom-button"

class Contact extends React.Component {
    constructor() {
        super();

    }
    componentDidMount() {
        gsap.from([".contact", ".info"], 0.8, {
            delay: 0.1,
            opacity: 0,
            ease: "power1.out",
            y: 64,
            stagger: {
                amount: 0.4
            }
        })
    }
    render() {
        return (
            <div className="contact-container">
                <div className="contact" >
                    <h1>Contact me</h1>
                    <p>I am interested in freelance opportunities - small projects or big projects - don't hesitate to contact me</p>
                    <form>
                        <div className="details">
                            <input type="name" placeholder="name" required></input>
                            <input type="email" placeholder="email" required></input>
                        </div>
                        <div className="description">
                            <input type="text" placeholder="Subject" required></input>
                            <textarea id="message" name="message" placeholder="message"></textarea>
                        </div>
                        <CusttomButton className="button-container resume" style={{ margin: "0", marginTop: "10px" }}> Send </CusttomButton>
                    </form>
                </div>
                <div className="info">
                    <p><span>Name   : </span> Ahmed Elmeskyny</p>
                    <p><span>Age    : </span> 19</p>
                    <p><span>school : </span> National School of Applied Sciences - ENSAO</p>
                    <p><span>num    : </span> (+212) 6 82 83 88 86</p>
                    <p><span>email  : </span> ahmedelmeskyny@gmail.com</p>
                </div>
            </div>
        )
    }
};

export default Contact;