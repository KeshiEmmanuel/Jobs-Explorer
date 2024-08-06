import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import ReactLogo from "../icons/ReactLogo";
import { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import CloseMenuIcon from "../icons/CloseMenuIcon";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <header className="w-[75%] mx-auto font-secondary">
      <nav className=" flex justify-between items-center">
        <Link to={"/"}>
          <h2 className="text-xl flex items-center gap-1 font-bold">
            <ReactLogo /> <span className="">Job Explorer</span>
          </h2>
        </Link>
        <ul className="hidden lg:flex gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              className="focus:border-b-2 focus:border-b-orange-400"
              key={link.label}
              to={link.link}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <button
          className="relative lg:hidden"
          onClick={() => setDropDown((prev) => !prev)}
        >
          <MenuIcon />
        </button>
        {dropDown && (
          <div className="left-0 pt-[100px] pl-10 h-screen absolute bg-orange-400 text-white top-0 z-30 w-[50%] lg:hidden">
            <ul
              onClick={() => setDropDown(false)}
              className="flex flex-col gap-5 font-semibold text-lg"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  className="focus:border-b-2 whitespace-nowrap focus:border-b-gray-700 focus:w-[10px]"
                  key={link.label}
                  to={link.link}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
            <button
              className="absolute top-5 right-3"
              onClick={() => setDropDown(false)}
            >
              <CloseMenuIcon />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
