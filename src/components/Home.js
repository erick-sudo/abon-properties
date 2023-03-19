import React from "react";
import { MdOutlineExplore } from "react-icons/md"
import { ImLocation2 } from "react-icons/im"
import westsuites from "../assets/properties/westsuites.png"
import Slideshow from "./Slideshow";

import ws1 from "../assets/properties/ws1.jpeg"
import ws2 from "../assets/properties/ws2.jpeg"
import ws3 from "../assets/properties/ws3.jpeg"
import ws4 from "../assets/properties/ws4.jpeg"
import ws5 from "../assets/properties/ws5.jpeg"
import ws6 from "../assets/properties/ws6.jpeg"

import pam from "../assets/properties/pam.png"
import pam1 from "../assets/properties/pam1.jpg"
import pam2 from "../assets/properties/pam2.jpg"
import pam3 from "../assets/properties/pam3.jpg"
import pam4 from "../assets/properties/pam4.jpg"
import pam5 from "../assets/properties/pam5.jpg"
import pam6 from "../assets/properties/pam6.jpg"
import pam7 from "../assets/properties/pam6.jpg"
import pam8 from "../assets/properties/pam8.jpg"
import pam9 from "../assets/properties/pam9.jpg"
import pam10 from "../assets/properties/pam10.jpg"
import pam11 from "../assets/properties/pam11.jpg"
import pam12 from "../assets/properties/pam12.jpg"


function Home() {

    const properties = [
        {
            poster: westsuites,
            images: [ ws1, ws2, ws3, ws4, ws5, ws6 ],
            description: ["Set in Nairobi, just 3.1 Km from the CBD.", "An apartment with city views", "This apartment features parquet floors, 1 bedroom and a bathroom with shower, bath and free toiletries.","A well-equipped kitchen with a fridge, an oven and a microwave.","Staff is always available to provide information at the reception."],
            title: "A Blend of Luxury",
            themecolor: "red",
            location: "Kisauni Road, Nairobi West, Nairobi"
        },
        {
            poster: pam,
            images: [ pam1, pam2, pam3, pam4, pam5, pam6, pam7, pam8, pam9, pam10, pam11, pam12 ],
            description: ["Looking for that serene homely stay?","Pam's Palatial home is the place to be.", "We have a beautifully furnished 4 bedroom home with 2 self contained cottages that are 2 bedroom each."],
            title: "Pam's Palatial Home",
            themecolor: "green",
            location: "Nyahera, East Kisumu, Kisumu | XPFF+7P Kisumu"
        }
    ]

    return (
        <div>
            <div className="bg-sky-800/50">
                <div className="w-max flex flex-col items-center">
                    <div className="w-42 w-max px-6 py-32 font-bold text-white text-5xl break-words">Welcome Home<br />...............</div>
                    <button className="text-white bg-sky-900 m-5 py-2 px-8 rounded-lg hover:bg-amber-600 hover:border hover:border-sky-900 hover:text-black font-bold flex items-center">EXPLORE<MdOutlineExplore className="ml-3 text-4xl animate-spin " /></button>
                </div>
            </div>

            {
                properties.map((property, index) => {
                    return <Property key={index} {...property} />
                })
            }
        </div>
    )
}

function Property({poster, description, images, title, themecolor, location}) {

    let image = "", h1 = "", btn = ""
    if(themecolor === "red") {
        image = <img className={`bg-red-900 w-full rounded-br-3xl rounded-tl-3xl`} src={poster} alt="Property"/>
        h1 = <h1 className={`uppercase font-bold text-red-900 text-2xl text-center`}>{title}</h1>
        btn = <button className={`text-white bg-red-900 m-5 py-2 px-8 border-white border-4 hover:bg-maroon-600 hover:border-sky-900 hover:text-white hover:bg-red-900/50 font-bold flex items-center`}>Explore More</button>
    } else if(themecolor === "green") {
        image = <img className={`bg-green-900 w-full rounded-br-3xl rounded-tl-3xl`} src={poster} alt="Property"/>
        h1 = <h1 className={`uppercase font-bold text-green-900 text-2xl text-center`}>{title}</h1>
        btn = <button className={`text-white bg-green-900 m-5 py-2 px-8 border-white border-4 hover:bg-maroon-600 hover:border-sky-900 hover:text-white hover:bg-green-900/50 font-bold flex items-center`}>Explore More</button>
    } else if(themecolor === "blue") {
        image = <img className={`bg-sky-900 w-full rounded-br-3xl rounded-tl-3xl`} src={poster} alt="Property"/>
        h1 = <h1 className={`uppercase font-bold text-sky-900 text-2xl text-center`}>{title}</h1>
        btn = <button className={`text-white bg-sky-900 m-5 py-2 px-8 border-white border-4 hover:bg-maroon-600 hover:border-sky-900 hover:text-white hover:bg-sky-900/50 font-bold flex items-center`}>Explore More</button>
    } else if(themecolor === "orange") {
        image = <img className={`bg-amber-600 w-full rounded-br-3xl rounded-tl-3xl`} src={poster} alt="Property"/>
        h1 = <h1 className={`uppercase font-bold text-amber-600 text-2xl text-center`}>{title}</h1>
        btn = <button className={`text-white bg-amber-600 m-5 py-2 px-8 border-white border-4 hover:bg-maroon-600 hover:border-sky-900 hover:text-white hover:bg-amber-600/50 font-bold flex items-center`}>Explore More</button>
    } else {
        image = <img className={`bg-white w-full rounded-br-3xl rounded-tl-3xl`} src={poster} alt="Property"/>
        h1 = <h1 className={`uppercase font-bold text-white text-2xl text-center`}>{title}</h1>
        btn = <button className={`text-white bg-white m-5 py-2 px-8 border-white border-4 hover:bg-maroon-600 hover:border-sky-900 hover:text-black font-bold flex items-center`}>Explore More</button>
    }

    return (
        <div className="bg-gray-300 m-4 rounded-md">
                <div className="property p-6 grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="max-w-xl">
                        {image}
                    </div>
                    <div className="p-3">
                        {h1}
                        <div>
                            {
                                description.map((p, i) => {
                                    return (
                                        <>
                                            {p}
                                            <hr className="my-3 border-sky-900/50 w-3/4 mx-auto" />
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="font-bold font-mono  border w-max-lg p-2 bg-sky-400 flex flex-wrap"><ImLocation2 className="mr-3" />{location}</div>
                        {btn}
                    </div>
                </div>

                <Slideshow images={images} />
            </div>
    )
}

export default Home;