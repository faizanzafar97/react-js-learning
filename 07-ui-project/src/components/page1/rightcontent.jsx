
import React from "react";
import RightCard from "./rightcard.jsx";

const RightContent = (props) => {
  return (
    <div className="flex w-full items-center justify-center rounded-3xl bg-[#d9ff00] p-4 md:p-6 lg:w-2/3">
      <RightCard cards={props.cards} />
    </div>
  );
};

export default RightContent;

