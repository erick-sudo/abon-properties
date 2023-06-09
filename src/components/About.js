import React from "react";
import logo from "../assets/logos/logo1.png"
import mission from "../assets/about/mission.png"
import vision from "../assets/about/vision.png"
import purpose from "../assets/about/purpose.png"

import placeholder1 from "../assets/about/placeholder1.jpg"
import placeholder2 from "../assets/about/placeholder2.jpg"

import { ImWhatsapp } from 'react-icons/im'

import { GrServices, GrBlog, GrContactInfo } from "react-icons/gr"

import { MdEmail } from "react-icons/md"

import { NavLink } from "react-router-dom";

function About() {
    return (
        <div className="about">
            <div className="text-center p-7 flex justify-end">
                <div className=" max-w-xl bg-gray-100/70 rounded-md grid grid-cols-1 md:grid-cols-2 shadow-md shadow-black">
                    <div>
                        <h1 className="text-2xl text-sky-900 p-3 font-extrabold">Invest for the long haul.<br />Don't get too greedy and don't get too scared</h1>
                        <div className="border w-1/2 mx-auto border-amber-600"></div>
                        <h2 className="text-xl p-6">The best way to measure your investing success is not by whether you're beating the market but by whether you've put in place a financial plan and a behavioral discipline that are likely to get you where you want to go</h2>
                    </div>
                    <div className="flex justify-center">
                        <img className="h-80" src={logo} alt="logo" />
                    </div>
                </div>
            </div>
            <div className="history bg-gray-200 py-6 flex flex-col justify-center items-center">
                <Section description="Doloremque inventore modi est dolores voluptatum asperiores vel ea dolorem voluptatibus laboriosam ut eos aut excepturi eos maiores in voluptas voluptates magnam est accusamus omnis quia enim consequuntur corporis provident." title="Mission" order={0} image={mission} />
                <Section description="Doloremque inventore modi est dolores voluptatum asperiores vel ea dolorem voluptatibus laboriosam ut eos aut excepturi eos maiores in voluptas voluptates magnam est accusamus omnis quia enim consequuntur corporis provident." title="Vision" order={1} image={vision} />
                <Section description="Doloremque inventore modi est dolores voluptatum asperiores vel ea dolorem voluptatibus laboriosam ut eos aut excepturi eos maiores in voluptas voluptates magnam est accusamus omnis quia enim consequuntur corporis provident." title="Purpose" order={0} image={purpose} />
            </div>

            <Ribbon />

            <div className="bg-gray-200 p-3">
                <h1 className="text-xl font-bold pl-4">Our Leadership</h1>
                <div className="grid md:grid-cols-2">
                    <Person fullname="Nick Otieno" contact={[<><ImWhatsapp /> <span className="pl-3">+254722596820</span></>, <><MdEmail /> <NavLink className="pl-3" to={"mailto:nick@abon.co.ke"}>nick@abon.co.ke </NavLink></>]} position="Co-Founder" description="Omnis incidunt ullam rem et eligendi aspernatur beatae delectus non culpa aut quisquam quod eveniet." avatar={placeholder1} />
                    <Person fullname="Maureen Gathoni" contact={[<><ImWhatsapp /> <span className="pl-3">+254722895566</span></>, <><MdEmail /> <NavLink className="pl-3" to={"mailto:gathonee@abon.co.ke"}>gathonee@abon.co.ke</NavLink></> ]} position="Co-Founder" description="Omnis incidunt ullam rem et eligendi aspernatur beatae delectus non culpa aut quisquam quod eveniet." avatar={placeholder2} />
                </div>
            </div>
        </div>
    )
}

function Person({fullname, position, avatar, description, contact}) {
    return (
        <div className="bg-gradient-to-l from-gray-200 to-gray-400 mr-3 mb-3 p-4 rounded-lg max-w-lg shadow-black hover:bg-white 
          ">
            <div className="flex items-center flex-row-reverse">
                <img src={avatar} className="h-32 rounded-full ring-8 ring-slate-200/90 mb-3" alt={fullname} />
                <div className="grow border-b border-black pb-2 m-5">
                    <div className="font-bold text-xl text-blue-900">{fullname}</div>
                    <div className="font-bold">{position}</div>
                </div>
            </div>
            <p className="">{description}</p>
            <div className="flex justify-end items-center text-slate-700 font-bold">{contact[0]}</div>
            <div className="flex justify-end items-center text-slate-700 font-bold">{contact[1]}</div>
        </div>
    )
}

function Ribbon() {
    return (
        <div className="grid grid-cols-3 mx-5 my-9 bg-gray-500 rounded-full divide-x">
            <div className="flex items-center justify-center p-4 hover:bg-sky-900 rounded-l-full hover:text-white">
                <GrBlog />
                <p className="ml-3">Blog</p>
            </div>
            <div className="flex items-center justify-center p-4 hover:bg-sky-900 hover:text-white">
                <GrServices/>
                <p className="ml-3">Services</p>
            </div>
            <div className="flex items-center justify-center p-4 hover:bg-sky-900 rounded-r-full hover:text-white">
                <GrContactInfo />
                <p className="ml-3">Contact Us</p>
            </div>
        </div>
    )
}

function Section({title, description, image, order}) {

    const divs = [
        <div className="py-9 px-4" key={0}>
            <img src={image} alt={title} className=" my-8" />
        </div>,
        <div className="p-6 " key={1}>
            <h1 className="text-xl font-bold text-amber-600">{title}</h1>
            <p className="font-medium">{description}</p>
        </div>
        ]

    return (
        <div className="sects bg-gradient-to-r from-gray-100 to-gray-400 m-6 shadow-md shadow-black lg:w-xl grid grid-cols-1 md:grid-cols-2 flex-row-reverse items-center rounded-md">
            {
                order === 0 ? divs : divs.reverse()
            }
        </div>
    )
}

export default About;