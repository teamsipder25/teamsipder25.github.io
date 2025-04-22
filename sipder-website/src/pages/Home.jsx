import { useState, useRef, useEffect } from "react";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Components
import Card from "../components/ui/Card";
import CardContent from "../components/ui/CardContent";
import AboutPage from "../components/AboutSection";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-6 px-6"> */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-0 text-white py-6 px-6 gap-10">
        <div>
          <motion.h1
            className="text-8xl font-bold font-mono text-gray-300 text-center max-w-2xl mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SIPDER
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 text-center max-w-2xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Substation Inspection and Partial Discharge Evaluation Robot
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
          <CardContent />
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="w-full mask-y-from-20% mask-y-to-90% "
          >
            <img src="../public/imgs/SIPDERLogo_V1_transparent.png" />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center min-h-0 text-white py-6 px-6 gap-10">
        <div>
          <motion.section
            id="about"
            ref={sectionRef}
            className={`transition-opacity py-4 duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <AboutPage />
          </motion.section>
        </div>
        <div>
          <motion.img
            src="../public/imgs/IMG_7731.JPG"
            alt="Substation"
            ref={sectionRef}
            className="py-4"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </>
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
