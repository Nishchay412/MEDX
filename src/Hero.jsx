import React from "react";
import "./gradient.css";
import { motion } from "framer-motion";

export function Hero() {
  const leftAnimation = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 }
  };

  const rightAnimation = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 }
  };

  const transitionConfig = { duration: 1, ease: "easeOut" };
  return (
    
    <section className="flex flex-col items-center justify-center mt-20 px-6 md:px-16 lg:px-32 text-center w-screen py-16">
      <motion.div 
        className="max-w-4xl"
        initial={{ opacity: 0, y: 200 }} // Starts off-screen below
        animate={{ opacity: 1, y: 0 }}   // Moves to the center
        transition={{ duration: 1.2, ease: "easeOut" }}  // Smooth transition
      >
        <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Transforming Healthcare through AI Innovation
        </h1>
        <p className="text-lg md:text-xl font-medium text-gray-300 mb-8">
          A global collective of students and professionals advancing healthcare 
          with the power of Artificial Intelligence.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-400 transition duration-300">
            Join Us
          </button>
          <button className="border-2 border-green-500 text-green-500 px-6 py-3 rounded-lg hover:bg-green-50 transition duration-300">
            Learn More
          </button>
        </div>
      </motion.div>

      <div className="flex justify-between items-center mt-16 gap-4">
        <motion.div
          style={{ width: '250px', height: 'auto' }}
          initial="hidden"
          animate="visible"
          variants={leftAnimation}
          transition={transitionConfig}
        >
          <img src="/medx1.jpg" alt="Medx Image" className="rounded-lg shadow-lg" />
        </motion.div>
        <motion.p
          className="text-lg md:text-md font-semibold text-gray-300 mt-4 max-w-xl text-left"
          initial="hidden"
          animate="visible"
          variants={rightAnimation}
          transition={transitionConfig}
        >
          MedXAI began in 2023 with a focused effort to conduct thorough literature reviews 
          across various medical disciplines, including cardiology, neuroscience, surgery, 
          and prosthetics. These insights were shared to educate and increase AI literacy 
          among our growing community.
        </motion.p>
      </div>

      {/* Section 2 */}
      <div className="flex justify-between items-center mt-16 gap-4">
        <motion.p
          className="text-lg md:text-md font-semibold text-gray-300 mt-4 max-w-xl text-left"
          initial="hidden"
          animate="visible"
          variants={leftAnimation}
          transition={transitionConfig}
        >
          In 2024, MedXAI expanded beyond passive learning by introducing self-research 
          internships aimed at promoting AI-driven automation within biological and health-related 
          studies. We also began collaborating with postgraduate researchers and biotech startups.
        </motion.p>
        <motion.div
          style={{ width: '250px', height: 'auto' }}
          initial="hidden"
          animate="visible"
          variants={rightAnimation}
          transition={transitionConfig}
        >
          <img src="/medx2.jpg" alt="Medx Image" className="rounded-lg shadow-lg" />
        </motion.div>
      </div>

      {/* Section 3 */}
      <div className="flex justify-between items-center mt-16 gap-4">
        <motion.div
          style={{ width: '250px', height: 'auto' }}
          initial="hidden"
          animate="visible"
          variants={leftAnimation}
          transition={transitionConfig}
        >
          <img src="/medx3.jpg" alt="Medx Image" className="rounded-lg shadow-lg" />
        </motion.div>
        <motion.p
          className="text-lg md:text-md font-semibold text-gray-300 mt-4 max-w-xl text-left"
          initial="hidden"
          animate="visible"
          variants={rightAnimation}
          transition={transitionConfig}
        >
          Looking ahead to 2025, MedXAI aims to host in-person events to deepen AI literacy 
          through case-based explorations in biological sciences. These initiatives will foster 
          knowledge-sharing and collaborative engagement in advancing healthcare.
        </motion.p>
      </div>
    </section>
  );
}
