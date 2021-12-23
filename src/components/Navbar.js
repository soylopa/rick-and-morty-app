import React from "react";

const Navbar = ({brand}) => {
    return (
        <div className="navbar navbar-light bg-light">
            <div className="container">
            <h1 className="navbar-brand"> {brand}</h1>
            </div>
        </div>
    )
}

export default Navbar;