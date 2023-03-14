import React from "react";

import { ImOffice, ImWhatsapp } from 'react-icons/im'
import { FiPhoneCall } from 'react-icons/fi'
import { FaQuestion } from 'react-icons/fa'

import c1 from "../assets/contacts/c1.png"

function Contact() {


    const contacts = [
        {
            channel: <ImOffice />,
            h3: "Main Office",
            values: [
                "Madaraka Estate"
            ]
        },
        {
            channel: <ImWhatsapp />,
            h3: "Whatsapp",
            values: [
                "+254722596820","+254722895566"
            ]
        },
        {
            channel: <FiPhoneCall />,
            h3: "Direct Calls",
            values: [
                "+254722596820","+254722895566"
            ]
        },
        {
            channel: <FaQuestion />,
            h3: "Make Inquiries",
            values: [
                "+254722596820","+254722895566"
            ]
        }
    ]

    return (
        <div className="">
            <div className="grid xl:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 place-items-stretch">
                {
                    contacts.map((contact, index) => {
                        return <DirectContact key={index} {...contact} />
                    })
                }
            </div>

            <ContactForm />
        </div>
    )
}

function DirectContact({channel, values, h3}) {
    return (
        <div className="bg-sky-200 m-4 min-w-xs flex flex-col justify-center items-center p-3 hover:bg-white shadow-lg shadow-black">
            <div className="text-4xl text-sky-600">
                {channel}
            </div>
            <h3 className="font-bold py-2">{h3}</h3>
            <div className="">
                {
                    values.map((val,index) => {
                        return (
                            <p key={index} className="text-sm font-mono">{val}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

function ContactForm() {
    return (
        <div className="bg-sky-100 grid sm:grid-cols-2 p-4">
            <div className=" hidden w-full items-center justify-center sm:flex p-6">
                <img src={c1} />
            </div>
            <form className="bg-sky-300 p-3">
                <h2 className="text-center font-bold text-sm">Send us a message</h2>
                <label className="flex flex-col p-2">
                    <span className="mr-3">First Name<span className="ml-1 text-red-600">*</span></span>
                    <input className="peer shadow-sm shadow-black focus:outline-none border-none" type="text" name="firstname" placeholder="Please enter your first name..." required />
                    <span className="hidden peer-invalid:text-red-600 peer-invalid:block">first name is required</span>
                </label>
                <label className="flex flex-col p-2">
                    <span className="mr-3">Last Name<span className="ml-1 text-red-600">*</span></span>
                    <input className="peer shadow-sm shadow-black focus:outline-none border-none" type="text" name="lastname" placeholder="Please enter your last name..." required />
                    <span className="hidden peer-invalid:text-red-600 peer-invalid:block">last name is required</span>
                </label>
                <label className="flex flex-col p-2">
                    <span className="mr-3">Email<span className="ml-1 text-red-600">*</span></span>
                    <input className="peer shadow-sm shadow-black focus:outline-none border-none" type="email" name="email" placeholder="Email address..." required />
                    <span className="hidden peer-invalid:text-red-600 peer-invalid:block">invalid email address</span>
                </label>
                <label className="flex flex-col p-2">
                    <span className="mr-3">Phone Number<span className="ml-1 text-slate-600">*</span></span>
                    <input className="peer shadow-sm shadow-black focus:outline-none border-none" type="number" min={0} name="email" placeholder="Phone Number..."/>
                    <span className="hidden peer-invalid:text-red-600 peer-invalid:block">invalid phone number</span>
                </label>
                <label className="flex flex-col p-2">
                    <span className="mr-3">Message<span className="ml-1 text-red-600">*</span></span>
                    <textarea className="peer shadow-sm shadow-black focus:outline-none border-none" type="text" name="email" rows={5} placeholder="Message..."></textarea>
                </label>
                <input className="block px-6 py-2 mx-auto my-3 rounded-md bg-sky-600 hover:text-white hover:bg-amber-600" type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact;