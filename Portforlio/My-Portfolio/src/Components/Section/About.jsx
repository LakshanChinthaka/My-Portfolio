import React from "react";
import ManIcon from "../../assets/ManIcon.png";

function About() {
  return (
    <div className="h-screen bg-slate-300">
      <h1 className="opecity-8 text-[50px] flex items-center justify-center">
        About
      </h1>
      <div className="flex flex-row">
        <div className="w-[600px] ml-[-100px] mt-[-20px]">
          <img src={ManIcon} />
        </div>
        <div>
          <h1>Name Section</h1>
        </div>
      </div>
    </div>
  );
}

export default About;
