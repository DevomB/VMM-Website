"use client";
import dynamic from "next/dynamic";
import SectionWrapper from "../../SectionWrapper";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), { ssr: false });

const CenteredCTA = () => {
    const stats = [
        {
            data: "2000",
            title: "Diagnoses",
        },
        {
            data: "2000",
            title: "Patients",
        },
        {
            data: "25",
            title: "Clinics",
        },
        {
            data: "1500",
            title: "Treatments",
        },
    ];

    return (
        <section className="custom-screen text-center -mb-10 -mt-10">
            <div className="max-w-2xl md:mx-auto">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Our Legacy of Healing
                </h2>
            </div>
            <SectionWrapper>
                <div className="custom-screen flex justify-center sm:block -mt-16">
                    <ul className="inline-grid grid-cols-2 items-center justify-center gap-x-12 gap-y-10 sm:flex sm:flex-wrap md:gap-x-24">
                        {stats.map((item, idx) => (
                            <li key={idx} className="text-center">
                                <h3 className="text-4xl text-gray-800 font-semibold flex flex-row justify-center items-center">
                                    <AnimatedNumbers
                                        includeComma
                                        animateToNumber={parseInt(item.data)}
                                        locale="en-US"
                                        className="text-gray-800 text-4xl font-semibold"
                                        configs={(_, index) => ({
                                            mass: 1,
                                            friction: 100,
                                            tension: 140 * (index + 1),
                                        })}
                                    />
                                </h3>
                                <p className="mt-3 text-gray-600 font-medium">{item.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </SectionWrapper>
        </section>
    );
};

export default CenteredCTA;
