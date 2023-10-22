import React from "react";

function Button() {
  return (
    <>
      <div className=" hidden md:flex  border-[2px] border-slate-300 hover:bg-sky-500 hover:text-black  py-1.5 px-5 mt font-medium uppercase ease-in hover:duration-300 mr-10 animate-bounce rounded">
        <button>Resume</button>
      </div>
    </>
  );
}

export default Button;
