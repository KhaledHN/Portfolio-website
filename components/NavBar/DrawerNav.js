import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function DrawerNav(props) {
  const { nav, handleNav } = props;

  return (
    <div
      className={
        nav ? "md:hidden fixed right-0 top-0 w-full h-full bg-black/40 " : ""
      }
    >
      <div
        className={
          nav
            ? "fixed right-0 top-0 w-[80%] sm:w-[60%] md:w-[45%] h-full backdrop-blur-sm bg-black/40 p-10 ease-in duration-500"
            : "fixed right-[-100%] w-[75%] top-0 h-full p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center pt-4 justify-between">
            <div />
            <div
              onClick={handleNav}
              className="rounded-[15px] bg-gray-700 text-white shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div>
            <ul className="py-4  pt-20 font-inter text-right text-base font-base leading-norma flex-col">
              <Link href="/">
                <li onClick={handleNav} className="py-4 text-[18px] text-bold ">
                  Home
                </li>
              </Link>
              <Link href="/Projects">
                <li onClick={handleNav} className="py-4 text-[18px] text-bold ">
                  Projects
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={handleNav} className="py-4 text-[18px] text-bold ">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrawerNav;
