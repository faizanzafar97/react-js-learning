import React from "react";
import { ArrowUpRight } from "lucide-react";

const Arrow = () => {
  return (
    <div className="group flex cursor-pointer items-end justify-start p-4 md:p-6">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-black/10 bg-[#f5f5f3] transition-all duration-500 group-hover:bg-black">
        <ArrowUpRight
          className="h-10 w-10 text-black transition-all duration-500 group-hover:text-white group-hover:rotate-45"
        />
      </div>
    </div>
  );
};

export default Arrow;