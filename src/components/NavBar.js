import React from "react"
import { NavLink } from "react-router-dom"
import { LogoRect } from "./Logo"
import { ImWhatsapp } from 'react-icons/im'
import { FiPhoneCall } from 'react-icons/fi'

function NavBar() {
    return (
        <div className="flex ">
            <LogoRect size={32} />
            <div className="flex items-center grow text-green-900 font-bold text-lg divide-x-2 divide-amber-500">
                <NavLink to="/" className="px-6 py-2 hover:bg-sky-800 hover:text-white">Home</NavLink>
                <NavLink to="/properties" className="px-6 py-2 hover:bg-sky-800 hover:text-white">Properties</NavLink>
                <NavLink to="/contact" className="px-6 py-2 hover:bg-sky-800 hover:text-white">Contact</NavLink>
                <NavLink to="/about" className="px-6 py-2 hover:bg-sky-800 hover:text-white">About</NavLink>
            </div>
            <div className="flex items-start">
                <div className="flex px-3 font-bold text-green-900 items-center"><ImWhatsapp className="text-xl"/><span className="ml-3">+254706087204</span></div>
                <div className="flex px-3 font-bold text-green-900 items-center"><FiPhoneCall className="text-xl"/><span className="ml-3">+436787437954</span></div>
            </div>
        </div>
    )
} 

export default NavBar;