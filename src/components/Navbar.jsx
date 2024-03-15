import React, { useContext, useState } from "react";
import SignUp from "./Auth/SignUp";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { Store } from "../Context/ContextApi";
import { Framer } from "../Animation/Framer";
import { motion } from "framer-motion";
function Navbar() {
  const { TextAnimation } = Framer;

  const { CurrentUser, SignOutMethod } = useContext(Store);
  const [NavButton, setNavButton] = useState("Home");

  const HandleOnSignOutClick = () => {
    SignOutMethod();
  };

  return (
    <div className="drawer z-20 text-[#81ff61] ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-[#14171b]  fixed top-0 px-8 BoxShadow">
          <div className="flex-none  md:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block text-[#81ff61] w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <motion.div
            variants={TextAnimation}
            initial={"hidden"}
            animate={"visible"}
            className="flex-1 tracking-[8px] Roboto font-semibold text-2xl sm:text-3xl text-[#81ff61] px- mx-5"
          >
            RIZE-X
          </motion.div>
          <div className="flex-none space-x-9 ">
            <span className="hidden md:block space-x-9">
              <Link
                onClick={() => setNavButton("HOME")}
                to="/"
                className={` NavLinks ${NavButton === "HOME" ? "Border" : ""}`}
              >
                HOME
              </Link>
              <Link
                onClick={() => setNavButton("CHAT ROOM")}
                to="/chatbox"
                className={` NavLinks ${
                  NavButton === "CHAT ROOM" ? "Border" : ""
                }`}
              >
                CHAT ROOM
              </Link>
            </span>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="Link"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="RIZE X"
                    src="https://imagetolink.com/ib/aUGH3OxYJ4.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 space-y-3 bg-[#282c24] shadow rounded-md Border w-44"
              >
                <li>
                  <a
                    href="https://devshivam03.netlify.app/"
                    className="justify-between text-xl"
                  >
                    DEVELOPER
                  </a>
                </li>
                <li>
                  {!CurrentUser && (
                    <span>
                      <SignUp />
                    </span>
                  )}
                </li>
                <li>
                  <button onClick={HandleOnSignOutClick} className="text-xl">
                    LOGOUT <IoLogOutOutline />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-8 w-80 text-xl space-y-9 min-h-full bg-[#14171b]">
          <Link
            onClick={() => setNavButton("HOME")}
            to="/"
            className={` NavLinks ${NavButton === "HOME" ? "Border" : ""}`}
          >
            <a>HOME</a>
          </Link>
          <Link
            onClick={() => setNavButton("CHAT ROOM")}
            to="/chatbox"
            className={` NavLinks ${NavButton === "CHAT ROOM" ? "Border" : ""}`}
          >
            <a>CHAT ROOM</a>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
