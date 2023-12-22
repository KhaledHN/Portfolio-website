import React from "react";

const Footer = () => {
  return (
    <div className=" w-full h-20 bg-black ">
      <div className=" px-8 md:px-32 h-full flex items-center justify-between ">
        <div>
          <p>Copyright © 2023 Khaled</p>
        </div>
        <div className=" text-center ">
          <p>Developed by Khaled</p>
          <a href="" className=" hidden md:flex ">
            Designed by <span className=" pl-[4px] text-yellow-400 "> EGE</span>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
