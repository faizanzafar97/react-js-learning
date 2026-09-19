import React from "react";

const HeroText = () => {
  return (
    <div className="max-w-xl p-4 md:p-6">
      
      <span className="mb-6 inline-block rounded-full border border-black/10 bg-[#f5f5f3] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-600">
        Customer Strategy
      </span>

      <h3 className="text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-black sm:text-5xl md:text-6xl">
        Prospective
        <br />
        <span className="text-gray-400">Customer</span>
        <br />
        Segmentation
      </h3>

      <p className="mt-7 max-w-md text-base font-medium leading-relaxed text-gray-500 md:text-lg">
        Identifying and categorizing potential customers based on their
        characteristics and behaviors.
      </p>

    </div>
  );
};

export default HeroText;