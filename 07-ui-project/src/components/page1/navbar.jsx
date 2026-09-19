import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-black/10 px-4 py-5 md:px-6">
      
      <h4 className="rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-transform duration-300 hover:scale-105">
        Target Audience
      </h4>

      <button className="group rounded-full border border-black/20 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-black hover:text-white">
        Get Started
        <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>

    </nav>
  );
};

export default Navbar;