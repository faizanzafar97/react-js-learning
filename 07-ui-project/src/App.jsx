
import React from "react";
import Page1 from "./components/page1/page1.jsx";
import Page2 from "./components/page2/page2.jsx";

const App = () => {
  const cards = [
    {
      id: 1,
      label: "Audience",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.",
      button: "Satisfied",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
    },
    {
      id: 2,
      label: "Experience",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.",
      button: "Explore",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2576&auto=format&fit=crop",
    },
    {
      id: 3,
      label: "Results",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.",
      button: "Success",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2576&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-[#f5f5f3] text-black">
      <Page1 cards={cards} />
      <Page2 />
    </div>
  );
};

export default App;

