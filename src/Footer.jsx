import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8 px-6 md:px-16 lg:px-32">
      <div className="flex justify-between gap-3 items-center">
        <div className="flex flex-col">
          <h1 className="aurora-effect text-green-500 font-bold text-4xl mb-4">
            MEDXAI
          </h1>
          <button className="py-2 px-4 text-green-500 font-bold text-2xl bg-transparent border-2 border-green-500 hover:bg-green-500 hover:text-black transition duration-300 rounded-lg">
            CONTACT US
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <a href="#home" className="hover:text-green-500 transition duration-300">HOME</a>
          <a href="#projects" className="hover:text-green-500 transition duration-300">PROJECTS</a>
          <a href="#blogs" className="hover:text-green-500 transition duration-300">BLOGS</a>
        </div>
      </div>
      <div className="flex justify-center">
        <img src ="/instagram1.png" className="cursor-pointer"> 

        </img>
        <img src ="/linkedin1.png" className="cursor-pointer"> 
        
        </img>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        © 2024 MedXAI. All rights reserved.
      </div>
    </footer>
  );
}
