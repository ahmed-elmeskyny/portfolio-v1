import React from "react";
import "./item.scss";

//animation 



const Item = ({ title, date, description }) => {

    return (
        <div className="item-container">
            <div className="item">
                <h3 className="title">{title}</h3>
                <p className="date"> {date}</p>
                <p className="description"> {description}</p>
            </div>
            <span className="circle">a</span>
        </div>
    )
};

export default Item;