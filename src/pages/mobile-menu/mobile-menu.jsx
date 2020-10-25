import React, { useEffect, useRef } from "react";
import "./mobile-menu.scss";

//react-icons
import { AiOutlineClose } from "react-icons/ai";

//react-router-dom
import { NavLink } from "react-router-dom";

//redux 
import { connect } from "react-redux";
import toggle from "../../redux/mobile-reducer/mobile-action";

//animation
import { gsap } from "gsap";

const MobileMenu = ({ open, toggle }) => {

    return open ? (<div className="mobile-menu" >
        <div className="close-icon" onClick={() => toggle()} >
            <AiOutlineClose></AiOutlineClose>
        </div>
        <div className="menu-ul">
            <ul>
                <li> <NavLink exact to="/" onClick={() => toggle()}>Home</NavLink></li>
                <li> <NavLink exact to="/about" onClick={() => toggle()} >About</NavLink> </li>
                <li> <NavLink exact to="/skills" onClick={() => toggle()} >Skills</NavLink></li>
                <li> <NavLink exact to="/projects" onClick={() => toggle()} >Work</NavLink></li>
                <li> <NavLink exact to="/contact" onClick={() => toggle()}  >Contact</NavLink></li>
            </ul>
        </div>
    </div>) : (null)
}


const mapStateToProps = (state) => ({
    open: state.toggle.open,
})

const mapdispatch = (dispatch) => ({
    toggle: () => dispatch(toggle())
})

export default connect(mapStateToProps, mapdispatch)(MobileMenu);