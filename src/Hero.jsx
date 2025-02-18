import React from "react";
import "./gradient.css";
import { motion } from "framer-motion";
// Removed unused imports: Spline and useNavigate

export function Hero() {
  const leftAnimation = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  const rightAnimation = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };

  const transitionConfig = { duration: 1, ease: "easeOut" };

  return (
    <section className="relative bg-black w-full min-h-screen overflow-hidden flex flex-col items-center justify-center px-6">
      {/* Foreground Content Container */}
      <motion.div
        className="relative max-w-4xl bg-black bg-opacity-70 p-8 rounded-xl shadow-lg h-screen text-white z-10 overflow-hidden backdrop-blur-lg"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Video Background */}
        <div className="absolute inset-0 -z-10">
          <video
            src="/Brain (2).mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        </div>

        {/* Hero Text */}
        <div className="flex flex-col items-center justify-center py-12 mt-8">
          <h1 className="text-xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-center bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
          TRANSFORMING HEALTHCARE THROUGH AI INNOVATION
          </h1>
          <p className="text-lg md:text-xl lg:text-3xl text-center text-gray-300 font-light max-w-3xl">
            A global collective of students and professionals advancing healthcare with the power of Artificial Intelligence.
          </p>
        </div>
      </motion.div>

      {/* Information Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-8">
        <motion.p
          className="text-lg md:text-md font-semibold text-gray-300 max-w-xl text-left"
          initial="hidden"
          animate="visible"
          variants={leftAnimation}
          transition={transitionConfig}
        >
          In 2024, MedXAI expanded beyond passive learning by introducing self-research internships aimed at promoting AI-driven automation within biological and health-related studies. We also began collaborating with postgraduate researchers and biotech startups.
        </motion.p>
        <motion.div
          className="w-full md:w-[250px]"
          initial="hidden"
          animate="visible"
          variants={rightAnimation}
          transition={transitionConfig}
        >
          <img
            src="/medx2.jpg"
            alt="Medx Collaboration"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Information Section 2 */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-8 mb-10">
        <motion.div
          className="w-full md:w-[250px]"
          initial="hidden"
          animate="visible"
          variants={leftAnimation}
          transition={transitionConfig}
        >
          <img
            src="/medx3.jpg"
            alt="Medx Future Events"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </motion.div>
        <motion.p
          className="text-lg md:text-md font-semibold text-gray-300 max-w-xl text-left"
          initial="hidden"
          animate="visible"
          variants={rightAnimation}
          transition={transitionConfig}
        >
          Looking ahead to 2025, MedXAI aims to host in-person events to deepen AI literacy through case-based explorations in biological sciences. These initiatives will foster knowledge-sharing and collaborative engagement in advancing healthcare.
        </motion.p>
      </div>
    </section>
  );
}
