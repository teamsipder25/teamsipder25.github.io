import { useState, useRef, useEffect } from "react";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Components
import Card from "../components/ui/Card";
import CardContent from "../components/ui/CardContent";
import AboutPage from "../components/AboutSection";
import OurSponsers from "../components/OurSponsers";
import WhatWeDoSection from "../components/WhatWeDoSection";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const whatToDoRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    if (whatToDoRef.current) {
      observer.observe(whatToDoRef.current);
    }
    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (whatToDoRef.current) observer.unobserve(whatToDoRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
    };
  }, []);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1.3 }}
    >
      {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-6 px-6"> */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-0 text-white py-6 px-6 gap-10">
        <div>
          {/* <motion.h1
            className="text-8xl font-bold font-mono text-gray-300 text-center max-w-2xl mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SIPDER
          </motion.h1> */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full mask-y-from-10% mask-y-to-95% "
          >
            <img src="../imgs/SIPDERLogo_V1_transparent.png" />
          </motion.div>
          <motion.p
            className="text-2xl font-bold text-gray-300 text-center max-w-2xl mt-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Substation Inspection and Partial Discharge Evaluation Robot
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <CardContent />
          </motion.div>
        </div>
        <div>
          <motion.img
            src="../imgs/DSCF2004.JPG"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="w-200 rounded rounded-2xl"
          />
          {/* <img src="../imgs/SIPDERLogo_V1_transparent.png" /> */}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center min-h-0 text-white py-6 px-6 gap-10">
        <div>
          <motion.section
            id="mission"
            ref={aboutRef}
            className={`transition-opacity py-4 duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <AboutPage />
          </motion.section>
        </div>
        {/* <div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="w-full mask-y-from-20% mask-y-to-90% "
          >
            <img src="../imgs/SIPDERLogo_V1_transparent.png" />
          </motion.div>
        </div> */}
      </div>

      <div>
        <motion.section
          id="what-we-do"
          ref={whatToDoRef}
          className={`transition-opacity py-4 duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <WhatWeDoSection />
        </motion.section>
      </div>

      <div>
        <motion.section
          id="sponsers"
          ref={teamRef}
          className={`transition-opacity py-4 duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <OurSponsers />
        </motion.section>
      </div>
    </motion.div>
  );
};

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
      <CardContent>
        <div className="text-blue-500 text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}

export default Home;
