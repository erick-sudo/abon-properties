import React from "react";
import { CgArrowLongRightR } from "react-icons/cg"
import { TiStarburst } from "react-icons/ti"
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md"

function Properties() {

    const properties = new Array(9).fill("Eastern McCullough")

    return (
        <div>
            <div className="flex flex-col px-3 pb-12 bg-black/80 text-white font-bold">
                <h1 className="text-6xl my-3">Your trusted partners in property</h1>
                
                <h3 className="mt-7 px-3 font-normal text-sm text-center">We provide innovative property solutions for our clients that add tangible value across property sectors and services</h3>
                <div className="grow flex justify-center items-center text-sky-400"><span className="text-2xl flex items-center"><MdOutlineArrowBackIosNew />======</span><TiStarburst className="text-8xl animate-spin duration-1000" /><span className="text-2xl flex items-center">======<MdOutlineArrowForwardIos /></span></div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3">
                {
                    properties.map((property, index) => {
                        return (
                            <Property key={index} title={property} />
                        )
                    })
                }
            </div>
        </div>
    )
}

function Property({title}) {
    return (
        <div className="relative bg-sky-400 mt-3 mr-3 ml-3 shadow-black shadow-md">
            <div className="">
                <img className="" src="https://cdn.pixabay.com/photo/2016/09/14/20/50/london-1670432_960_720.png" alt="..." />
            </div>
            <h3 className="font-bold p-2">{title}</h3>
            <button className="absolute left-2 bottom-20 text-2xl text-red-700 bg-black w-max px-6 hover:text-white hover:scale-110 "><CgArrowLongRightR /></button>
        </div>
    )
}

export default Properties;