import React from "react";
import Subscribe from "./Subscribe";
import Social from "./Social";
import KeyObligations from "./KeyObligation";
import { LogoSquare } from "./Logo";

function Footer() {
    return (
        <div className="footer flex flex-col bg-sky-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                <Subscribe />
                <Social />
                <KeyObligations />
            </div>
            <div className="flex flex-row-reverse items-center justify-center">
                <LogoSquare />
                <p className="p-5 text-center">Copyright &copy; 2023 - <span className="text-sky-900 text-2xl">ABON</span></p>
            </div>
        </div>
    );
}

export default Footer;