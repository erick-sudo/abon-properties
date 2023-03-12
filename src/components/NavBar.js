import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/properties">Properties</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}

export default NavBar;