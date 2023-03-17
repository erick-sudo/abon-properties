import React from "react";
import logoS from "../assets/logos/logo1.png"
import logoR from "../assets/logos/logo2.png"

function LogoSquare({h=10}) {
    return (
        <div className="logo max-w-max">
            <img src={logoS} alt="ABONN" style={{height: `${h}vh`}} />
        </div>
    )
}

function LogoRect({size}) {
    return (
        <div className="logo">
            <img src={logoR} className="h-10 sm:h-14 md:h-16 lg:h-20" alt="ABONN" />
        </div>
    )
}

export { LogoSquare, LogoRect }