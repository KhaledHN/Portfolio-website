import React from "react";
import Navbar from "./NavBar/Navbar";

const Main = () => {
  return (
    <div className=" w-full h-[650px] flex justify-center ">
      <Navbar isLight={false} />
      <div className="absolute top-0 left-0 xl:w-[32%] 2xl:w-[45%] 2xl:h-[45%] xl:h-[32%] bg-[#845EC2] filter blur-[600px]"></div>
      <div className="absolute bottom-0 right-0 xl:w-[30%] 2xl:w-[40%] 2xl:h-[40%] xl:h-[34%] bg-[#845EC2] filter blur-[600px]"></div>

      <div className=" max-w-[1240px] h-full flex items-start px-3 pt-32 xl:pt-64 ">
        <div className=" text-gray-400 text-center ">
          <p className=" text-[60px] font-semibold text-white transition-all duration-100 ">
            Hi, I'm <span className=" text-indigo-500 ">Khaled</span>
          </p>
          <p className=" text-[30px] font-bold text-white transition-all duration-100 ">
            a Front-End developer
          </p>
          <p className=" w-[360px] md:w-[600px] pt-5 text-md font-semibold text-white transition-all duration-100 ">
            Web developer skilled in React, Tailwind CSS, GitHub, and Vercel.
            Expert in dynamic UIs, state management, and efficient routing.
            Experienced in cloning websites. Actively contributing on GitHub,
            proficient in deploying applications with Vercel. Seeking new web
            development opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
