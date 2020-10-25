import React from "react";
import "./Custtom-button.scss";

//react-icons 
import { FaFileImport } from "react-icons/fa";


const CusttomButton = ({ isLink, href, children, isDownload, ...otherProps }) => {
    return (
        <div  {...otherProps}>
            { isLink ?
                <button>{isDownload ?
                    <FaFileImport style={{ fontSize: "20px" }}></FaFileImport> : null}
                    <a className="link" href={href} target="_blank">
                        {children}</a>
                </button> :
                <button>{children}</button>}
        </div>
    )
};

export default CusttomButton;