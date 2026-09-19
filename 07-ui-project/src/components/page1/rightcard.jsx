
import React from "react";
import Rightcardcontent from "./rightcardcontent.jsx";

const RightCard = (props) => {
  return (
    <div className="grid w-full gap-6 md:grid-cols-3">
      <Rightcardcontent cards={props.cards} />
    </div>
  );
};

export default RightCard;

