import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "../Buttons/Button";
import Links from "../Menuinks/MenuLinks";

function Header() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className=" flex justify-between text-slate-50 items-center h-[15vh] max-w-[1240px] mx-auto px-4 rela">
        <img
          className=" md:mt-[20px] w-[120px] md:ml-[70px]  cursor-pointer sm:mt-[5px] mt-[30px]"
          src={logo}
          alt="logo"
        />

        <Links />
        <Button />

        <div onClick={handleNav} className="block md:hidden">
          {!nav ? (
            <AiOutlineClose size={25} cursor={"pointer"} />
          ) : (
            <AiOutlineMenu size={25} cursor={"pointer"} />
          )}
        </div>
        {/* Mobile viwe */}

        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[rgb(5,27,42)]  h-full ease-in-out duration-500  md:block"
              : "fixed left-[-100%]"
          }
        >
          <img
            className="w-[120px] ml-5 mt-5  cursor-pointer"
            src={logo}
            alt="logo"
          />
          <ul className="pt-5 uppercase ml-2">
            <li className="p-4  cursor-pointer flex border-t border-b border-gray-800">
              <Link to="#">Home</Link>
            </li>
            <li className="p-4 cursor-pointer flex border-b border-gray-800">
              <Link to="#">About</Link>
            </li>
            <li className="p-4  cursor-pointer flex border-b border-gray-800">
              <Link to="#">Education</Link>
            </li>
            <li className="p-4 cursor-pointer flex border-b border-gray-800">
              <Link to="#">Contact me</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
