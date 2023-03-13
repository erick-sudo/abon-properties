import React from "react";
import { MdOutlineExplore } from "react-icons/md"
import westsuites from "../assets/properties/westsuites.png"
import Slideshow from "./Slideshow";

import ws1 from "../assets/properties/ws1.jpeg"
import ws2 from "../assets/properties/ws2.jpeg"
import ws3 from "../assets/properties/ws3.jpeg"
import ws4 from "../assets/properties/ws4.jpeg"
import ws5 from "../assets/properties/ws5.jpeg"
import ws6 from "../assets/properties/ws6.jpeg"

// import Slideshow from "./Slideshow";

function Home() {

    const properties = [
        {
            poster: westsuites,
            images: [ ws1, ws2, ws3, ws4, ws5, ws6 ],
            description: "Perspiciatis sunt enim. Dolores aut quas. Esse molestiae quasi. Et commodi alias. Placeat dolor provident. Omnis accusantium quas. Consequatur aut omnis. Odio ut quod. Aliquid atque modi. Sunt et cupiditate. Nostrum qui quos. Quas voluptas et. Accusamus sit veritatis. Ratione harum officiis. Omnis et eum. Beatae enim dignissimos. Eaque nihil magni. Laudantium et est. Porro voluptatum sint. Molestias maiores voluptas. Debitis laudantium minima. Qui laboriosam deleniti. Eligendi rem qui. Aliquid fugit ratione. Eligendi rerum ducimus. Modi dolorum vel. Dignissimos perspiciatis natus. Nam sapiente exercitationem. Voluptatem quia quod.",
            title: "A Blend of Luxury",
            themecolor: "red"
        }
    ]

    return (
        <div>
            <div className="bg-sky-800/50">
                <div className="w-max flex flex-col items-center">
                    <h1 className="w-42 w-max px-6 py-32 font-bold text-white text-5xl">Necessitatibus <br />distinctio<br />reprehenderit<br /> nemo.</h1>
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

function Property({poster, description, images, title, themecolor}) {

    let image = "", h1 = "", btn = ""
    if(themecolor === "red") {
        image = <img className={`bg-red-900 w-full`} src={poster} alt="Property"/>
        h1 = <h1 className={`uppercase font-bold text-red-900 text-2xl text-center`}>{title}</h1>
        btn = <button className={`text-white bg-red-900 m-5 py-2 px-8 border-white border-4 hover:bg-maroon-600 hover:border-sky-900 hover:text-black font-bold flex items-center`}>Explore More</button>
    } else if(themecolor === "green") {
        image = <img className={`bg-green-900 w-full`} src={poster} alt="Property"/>
        h1 = <h1 className={`uppercase font-bold text-green-900 text-2xl text-center`}>{title}</h1>
        btn = <button className={`text-white bg-green-900 m-5 py-2 px-8 border-white border-4 hover:bg-maroon-600 hover:border-sky-900 hover:text-black font-bold flex items-center`}>Explore More</button>
    } else if(themecolor === "blue") {
        image = <img className={`bg-sky-900 w-full`} src={poster} alt="Property"/>
        h1 = <h1 className={`uppercase font-bold text-sky-900 text-2xl text-center`}>{title}</h1>
        btn = <button className={`text-white bg-sky-900 m-5 py-2 px-8 border-white border-4 hover:bg-maroon-600 hover:border-sky-900 hover:text-black font-bold flex items-center`}>Explore More</button>
    } else if(themecolor === "orange") {
        image = <img className={`bg-amber-600 w-full`} src={poster} alt="Property"/>
        h1 = <h1 className={`uppercase font-bold text-amber-600 text-2xl text-center`}>{title}</h1>
        btn = <button className={`text-white bg-amber-600 m-5 py-2 px-8 border-white border-4 hover:bg-maroon-600 hover:border-sky-900 hover:text-black font-bold flex items-center`}>Explore More</button>
    } else {
        image = <img className={`bg-white w-full`} src={poster} alt="Property"/>
        h1 = <h1 className={`uppercase font-bold text-white text-2xl text-center`}>{title}</h1>
        btn = <button className={`text-white bg-white m-5 py-2 px-8 border-white border-4 hover:bg-maroon-600 hover:border-sky-900 hover:text-black font-bold flex items-center`}>Explore More</button>
    }

    return (
        <div className="bg-sky-200 m-4 rounded-md">
                <div className="property p-6 grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="max-w-xl">
                        {image}
                    </div>
                    <div className="p-3">
                        {h1}
                        <p>{description}</p>
                        {btn}
                    </div>
                </div>

                <Slideshow images={images} />
            </div>
    )
}

export default Home;