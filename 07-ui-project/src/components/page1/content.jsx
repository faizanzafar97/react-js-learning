import React from "react";
import LeftContent from "./leftcontent.jsx";
import RightContent from "./rightcontent.jsx";

const Content = () => {
  return (
    <div className="py-10 flex items-center gap-4 h-[90vh] bg-amber-100 ">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Content;