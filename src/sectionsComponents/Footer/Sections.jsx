import React from "react";

export default function Sections() {
  return (
    <div className="text-white">
      <h2 className="text-xl font-semibold">Sections</h2>
      <ul className="flex flex-col opacity-70 text-lg">
        <a href="#Home">Home</a>
        <a href="#Skills">Skills</a>
        <a href="#Certificats">certificats</a>
        <a href="#Projects">projects</a>
      </ul>
    </div>
  );
}
