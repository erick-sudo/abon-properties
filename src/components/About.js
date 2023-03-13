import React from "react";
import logo from "../assets/logos/logo1.png"
import mission from "../assets/about/mission.png"
import vision from "../assets/about/vision.png"
import purpose from "../assets/about/purpose.png"

import { GrServices, GrBlog, GrContactInfo } from "react-icons/gr"

function About() {
    return (
        <div className="about">
            <div className="text-center p-7 flex justify-end">
                <div className=" max-w-xl bg-sky-200/70 rounded-md grid grid-cols-1 md:grid-cols-2">
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
            <div className="history py-6 flex flex-col justify-center items-center">
                <Section description="Doloremque inventore modi est dolores voluptatum asperiores vel ea dolorem voluptatibus laboriosam ut eos aut excepturi eos maiores in voluptas voluptates magnam est accusamus omnis quia enim consequuntur corporis provident." order={0} image={mission} />
                <Section description="Doloremque inventore modi est dolores voluptatum asperiores vel ea dolorem voluptatibus laboriosam ut eos aut excepturi eos maiores in voluptas voluptates magnam est accusamus omnis quia enim consequuntur corporis provident." order={1} image={vision} />
                <Section description="Doloremque inventore modi est dolores voluptatum asperiores vel ea dolorem voluptatibus laboriosam ut eos aut excepturi eos maiores in voluptas voluptates magnam est accusamus omnis quia enim consequuntur corporis provident." title="Purpose" order={0} image={purpose} />
            </div>

            <Ribbon />
        </div>
    )
}

function Ribbon() {
    return (
        <div className="grid grid-cols-3 mx-5 my-9 bg-white rounded-full divide-x">
            <div className="flex items-center justify-center p-4 hover:bg-sky-900 rounded-l-full hover:text-white">
                <p>Blog</p>
                <GrBlog className="ml-3"/>
            </div>
            <div className="flex items-center justify-center p-4 hover:bg-sky-900 hover:text-white">
                <p>Services</p>
                <GrServices className="ml-3"/>
            </div>
            <div className="flex items-center justify-center p-4 hover:bg-sky-900 rounded-r-full hover:text-white">
                <p>Contact Us</p>
                <GrContactInfo className="ml-3"/>
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
        <div className="sects bg-sky-400 m-6 shadow-md lg:w-xl grid grid-cols-1 md:grid-cols-2 flex-row-reverse items-center rounded-md">
            {
                order === 0 ? divs : divs.reverse()
            }
        </div>
    )
}

export default About;