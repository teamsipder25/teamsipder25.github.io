import React from "react";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <motion.h1
        className="text-5xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to SIPDER
      </motion.h1>
      <motion.p
        className="text-lg text-gray-300 text-center max-w-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        A revolutionary platform designed for seamless data acquisition, processing, and
        visualization. Experience the future of sensor-based applications.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <button className="px-6 py-3 text-lg rounded-2xl bg-blue-500 hover:bg-blue-600 transition-all">
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default Home;
