import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-black text-white px-6 py-16">
      <h4 className="bg-black text-white px-6 py-2 uppercase rounded-full">
        Target Audience
      </h4>

      <button className="bg-white text-black px-6 py-2 uppercase rounded-full ml-4">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;