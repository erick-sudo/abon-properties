import React, { useState, useEffect, useRef } from "react";

import { Carousel } from "flowbite";

function Slideshow({images}) {

    const [carousel, setCarousel] = useState(null)
    
    const indicators = useRef()
    const slideWrapper = useRef()

    useEffect(() => {
        const items = Array.from(slideWrapper.current.children).map((item, index) => {
            return {
                position: index,
                el: item
            }
        })

        const options = {
            defaultPosition: 0,
            interval: 3000,
            indicators: {
                activeClasses: 'bg-white dark:bg-gray-800',
                inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
                items: Array.from(indicators.current.children).map((indicator, index) => {
                    return {
                        position: index,
                        el: indicator
                    }
                })
            },
            onNext: () => {
                //console.log("Next")
            },
            onPrev: () => {
                //console.log("Previous")
            },
            onchange: () => {
                //console.log("Change")
            }
        }

        setCarousel(new Carousel(items, options))
    }, [])

    return (
        <div id="animation-carousel" className="relative p-3" datacarousel="static">
            {/* <!-- Carousel wrapper --> */}
            <div ref={slideWrapper} className="relative h-96 overflow-hidden md:h-96">
                {
                    images.map((img, index) => {
                        return (
                            <div key={index} className="hidden duration-200 ease-linear p-3" datacarouselitem="">
                                <div className="flex justify-center"><img src={img} className="rounded-lg block z-0 h-full" alt="..."/></div>
                            </div>
                        )
                    })
                }
            </div>
            {/* <!-- Slider indicators --> */}
            <div ref={indicators} className="absolute z-20 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                {
                    images.map((img,index) => {
                        return (
                            <button key={index} onClick={() => carousel.slideTo(index)} type="button" className="w-4 h-4 rounded-full" aria-current="true" aria-label={`Slide ${index+1}`}>-</button>
                        )
                    })
                }
            </div>
            {/* <!-- Slider controls --> */}
            <button onClick={() => carousel.prev()} type="button" className="absolute top-0 left-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" datacarouselprev="prev">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-amber-600 dark:bg-gray-800 group-hover:bg-sky-800 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button onClick={() => carousel.next()} type="button" className="absolute top-0 right-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" datacarouselnext="next">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-amber-600 dark:bg-gray-800 group-hover:bg-sky-800 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    )
}

export default Slideshow;