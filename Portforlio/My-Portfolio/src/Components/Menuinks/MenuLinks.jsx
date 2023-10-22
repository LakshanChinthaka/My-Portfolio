import React from "react";
import { Link } from "react-router-dom";

function Links() {
  return (
    <>
      <ul className="hidden md:flex uppercase ">
        <li>
          <Link
            className="p-6 cursor-pointer hover:text-sky-500 text-slate-300 "
            to="#"
          >
            Home
          </Link>
          <Link
            className="p-6 cursor-pointer hover:text-sky-500 text-slate-300"
            to="#"
          >
            About
          </Link>
          <Link
            className="p-6 cursor-pointer hover:text-sky-500 text-slate-300 "
            to="#"
          >
            Projects
          </Link>
          <Link
            className="p-6 cursor-pointer hover:text-sky-500 text-slate-300"
            to="#"
          >
            Contact me
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Links;
