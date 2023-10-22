import React from "react";
import { FaReact } from "react-icons/fa";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
// import { CiLinkedin } from "react-icons/ci";

export default function Skils() {
  return (
    <div className="flex gap-5 bg-clip-text text-slate-400 cursor-pointer justify-center mt-[20px] ">
      <div>
        <p className="hover:text-sky-500 ">
          <TiHtml5 size={50} s />
        </p>
      </div>
      <div>
        <p className="hover:text-sky-500 ">
          <TiCss3 size={50} />
        </p>
      </div>
      <div>
        <p className=" hover:text-sky-500 ">
          <IoLogoJavascript size={45} />
        </p>
      </div>
      <div>
        <p className="hover:text-sky-500 ">
          <BiLogoTailwindCss size={50} />
        </p>
      </div>
      <div>
        <p className="hover:text-sky-500 ">
          <FaReact size={45} />
        </p>
      </div>
    </div>
  );
}
