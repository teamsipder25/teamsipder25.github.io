import React from "react";
import { motion } from "framer-motion";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Alex Arias",
      role: "Mechanical Engineering Major",
      img: "/imgs/team/aarias.jpeg",
      desc: "Designed most robotic arm manipulation algorithms and processes.",
    },
    {
      name: "Jack Bailey",
      role: "Mechanical Engineering Major",
      img: "/imgs/team/jbailey.jpeg",
      desc: "Designed sensor grip holder with Kinova Gen3 Arm.",
    },
    {
      name: "Zachary Bruffy",
      role: "Mechanical Engineering Major",
      img: "/imgs/team/zbruffy.jpeg",
      desc: "Designed sensor grip holder with Kinova Gen3 Arm.",
    },
    {
      name: "Branden Bulatao",
      role: "Computer Science Major",
      img: "/imgs/team/bbulatao.jpg",
      desc: "Designed the interface dashboard that integrates with the robotic system.",
    },
    {
      name: "Armand Rome",
      role: "Computer Engineering Major",
      img: "/imgs/team/arome.jpeg",
      desc: "Created all wired connections with the Ultra Tev Plus2 sensor and Kinova Gen3 Arm.",
    },
    {
      name: "Samantha Vossler",
      role: "Mechanical Engineering Major",
      img: "/imgs/team/svossler.jpg",
      desc: "Contributed to most business and marketing strategies and project management.",
    },
    {
      name: "Prof. Brendan Englot",
      role: "Faculty Advisor",
      img: "/imgs/team/benglot.jpg",
      desc: "Oversees the SIPDER team's progress.",
    },
    {
      name: "Jorge Rivera",
      role: "Lead Sponsor / President of EA Technology",
      img: "/imgs/team/jrivera.jpeg",
      desc: "Oversees the SIPDER team's progress.",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white px-6 py-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold text-center mb-10">MEET THE TEAM</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="card card-xs shadow-xl bg-gray-800 hover:shadow-blue-500 transition-shadow duration-300"
          >
            <figure className="px-6 pt-6">
              <img
                src={member.img}
                alt={member.name}
                className="rounded-lg h-48 w-48 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-blue-400">{member.name}</h2>
              <p className="text-sm text-gray-300 mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeamPage;
