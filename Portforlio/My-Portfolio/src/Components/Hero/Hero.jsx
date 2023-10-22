import React from "react";
import Round from "../RoundEffect/RoundEffect";
import { useTypewriter } from "react-simple-typewriter";
import SocialLinks from "../SocialLinks/SocialLinks";
import Skils from "../Skils/Skils";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["Lakshan Chinthaka "],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 100,
    deleteSpeed: 100,
  });

  return (
    <div>
      <div className=" text-slate-200 max-w-[850px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="">
          <div className="h-[50px] flex items-center justify-center">
            <h1 className="mb-[20px] md:text-[60px] sm:text-6xl text-4xl sm:text-6xl text-slate-300 font-bold mr-5">
              I'am
            </h1>
            <h1 className=" h-[50px] md:text-[60px] text-4xl sm:text-6xl  font-black bg-clip-text text-transparent  bg-gradient-to-r from-indigo-400 from-10% via-sky-500 via-30% to-emerald-500 to-90% transition duration-500 font-mono">
              {typeEffect}
            </h1>
          </div>
          <p className="text-slate-400 md:text-[25px] mt-[10px] text-[17px] px-[10px] font-serif">
            Welcome to My Web Developer Portfolio!
          </p>
          <p className="text-slate-400 md:text-[20px] mt-[10px] text-[17px] px-[10px] font-serif">
            I am a Passionate and Innovative Web Developer with a keen eye for
            Design and a Strong Commitment to Creating Engaging, User-Friendly
            Websites.
          </p>
          <h1 className="h-[80px] md:text-[50px] text-5xl sm:text-6xl mt-9 font-black bg-clip-text text-transparent transition duration-500 animate-bounce bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 font-serif ">
            Web Developer
          </h1>
          {/* <SocialLinks /> */}
          <Skils />
        </div>
      </div>

      <Round />
    </div>
  );
}

export default Hero;
