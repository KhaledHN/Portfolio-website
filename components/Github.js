import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrBook } from "react-icons/gr";
import { FaRegStar, FaCodeFork } from "react-icons/fa6";

const Github = () => {
  return (
    <div className=" w-full h-[700px] pt-16 flex justify-center ">
      <div className="absolute xl:top-[900px] 2xl:hidden left-0 xl:w-[28%] xl:h-[32%] bg-[#845EC2] filter blur-[600px]"></div>
      <div className=" max-w-[1240px] h-full flex items-start ">
        <div className=" w-full ">
          <div className=" w-[1200px] flex items-center text-left ">
            <div className=" pr-3 text-[38px]  ">
              <FaGithub />
            </div>

            <p className=" text-4xl text-left tracking-tight text-white transition-all duration-100 ">
              Github Repositories
            </p>
          </div>
          <p className=" pt-2 text-gray-300 tracking-tight text-base transition-all duration-100 ">
            Some of my projects repositories, but not all of them :)
          </p>
          <div className=" w-full h-64 flex items-center overflow-x-scroll scrollbar-hide ">
            <div className=" flex item col-span-8 gap-5 ">
              <div className=" w-96 h-40 p-4 bg-zinc-900 hover:bg-zinc-800 rounded-lg ">
                <a href="" className=" w-96 h-40 absolute "></a>
                <div className=" flex text-lg text-white/90 items-center tracking-tight ">
                  <div className=" pr-[6px] ">
                    <GrBook />
                  </div>
                  <p>KhaledHN/portfolio-nextjs</p>
                  <div className=" pl-3 "></div>
                </div>
                <div className=" pt-2 ">
                  <p className=" text-gray-300 tracking-tight text-sm transition-all duration-100 ">
                    KhaledHN/portfolio-nextjs
                  </p>
                </div>
                <div className=" pt-12 flex justify-between ">
                  <div className=" flex items-center ">
                    <div className=" w-5 h-5 bg-blue-500 rounded-full "></div>
                    <p className=" pl-2 font-semibold text-[17px] tracking-tight text-white/70 ">
                      Typescript
                    </p>
                  </div>
                  <div className=" flex col-span-2 gap-2 ">
                    <div className=" flex items-center ">
                      <FaRegStar />
                      <p className=" pl-1 ">0</p>
                    </div>
                    <div className=" flex items-center ">
                      <FaCodeFork className=" scale-95" />
                      <p className=" pl-1 ">0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-96 h-40 p-4 bg-zinc-900 hover:bg-zinc-800 rounded-lg ">
                <a href="" className=" w-96 h-40 absolute "></a>
                <div className=" flex text-lg text-white/90 items-center tracking-tight ">
                  <div className=" pr-[6px] ">
                    <GrBook />
                  </div>
                  <p>KhaledHN/coockie.Espor</p>
                  <div className=" pl-3 "></div>
                </div>
                <div className=" pt-2 ">
                  <p className=" text-gray-300 tracking-tight text-sm transition-all duration-100 ">
                    KhaledHN/coockie.Espor
                  </p>
                </div>
                <div className=" pt-12 flex justify-between ">
                  <div className=" flex items-center ">
                    <div className=" w-5 h-5 bg-yellow-500 rounded-full "></div>
                    <p className=" pl-2 font-semibold text-[17px] tracking-tight text-white/70 ">
                      JavaScript
                    </p>
                  </div>
                  <div className=" flex col-span-2 gap-2 ">
                    <div className=" flex items-center ">
                      <FaRegStar />
                      <p className=" pl-1 ">0</p>
                    </div>
                    <div className=" flex items-center ">
                      <FaCodeFork className=" scale-95" />
                      <p className=" pl-1 ">0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-96 h-40 bg-zinc-900 rounded-lg ">
                <a
                  href=""
                  className=" w-96 h-40 bg-zinc-900/10 absolute rounded-lg "
                ></a>
                <div className=" absolute w-96 h-40 flex justify-center items-center ">
                  <div className=" text-center ">
                    <p className=" text-[23px] font-semibold text-indigo-600 ">
                      {" "}
                      Coming Soon
                    </p>
                  </div>
                </div>
                <div className=" p-4 ">
                  <div className=" flex text-lg text-white/90 items-center tracking-tight blur-sm ">
                    <div className=" pr-[6px] ">
                      <GrBook />
                    </div>
                    <p className=" ">KhaledHN/portfolio-khaled</p>
                    <div className=" pl-3  ">
                      <div className=" w-28 h-7 border border-gray-300 rounded-full flex justify-center items-center ">
                        <p className=" text-[16px] text-indigo-300 ">
                          This Website
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" pt-2 blur-sm ">
                    <p className=" text-gray-300 tracking-tight text-sm transition-all duration-100 ">
                      KhaledHN/portfolio-khaled
                    </p>
                  </div>
                  <div className=" pt-12 flex justify-between blur-sm ">
                    <div className=" flex items-center ">
                      <div className=" w-5 h-5 bg-yellow-500 rounded-full "></div>
                      <p className=" pl-2 font-semibold text-[17px] tracking-tight text-white/70 ">
                        JavaScript
                      </p>
                    </div>
                    <div className=" flex col-span-2 gap-2 ">
                      <div className=" flex items-center ">
                        <FaRegStar />
                        <p className=" pl-1 ">0</p>
                      </div>
                      <div className=" flex items-center ">
                        <FaCodeFork className=" scale-95" />
                        <p className=" pl-1 ">0</p>
                      </div>
                    </div>
                  </div>
                  <div className=" pt-[14px] flex justify-center items-center ">
                    <div>
                      <p className=" text-[18px] font-semibold text-white ">
                        {" "}
                        Designed by
                      </p>
                    </div>
                    <div className=" pl-1 pt-[3px] ">
                      <a
                        href="https://egee.dev/"
                        className=" text-[18px] text-yellow-400 font-bold cursor-pointer "
                      >
                        {" "}
                        EGE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;
