import React from "react";
import "./Menu.scss";

//react router
import { NavLink } from "react-router-dom"



const Menu = () => {
    return (
        <div className="menu">

            <ul>
                <li className="link"> <NavLink exact to="/" activeClassName="is-active-home" className="link">Home</NavLink></li>
                <li> <NavLink exact to="/about" activeClassName="is-active-about" className="link" >About</NavLink> </li>
                <li> <NavLink exact to="/skills" activeClassName="is-active-skills" className="link" >Skills</NavLink></li>
                <li> <NavLink exact to="/projects" activeClassName="is-active-projects" className="link" >Projects</NavLink></li>
                <li> <NavLink exact to="/contact" activeClassName="is-active-contact" className="link" >Contact</NavLink></li>
            </ul>
        </div >
    )
}

export default Menu;