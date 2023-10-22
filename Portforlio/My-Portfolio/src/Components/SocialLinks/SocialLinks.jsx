import React from "react";
import { CiFacebook } from "react-icons/ci";
import { PiMessengerLogoLight, PiGithubLogoLight } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";

function SocialLinks() {
  return (
    <>
      <div className="flex gap-5 bg-clip-text text-slate-400 cursor-pointer justify-center mt-[20px] ">
        <div>
          <a href="#" className="hover:text-sky-500 ">
            <CiFacebook size={50} s />
          </a>
        </div>
        <div>
          <a href="#" className="hover:text-sky-500 ">
            <PiMessengerLogoLight size={50} />
          </a>
        </div>
        <div>
          <a
            href="https://tailwindcss.com/docs/animation"
            className=" hover:text-sky-500 "
          >
            <CiLinkedin size={50} />
          </a>
        </div>
        <div>
          <a href="#" className="hover:text-sky-500 ">
            <PiGithubLogoLight size={45} />
          </a>
        </div>
      </div>
    </>
  );
}

export default SocialLinks;
