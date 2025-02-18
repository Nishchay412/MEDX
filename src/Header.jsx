import React from "react";
import './aurora.css';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <header className="flex justify-between items-center px-6 py-4 md:px-16 lg:px-32 w-screen">
      <div className="flex gap-2">
     
      <div className="font-bold text-4xl bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">
 
        MEDXAI
      </div>
      <img src="/logo.png"className="w-12 h-12">
      </img>
      </div>
      

      <nav className="flex gap-6 md:gap-8 lg:gap-12">
      <div
  className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent text-lg md:text-xl hover:text-green-500 transition duration-300 cursor-pointer"
  onClick={() => navigate("/")}
>
  Home
</div>
      
<div
  className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent text-lg md:text-xl hover:text-green-500 transition duration-300 cursor-pointer"
  onClick={() => navigate("/projects")}
>
  PROJECTS
</div>
<div
  className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent text-lg md:text-xl hover:text-green-500 transition duration-300 cursor-pointer"
  onClick={() => navigate("/socials")}
>
  SOCIALS
</div>
<div
  className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent text-lg md:text-xl hover:text-green-500 transition duration-300 cursor-pointer"
  onClick={() => navigate("/Contact")}
>
  CONTACT US
</div>

      </nav>
    </header>
  );
}
