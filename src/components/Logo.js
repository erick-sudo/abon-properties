import React from "react";
import logoS from "../assets/logos/logo1.png"
import logoR from "../assets/logos/logo2.png"

function LogoSquare() {
    return (
        <div className="logo">
            <img src={logoS} alt="ABONN" />
        </div>
    )
}

function LogoRect() {
    return (
        <div className="logo">
            <img src={logoR} alt="ABONN" />
        </div>
    )
}

export { LogoSquare, LogoRect }