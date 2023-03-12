import React from "react";
import Subscribe from "./Subscribe";
import Social from "./Social";

function Footer() {
    return (
        <div className="footer">
            <Subscribe />
            <Social />
            <p className="p-5 text-center">Copyright &copy; 2023</p>
        </div>
    );
}

export default Footer;