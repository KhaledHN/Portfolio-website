import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaRegComment } from "react-icons/fa6";
import { TiHomeOutline } from "react-icons/ti";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DrawerNav from "./DrawerNav";

const Navbar = ({ isLight }) => {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 z-[100] duration-200">
      <div className=" w-full h-full flex justify-center pt-4 px-1 2xl:px-16">
        <div className=" w-[90%] md:max-w-[1300px] h-[100%] border border-gray-700 backdrop-blur-sm bg-white/10 rounded-xl pl-5 flex justify-between lg:justify-around items-center ">
          <div className=" md:pl-0 ">
            <h1 className=" text-indigo-500 pb-1 text-[40px] font-semibold ">
              Khaled
            </h1>
          </div>

          <div className=" flex">
            <ul className=" pr-5 hidden lg:flex">
              <Link href="/">
                <li className="ml-10 font-normal font-circularstd tracking-tight transition-all duration-100 flex items-center ">
                  <div className=" pr-1 ">
                    <TiHomeOutline />
                  </div>
                  Home
                </li>
              </Link>
              <Link href="/Projects">
                <li className="ml-10 font-normal font-circularstd tracking-tight transition-all duration-100 flex items-center ">
                  <div className=" pr-1 ">
                    <LiaProjectDiagramSolid className=" scale-110 " />
                  </div>
                  Projects
                </li>
              </Link>
              <Link href="/Contact">
                <li className="ml-10 font-normal font-circularstd tracking-tight transition-all duration-100 flex items-center ">
                  <div className=" pr-1 ">
                    <FaRegComment />
                  </div>
                  Contact
                </li>
              </Link>
            </ul>
            <div onClick={handleNav} className=" text-[#7C3AED] pr-5 lg:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>

          <div className=" hidden lg:flex gap-3 ">
            <a
              href="https://github.com/KhaledHN"
              className=" w-8 h-8 bg-white/30 rounded-full flex justify-center items-center "
            >
              <FaGithub className=" scale-110 " />
            </a>
            <a
              href=""
              className=" w-8 h-8 bg-white/30 rounded-full flex justify-center items-center "
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* drawer menu */}
      <DrawerNav nav={nav} handleNav={handleNav} />
    </div>
  );
};

export default Navbar;
