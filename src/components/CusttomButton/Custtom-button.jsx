import React from "react";
import "./Custtom-button.scss";

//react-icons 
import { FaFileImport } from "react-icons/fa";


const CusttomButton = ({ isLink, pdf, children }) => {
    return (
        <div className="button-container">
            { isLink ?
                <button><FaFileImport style={{ fontSize: "20px" }}></FaFileImport><a className="link" href={pdf} download="photo"> {children}</a></button> :
                <button>{children}</button>}
        </div>
    )
};

export default CusttomButton;