import React from "react";

const Header = ({filter}) => {
    return (
        <>
        <h2>
            {filter}
        </h2>
        <input placeholder="search by filter"/> 
        </>
    )
}
export default Header ();