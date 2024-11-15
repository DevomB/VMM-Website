import SectionWrapper from "../../SectionWrapper";

const Features = () => {
  const features = [
    {
      title: "Enhanced Medical Access",
      desc: "Provide tribal Kenyans with improved access to medical care by digitizing patient records and enabling medical volunteers to deliver efficient care.",
    },
    {
      title: "Real-Time Data Management",
      desc: "Facilitate immediate access to patient records for medical volunteers through our robust EMR system, supporting accurate diagnosis and treatment.",
    },
    {
      title: "Technical Excellence",
      desc: "Led by skilled developers, our system uses NextJS, Tailwind, and TypeScript for a seamless and user-friendly experience, making it easy for volunteers to navigate patient data.",
    },
    {
      title: "Data Security and Privacy",
      desc: "Ensure the confidentiality and integrity of sensitive medical data using secure backend technologies, including Express, Prisma ORM, and PostgreSQL.",
    },
    {
      title: "Scalability and Efficiency",
      desc: "Handle extensive medical data efficiently with over 10,000 database reads and 2,000 writes, allowing for seamless scalability to support more communities.",
    },
    {
      title: "Empowering Volunteers",
      desc: "Equip medical volunteers with a powerful, easy-to-use tool that enables them to serve patients more effectively, impacting the health of over 500 individuals and counting.",
    },
  ];

  return (
    <SectionWrapper className="-mt-10 -mb-10">
      <div className="custom-screen text-gray-600">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Vital Access: Healthcare for All
          </h2>
          <p>
            Bringing critical healthcare access to underserved communities with
            our advanced EMR system. By streamlining patient data management and
            supporting real-time access, we empower medical volunteers to
            deliver precise, timely care to tribal populations, creating a
            lasting impact on health and well-being.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-5">
                <div className="flex-none w-8 h-8 border rounded-full text-sky-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg text-gray-800 font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Features;
