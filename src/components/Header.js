import React from "react";

const Header = ({title}) => {
    return (
        <div className="justify-content-center">
        <h2>
            {title}
        </h2> 
        <a>Clear filter</a>
        </div>
    )
}
export default Header;