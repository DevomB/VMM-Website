import React from "react";
import TeamCard from "./TeamCard/TeamCard";

const AboutUs = () => {
  const team = [
    {
      avatar:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      name: "Martiana Dialan",
      title: "Product Designer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      linkedin: "javascript:void(0)",
      github: "javascript:void(0)",
      email: "martiana@example.com",
    },
    // Add other team members here...
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Meet our team of Engineers, Designers, and Product Managers.
          </h3>
          <p className="text-gray-600 mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {team.map((member, idx) => (
            <TeamCard
              key={idx}
              name={member.name}
              role={member.title}
              image={member.avatar}
              github={member.github}
              linkedin={member.linkedin}
              email={member.email}
            />
          ))}
        </div>
    </div>
    </section >
  );
};

export default AboutUs;
