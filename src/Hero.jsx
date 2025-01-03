import React from "react";
import "./gradient.css";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useNavigate } from 'react-router-dom';

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
    <section className="relative  bg-black w-full min-h-screen overflow-hidden flex flex-col items-center justify-center px-6">
      {/* Background Spline */}
      

      {/* Foreground Content */}
      <motion.div
  className="relative max-w-4xl bg-opacity-70 bg-black p-8 rounded-xl shadow-lg  h-screen text-white z-10 overflow-hidden"
  initial={{ opacity: 0, y: 200 }} // Starts off-screen below
  animate={{ opacity: 1, y: 0 }} // Moves to the center
  transition={{ duration: 1.2, ease: "easeOut" }} // Smooth transition
>
  {/* Spline Background */}
  <div className="absolute inset-0 -z-10">
    <video src ="/Brain (2).mp4"
    className="video-background"
    autoPlay
    loop
    muted>

    </video>
  </div>

  {/* Foreground Content */}
  <div className="flex flex-col items-center justify-cente py-4 mt-8 py-12">
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">
  Transforming Healthcare through AI Innovation
</h1>

<p className="text-lg md:text-xl lg:text-2xl text-center text-gray-300 font-light">
  A global collective of students and professionals advancing healthcare with the power of Artificial Intelligence.
</p>

  </div>
 


</motion.div>


     
      
      
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
