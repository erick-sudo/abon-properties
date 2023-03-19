import React from "react";
import { CgArrowLongRightR } from "react-icons/cg"
import { TiStarburst } from "react-icons/ti"
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos, MdOutlinePreview} from "react-icons/md"

import ws2 from "../assets/properties/ws1.jpeg"
import pam1 from "../assets/properties/pam1.jpg"

import { SlLike } from "react-icons/sl"
import { GrView } from "react-icons/gr"
import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im"

function Properties() {

    const properties = new Array(9).fill("Eastern McCullough")

    return (
        <div>
            <div className="flex flex-col px-3 pb-12 bg-black/80 text-white font-bold">
                <h1 className="text-6xl my-3">Your trusted partners in property</h1>
                
                <h3 className="mt-7 px-3 font-normal text-sm text-center">We provide innovative property solutions for our clients that add tangible value across property sectors and services</h3>
                <div className="grow flex justify-center items-center text-gray-400"><span className="text-2xl flex items-center"><MdOutlineArrowBackIosNew /></span><TiStarburst className="text-8xl animate-bounce transition duration-1000" /><span className="text-2xl flex items-center"><MdOutlineArrowForwardIos /></span></div>
            </div>
            <div className="bg-gray-300 p-4 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                <Property poster={ws2} title={"West Suites"} star_rating={Math.floor(Math.random()*100)%10} views={Math.floor(Math.random()*100000)} likes={Math.floor(Math.random()*1000000)} /> 
                <Property poster={pam1} title={"Pam's Palatial Home"} star_rating={Math.floor(Math.random()*100)%10} views={Math.floor(Math.random()*100000)} likes={Math.floor(Math.random()*1000000)} />
            </div>
        </div>
    )
}

function Property({title, poster, star_rating, likes, views}) {
    return (
        <div className="relative bg-gray-300 mt-3 mr-3 rounded-md ml-3 shadow-black shadow-md shadow- hover:bg-white">
            <div className="">
                <img className="rounded-t-md" src={poster} alt="..." />
            </div>
            <div className="flex flex-row-reverse my-1">
                <button className="w-1/2 mr-3 text-2xl text-red-700 bg-black px-8 py-1 hover:text-white hover:scale-110 "><CgArrowLongRightR /></button>
            </div>
            <h3 className="font-bold p-2 absolute top-2 left-3 text-center right-3 bg-gray-200/50 text-xl">{title}</h3>
            <Status star_rating={star_rating} likes={likes} views={views} />
        </div>
    )
}

function Status({star_rating, likes, views}) {
    return (
        <div className="">
            <div className="grid grid-cols-2">
                <span className="flex items-center text-sm">{<SlLike className="text-xl mx-2 text-sky-700" />}{likes} Likes</span>
                <span className="flex items-center text-sm">{<MdOutlinePreview className="text-xl mx-2 text-sky-700" />}{views} Views</span>
            </div>
            <div className="font-bold">
                <div className="text-center">Rating {star_rating}</div>
                <div className="flex justify-center pb-3 text-sky-700">
                    {
                        new Array(10).fill(<ImStarEmpty />).map((star, index) => {
                            return index === star_rating ? <ImStarHalf key={index} /> : index < star_rating ? <ImStarFull key={index} /> : <ImStarEmpty key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Properties;