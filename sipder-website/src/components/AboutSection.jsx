import React from "react";
import Card from "./ui/Card";

function AboutPage() {
  const description =
    "We are a multidisciplinary team focused on developing innovative, \
            real-world robotic solutions for utility inspection and maintenance. \
            Backed by industry leaders and academic partners, our mission is to \
            bridge cutting-edge technology with field-ready applications. \
            From autonomous navigation to precision sensing, we’re creating tools \
            that empower utility operators to work more safely, efficiently, and intelligently.";

  return (
    <div className="border-t p-4">
      <h2 className="text-xl font-semibold">About</h2>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
}

export default AboutPage;
