import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-950 py-8 px-6 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row justify-between gap-6 items-center">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent font-bold text-4xl mb-4">
            MEDXAI
          </h1>
          <button
            className="py-2 px-4 font-bold text-2xl border-2 border-green-500 
              bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent 
              hover:bg-green-500 hover:text-black transition duration-300 rounded-lg"
          >
            CONTACT US
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center md:items-end">
          <a
            href="#home"
            className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent 
              text-lg md:text-xl hover:text-green-500 transition duration-300 cursor-pointer"
          >
            HOME
          </a>
          <a
            href="#projects"
            className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent 
              text-lg md:text-xl hover:text-green-500 transition duration-300 cursor-pointer"
          >
            PROJECTS
          </a>
          <a
            href="#blogs"
            className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent 
              text-lg md:text-xl hover:text-green-500 transition duration-300 cursor-pointer"
          >
            BLOGS
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-4">
        <img src="/instagram1.png" alt="Instagram" className="cursor-pointer" />
        <img src="/linkedin1.png" alt="LinkedIn" className="cursor-pointer" />
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        © 2024 MedXAI. All rights reserved.
      </div>
    </footer>
  );
}