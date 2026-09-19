import React from "react";
import Arrow from "./arrow.jsx";
import Hero from "./herotext.jsx";

const LeftContent = () => {
  return (
    <div className="flex w-full flex-col justify-between rounded-3xl bg-white p-4 shadow-sm lg:w-1/3">
      <Hero />
      <Arrow />
    </div>
  );
};

export default LeftContent;