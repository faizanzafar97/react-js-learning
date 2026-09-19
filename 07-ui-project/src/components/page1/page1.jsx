
import React from "react";
import Navbar from "./navbar.jsx";
import Content from "./content.jsx";

const Page1 = (props) => {
  return (
    <section className="min-h-screen w-full bg-[#f5f5f3] px-4 py-4 text-black">
      <Navbar />
      <Content cards={props.cards} />
    </section>
  );
};

export default Page1;

