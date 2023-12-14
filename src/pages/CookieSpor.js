import React from "react";
import Navbar from "../../components/NavBar/Navbar";

const CookieSpor = () => {
  return (
    <div className=" w-full h-[800px] flex justify-center ">
      <Navbar />
      <div className="absolute top-0 left-0 xl:w-[32%] 2xl:w-[45%] 2xl:h-[45%] xl:h-[32%] bg-[#845EC2] filter blur-[600px] opacity-50 "></div>
      <div className="absolute bottom-0 right-0 xl:w-[30%] 2xl:w-[40%] 2xl:h-[40%] xl:h-[34%] bg-[#845EC2] filter blur-[600px] opacity-40 "></div>

      <div className=" max-w-[1240px] h-full flex items-start px-4 pt-32 xl:pt-44 ">
        <div>
          <div className=" w-full xl:flex col-span-2 gap-32 ">
            <div className=" border border-gray-500 rounded-xl ">
              <img
                src="/assets/cookiespor.png"
                width={450}
                className=" rounded-xl "
              />
            </div>
            <div className=" text-left pt-2 xl:pt-0 ">
              <p className=" w-[360px] md:w-[600px] pt-5 text-2xl font-semibold text-white transition-all duration-100 ">
                Cookie E-Spor
              </p>
            </div>
          </div>
          <div className=" xl:flex ">
            <div className=" w-full xl:flex col-span-2 pt-8 ">
              <div className=" xl:w-[650px] ">
                <p className=" text-[35px] font-semibold text-gray-300 transition-all duration-100 ">
                  OverView
                </p>
                <p className=" text-md font-semibold text-gray-200 transition-all duration-100 pt-4 ">
                  I created a purposeful website using JavaScript and Tailwind
                  CSS, streamlining the process for our school's online games
                  competition. Participants simply enter their usernames and
                  Discord names, with an additional page dedicated to rules.
                  This minimalist design ensures a straightforward user
                  experience, focusing on essential information for smooth
                  participation in the competition.
                </p>
                <div className=" hidden xl:flex gap-5 pt-10 ">
                  <button className=" w-24 h-9 bg-zinc-800 hover:bg-zinc-900 text-white font-semibold rounded-md ">
                    <a href="https://cookiespor.vercel.app/">Demo</a>
                  </button>
                  <button className=" w-24 h-9 bg-zinc-800 hover:bg-zinc-900 text-white font-semibold rounded-md ">
                    <a href="https://github.com/KhaledHN/coockie.Espor">Code</a>
                  </button>
                </div>
              </div>
            </div>
            <div className=" pt-10 xl:pt-0 ">
              <div className=" w-[230px] h-[300px] bg-zinc-500 rounded-lg ">
                <div className=" w-full h-full p-5 ">
                  <p className=" text-center text-xl font-semibold text-gray-200 transition-all duration-100 ">
                    Technologies
                  </p>
                  <div className=" pt-5 pl-1 ">
                    <li className=" pb-3 font-semibold ">JavaScript</li>
                    <li className=" pb-3 font-semibold ">Next JS</li>
                    <li className=" pb-3 font-semibold ">Tailwind</li>
                    <li>Formspree</li>
                  </div>
                </div>
              </div>
              <div className=" flex xl:hidden gap-5 pt-5 pb-12 pl-2 ">
                <button className=" w-24 h-9 bg-zinc-800 hover:bg-zinc-900 text-white font-semibold rounded-md ">
                  <a href="https://cookiespor.vercel.app/">Demo</a>
                </button>
                <button className=" w-24 h-9 bg-zinc-800 hover:bg-zinc-900 text-white font-semibold rounded-md ">
                  <a href="https://github.com/KhaledHN/coockie.Espor">Code</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieSpor;
