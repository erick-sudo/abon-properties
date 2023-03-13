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

function Home() {

    const properties = [
        {
            poster: westsuites,
            images: [ ws1, ws2, ws3, ws4, ws5, ws6 ],
            description: "Perspiciatis sunt enim. Dolores aut quas. Esse molestiae quasi. Et commodi alias. Placeat dolor provident. Omnis accusantium quas. Consequatur aut omnis. Odio ut quod. Aliquid atque modi. Sunt et cupiditate. Nostrum qui quos. Quas voluptas et. Accusamus sit veritatis. Ratione harum officiis. Ut tenetur voluptates. Omnis et eum. Beatae enim dignissimos. Eaque nihil magni. Laudantium et est. Porro voluptatum sint. Molestias maiores voluptas. Debitis laudantium minima. Qui laboriosam deleniti. Eligendi rem qui. Aliquid fugit ratione. Eligendi rerum ducimus. Modi dolorum vel. Dignissimos perspiciatis natus. Nam sapiente exercitationem. Voluptatem quia quod.",
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
    return (
        <div className="bg-sky-200 m-4 rounded-md">
                <div className="property p-6 grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="max-w-xl">
                        <img className={`bg-${themecolor}-900 w-full`} src={poster} alt="Property"/>
                    </div>
                    <div className="p-3">
                        <h1 className={`uppercase font-bold text-${themecolor}-900 text-2xl text-center`}>{title}</h1>
                        <p>{description}</p>
                        <button className={`text-white bg-${themecolor}-900 m-5 py-2 px-8 border-white border-4 hover:bg-maroon-600 hover:border-sky-900 hover:text-black font-bold flex items-center`}>Explore More</button>
                    </div>
                </div>

                <Slideshow images={images} />
            </div>
    )
}

export default Home;