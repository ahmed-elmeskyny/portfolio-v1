import React from "react";
import "./Time-line.scss";

//components 
import Item from "../Time-line-item/item";



const TimeLine = ({ education }) => {
    return (
        <div className="time-line-container">
            { education ? (<>
                <Item
                    title="baccalaureate in physiques sciences - excellent"
                    date="2019"
                    description="Zineb Ennafzaouia high school , oujda">

                </Item>
                <Item
                    title="preparatory classes cp - ensao  "
                    date="2019-2021"
                    description="Maths and physics">
                </Item>
                <Item
                    title="software engineering - ensao"
                    date="2021-2024"
                    description="software engineering">

                </Item></>) : <Item
                    title="freelance"
                    date="2020"
                    description="fiverr - upwork"></Item>}
        </div>
    )
};

export default TimeLine;