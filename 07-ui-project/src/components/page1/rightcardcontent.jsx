
import React from "react";
import { ArrowRight } from "lucide-react";

const Rightcardcontent = (props) => {
  return (
    <>
      {props.cards.map((card) => (
        <div
          key={card.id}
          className="group relative min-h-125 w-full overflow-hidden rounded-3xl bg-black shadow-xl md:min-h-[96vh]"
        >
          {/* Background Image */}
          <img
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={card.image}
            alt={card.label}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Card Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
            {/* Top */}
            <div className="flex items-start justify-between">
              <h2 className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl font-semibold text-black shadow-sm">
                {card.id}
              </h2>

              <span className="rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
                {card.label}
              </span>
            </div>

            {/* Bottom Content */}
            <div>
              <p className="max-w-xl text-lg font-medium leading-normal text-white md:text-xl">
                {card.text}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex items-center gap-3">
                <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-black">
                  {card.button}
                </button>

                <button className="group/arrow flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:bg-black hover:text-white">
                  <ArrowRight
                    size={22}
                    className="transition-transform duration-300 group-hover/arrow:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Rightcardcontent;

