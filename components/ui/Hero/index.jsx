import { useState } from "react"
import { HandCoinsIcon } from "../Icons/DonateIcon"

const Hero = () => {

    const [isHovered, setIsHovered] = useState(false);

    const navigation = [
        { title: "About us", path: "javascript:void(0)" },
        { title: "Partnering Physicians", path: "javascript:void(0)" },
        { title: "FAQs", path: "javascript:void(0)" },
    ]

    return (
        <>
            <br class="hidden sm:block"/>
            <section className="py-28">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-indigo-600 font-medium">
                            2000+ Successful Diagnoses
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                            Help us Provide Essential Healthcare to Rural Communities
                        </h2>
                        <br></br>
                        {/* <p>
                            Placeholder For Addl info
                        </p> */}
                        {/* <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a href="javascript:void(0)" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                                Our Newsletter
                            </a>
                            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                Access EMR Demo
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div> */}
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a
                                href="https://www.paypal.com/donate/?hosted_button_id=APSEPMV7BPV56"
                                className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none w-full flex items-center justify-center gap-2"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <span>DONATE NOW</span>
                                <HandCoinsIcon isHoveredOver={isHovered} />
                            </a>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src='mainHero.png'
                            className="w-full"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero