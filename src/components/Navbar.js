import React from "react";

const Navbar = ({brand}) => {
    return (
        <div className="navbar navbar-light bg-light">
            <div className="container">
            <h1 className="navbar-brand"> {brand}</h1>
            <a href=""> Locations </a>
            <a href=""> Episodes </a>
            <a href="">  Characters </a>
            <a href=""> Chart-icon</a>
            </div>
        </div>
    )
}

export default Navbar;