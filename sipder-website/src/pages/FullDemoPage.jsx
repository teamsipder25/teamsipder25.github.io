import React from "react";

const FullDemoPage = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-4">Full System Demo</h1>
      <p className="text-lg text-center max-w-3xl mb-8">
        Watch our robotic inspection workflow in action—from sensor alignment and AprilTag detection
        to torque sensing and data capture.
      </p>

      <div className="w-full max-w-5xl mb-10 shadow-xl rounded-xl overflow-hidden">
        {/* Replace this <video> or <img> with your actual demo */}
        <video className="w-full h-auto" controls>
          <source src="/videos/sped-final-demo-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Or use a GIF:
        <img src="/imgs/full-demo.gif" alt="Full System Demo" className="w-full h-auto" /> 
        */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        <FeatureCard
          title="AprilTag-Based Arm Control"
          description="The arm detects AprilTags and corrects its pose using visual servoing in real time."
        />
        <FeatureCard
          title="Robust End-Effector"
          description="Our custom mount securely holds the UTP2 sensor, minimizing interference with the camera."
        />
        <FeatureCard
          title="Contact-Based Torque Sensing"
          description="The robot detects surface contact using torque sensing, ensuring precise alignment."
        />
        <FeatureCard
          title="Inspection Data Storage"
          description="Sensor readings are captured and stored in a user-friendly interface for easy access and review."
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-blue-400 transition-shadow duration-300">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-sm text-base-content">{description}</p>
  </div>
);

export default FullDemoPage;
