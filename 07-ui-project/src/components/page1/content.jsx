
import React from "react";
import LeftContent from "./leftcontent.jsx";
import RightContent from "./rightcontent.jsx";

const Content = (props) => {
  return (
    <div className="flex min-h-[calc(100vh-100px)] flex-col gap-4 py-6 lg:flex-row lg:py-8">
      <LeftContent />
      <RightContent cards={props.cards} />
    </div>
  );
};

export default Content;

