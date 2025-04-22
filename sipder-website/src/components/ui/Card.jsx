import { motion } from "framer-motion";

const Card = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-2xl shadow-lg p-6 max-w-sm transition-all duration-300"
    >
      <h3 className="text-xl text-black font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

export default Card;
