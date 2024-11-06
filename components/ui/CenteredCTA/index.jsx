import SectionWrapper from "../../SectionWrapper";

const CenteredCTA = () => {
    const stats = [
        {
        data: "10k",
        title: "Diagnosises",
        },
        {
        data: "2k",
        title: "Patients",
        },
        {
        data: "3",
        title: "Offices",
        },
        {
        data: "$25k",
        title: "Treatments",
        },
    ];

    return (
        <section className="custom-screen text-center -mb-10 -mt-10">
        <div className="max-w-2xl md:mx-auto">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Cut your project management time by 50% and start focusing on what
            </h2>
        </div>
        <SectionWrapper>
            <div className="custom-screen flex justify-center sm:block -mt-16">
            <ul className="inline-grid grid-cols-2 items-center justify-center gap-x-12 gap-y-10 sm:flex sm:flex-wrap md:gap-x-24">
                {stats.map((item, idx) => (
                <li key={idx} className="text-center">
                    <h3 className="text-4xl text-gray-800 font-semibold">
                    {item.data}
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
