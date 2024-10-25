import React from "react";
import './aurora.css';

export function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 md:px-16 lg:px-32 w-screen "> {/* Black background */}
      <div className="aurora-effect text-green-500 font-bold text-4xl"> {/* Green text */}
        MEDXAI
      </div>
      
      <nav className="flex gap-6 md:gap-8 lg:gap-12">
        <div className="aurora-effect text-white text-lg md:text-xl hover:text-green-500 transition duration-300 cursor-pointer"> {/* White text with green hover */}
          ABOUT
        </div>
        <div className="aurora-effect text-white text-lg md:text-xl hover:text-green-500 transition duration-300 cursor-pointer">
          PROJECTS
        </div>
        <div className="aurora-effect text-white text-lg md:text-xl hover:text-green-500 transition duration-300 cursor-pointer">
          BLOGS
        </div>
        <div className="aurora-effect text-white text-lg md:text-xl hover:text-green-500 transition duration-300 cursor-pointer">
         CONTACT US
        </div>
      </nav>
    </header>
  );
}
