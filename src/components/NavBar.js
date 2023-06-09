import React from "react"
import { NavLink } from "react-router-dom"
import { LogoRect } from "./Logo"
import { ImWhatsapp } from 'react-icons/im'
import { FiPhoneCall } from 'react-icons/fi'

function NavBar() {
    return (
        <div className="grid md:grid-cols-1 lg:grid-cols-3 sticky top-0 z-30 bg-gray-200">
            <LogoRect />
            <div className="flex justify-center items-center grow text-blue-900 font-bold text-lg py-1">
                <NavLink to="/" className="px-2 py-1 hover:bg-sky-800 hover:text-white rounded-md">Home</NavLink>
                <NavLink to="/properties" className="px-2 py-1 hover:bg-sky-800 hover:text-white rounded-md">Properties</NavLink>
                <NavLink to="/contact" className="px-2 py-1 hover:bg-sky-800 hover:text-white rounded-md">Contact</NavLink>
                <NavLink to="/about" className="px-2 py-1 hover:bg-sky-800 hover:text-white rounded-md">About</NavLink>
            </div>
            <div className="flex flex-wrap justify-center pb-4">
                <div className="flex px-3 font-bold text-green-900 items-center"><ImWhatsapp className="text-xl"/><span className="ml-3">+254722596820</span></div>
                <div className="flex px-3 font-bold text-green-900 items-center"><FiPhoneCall className="text-xl"/><span className="ml-3">+254722895566</span></div>
            </div>
        </div>
    )
} 

export default NavBar;