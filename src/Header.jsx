import React from "react";
import './aurora.css';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <header className="flex justify-between items-center px-6 py-4 md:px-16 lg:px-32 w-screen">
      <div className="aurora-effect text-green-500 font-bold text-4xl">
        MEDXAI
      </div>

      <nav className="flex gap-6 md:gap-8 lg:gap-12">
        <div
          className="aurora-effect text-white text-lg md:text-xl hover:text-green-500 transition duration-300 cursor-pointer"
          onClick={() => navigate("/About")}
        >
          ABOUT
        </div>
        <div
          className="aurora-effect text-white text-lg md:text-xl hover:text-green-500 transition duration-300 cursor-pointer"
          onClick={() => navigate("/projects")}
        >
          PROJECTS
        </div>
        <div
          className="aurora-effect text-white text-lg md:text-xl hover:text-green-500 transition duration-300 cursor-pointer"
          onClick={() => navigate("/Blogs")}
        >
          BLOGS
        </div>
        <div
          className="aurora-effect text-white text-lg md:text-xl hover:text-green-500 transition duration-300 cursor-pointer"
          onClick={() => navigate("/Contact")}
        >
          CONTACT US
        </div>
      </nav>
    </header>
  );
}
