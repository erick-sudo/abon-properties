import React from "react";

function Subscribe() {
    return (
        <div className="flex flex-col py-3 px-5 shadow-lg bg-sky-200 rounded-md max-w-lg m-4">
            <h1 className="font-medium">Subscribe to our news letter</h1>
            <form className="mt-4">
                <label className="flex flex-col">
                    <span className="mr-3">Email<span className="ml-1 text-red-600">*</span></span>
                    <input className="peer shadow-md p-3 focus:outline-none rounded-md" type="email" name="email" placeholder="Enter your email" />
                    <span className="hidden peer-invalid:text-red-600 peer-invalid:block">Invalid email address</span>
                </label>
                <div className="flex justify-end mt-3">
                    <button className="block bg-sky-600 p-3 rounded-lg hover:text-white hover:bg-amber-600">Subscribe</button>
                </div>
            </form>
        </div>
    )
}

export default Subscribe;