import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import { FaLink } from "react-icons/fa";

const Projects = () => {
  return (
    <div className=" w-full h-[2200px] flex justify-center ">
      <div className="absolute top-0 left-0 xl:w-[32%] 2xl:w-[45%] 2xl:h-[45%] xl:h-[32%] bg-[#845EC2] filter blur-[600px] opacity- "></div>
      <div className="absolute bottom-0 right-0 xl:w-[30%] 2xl:w-[40%] 2xl:h-[40%] xl:h-[34%] bg-[#845EC2] filter blur-[600px] "></div>
      <Navbar />
      <div className=" max-w-[1240px] h-full flex items-start px-3 pt-32 xl:pt-64 ">
        <div className=" w-full px-4 ">
          <div className=" xl:w-[1200px] flex items-center text-left ">
            <p className=" text-4xl text-left tracking-tight text-white transition-all duration-100 ">
              Projects
            </p>
          </div>
          <p className=" pt-2 text-gray-300 tracking-tight text-base transition-all duration-100 ">
            Some completed projects and continue to work on new ones.
          </p>
          <div className=" w-full h-[2000px] xl:h-96 flex items-center justify-center xl:justify-normal overflow-x-scroll scrollbar-hide pt-10 xl:pt-0 ">
            <div className=" xl:flex col-span-8 gap-6 scale-110 xl:scale-100 ">
              <div className=" pb-12 xl:pb-0 ">
                <div className=" w-64 h-[300px] p-4 bg-zinc-900 hover:bg-zinc-800 rounded-lg ">
                  <a
                    href="/HazemKhaled"
                    className=" w-64 h-[300px] absolute "
                  ></a>
                  <div className="  ">
                    <img
                      src="/assets/Hazemkhaled.com.png"
                      className=" rounded-md opacity-100 "
                    />
                  </div>
                  <div className=" pt-5 pl-[6px] ">
                    <p className=" text-lg text-gray-300 tracking-tight ">
                      Hazem Khaled
                    </p>
                    <p className=" text-black/70 dark:text-white/60 text-[13px] tracking-tight mt-1 break-all h-6 text-start ">
                      A simple portfolio for Hazem Khaled.
                    </p>
                  </div>
                  <div className=" flex items-center justify-between pl-[6px] pt-10 ">
                    <div className=" flex items-center ">
                      <div className=" pr-[6px] ">
                        <FaLink />
                      </div>
                      <a href="https://www.hazemkhaled.com/">hazemkhaled.com</a>
                    </div>
                    <div className=" pr-1 ">
                      <img
                        src="/assets/typescript (1).png"
                        width={24}
                        height={24}
                        className=" rounded-[2px] "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" pb-12 xl:pb-0 ">
                <div className=" w-64 h-[300px] p-4 bg-zinc-900 hover:bg-zinc-800 rounded-lg ">
                  <a
                    href="/CookieSpor"
                    className=" w-64 h-[300px] absolute "
                  ></a>
                  <div className="  ">
                    <img
                      src="/assets/cookiespor.png"
                      className=" rounded-md opacity-100 "
                    />
                  </div>
                  <div className=" pt-5 pl-[6px] ">
                    <p className=" text-lg text-gray-300 tracking-tight ">
                      Cookie Sports
                    </p>
                    <p className=" text-black/70 dark:text-white/60 text-[13px] tracking-tight mt-1 break-all h-6 text-start ">
                      A website to enter games competition in the school.
                    </p>
                  </div>
                  <div className=" flex items-center justify-between pl-[6px] pt-10 ">
                    <div className=" flex items-center ">
                      <div className=" pr-[6px] ">
                        <FaLink />
                      </div>
                      <a href="/CookieSpor">cookiespor.vercel.app</a>
                    </div>
                    <div className=" pr-1 ">
                      <img
                        src="/assets/javascript.png"
                        width={24}
                        height={24}
                        className=" rounded-[2px] "
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" pb-12 xl:pb-0 ">
                <div className=" w-64 h-[300px]  bg-zinc-900 rounded-lg ">
                  <div className=" absolute w-64 h-[300px] flex justify-center items-center ">
                    <div className=" text-center ">
                      <p className=" text-[25px] font-semibold text-indigo-600 ">
                        {" "}
                        Coming Soon
                      </p>
                    </div>
                  </div>
                  <div className=" blur-sm p-4 ">
                    <div className=" absolute w-64 h-[300px] "></div>
                    <div className="  ">
                      <img
                        src="/assets/portfolio-2.png"
                        className=" rounded-md opacity-100 "
                      />
                    </div>
                    <div className=" pt-5 pl-[6px] ">
                      <p className=" text-lg text-gray-300 tracking-tight ">
                        Khaled Hazem
                      </p>
                      <p className=" text-black/70 dark:text-white/60 text-[13px] tracking-tight mt-1 break-all h-6 text-start ">
                        A portfolio for mySelf
                      </p>
                    </div>
                    <div className=" flex items-center justify-between pl-[6px] pt-10 ">
                      <div className=" flex items-center ">
                        <div className=" pr-[6px] ">
                          <FaLink />
                        </div>
                        <a>ThisWebsite</a>
                      </div>
                      <div className=" pr-1 ">
                        <img
                          src="/assets/javascript.png"
                          width={24}
                          height={24}
                          className=" rounded-[2px] "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" pb-12 xl:pb-0 ">
                <div className=" w-64 h-[300px]  bg-zinc-900 rounded-lg ">
                  <div className=" absolute w-64 h-[300px] flex justify-center items-center ">
                    <div className=" text-center ">
                      <p className=" text-[25px] font-semibold text-indigo-600 ">
                        {" "}
                        Coming Soon
                      </p>
                    </div>
                  </div>
                  <div className=" blur-sm p-4 ">
                    <div className=" absolute w-64 h-[300px] "></div>
                    <div className="  ">
                      <img
                        src="/assets/pamoon-1.png"
                        className=" rounded-md opacity-100 "
                      />
                    </div>
                    <div className=" pt-5 pl-[6px] ">
                      <p className=" text-lg text-gray-300 tracking-tight ">
                        Template ;)
                      </p>
                      <p className=" text-black/70 dark:text-white/60 text-[13px] tracking-tight mt-1 break-all h-6 text-start ">
                        A template in...
                      </p>
                    </div>
                    <div className=" flex items-center justify-between pl-[6px] pt-10 ">
                      <div className=" flex items-center ">
                        <div className=" pr-[6px] ">
                          <FaLink />
                        </div>
                        <a>sitedomain.com</a>
                      </div>
                      <div className=" pr-1 ">
                        <img
                          src="/assets/javascript.png"
                          width={24}
                          height={24}
                          className=" rounded-[2px] "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-12 xl:pb-0 ">
                <div className=" w-64 h-[300px]  bg-zinc-900 rounded-lg ">
                  <div className=" absolute w-64 h-[300px] flex justify-center items-center ">
                    <div className=" text-center ">
                      <p className=" text-[25px] font-semibold text-indigo-600 ">
                        {" "}
                        Coming Soon
                      </p>
                    </div>
                  </div>
                  <div className=" blur-sm p-4 ">
                    <div className=" absolute w-64 h-[300px] "></div>
                    <div className="  ">
                      <img
                        src="/assets/pamoon-2.png"
                        className=" rounded-md opacity-100 "
                      />
                    </div>
                    <div className=" pt-5 pl-[6px] ">
                      <p className=" text-lg text-gray-300 tracking-tight ">
                        Template 2 ;)
                      </p>
                      <p className=" text-black/70 dark:text-white/60 text-[13px] tracking-tight mt-1 break-all h-6 text-start ">
                        A template in...
                      </p>
                    </div>
                    <div className=" flex items-center justify-between pl-[6px] pt-10 ">
                      <div className=" flex items-center ">
                        <div className=" pr-[6px] ">
                          <FaLink />
                        </div>
                        <a>sitedomain.com</a>
                      </div>
                      <div className=" pr-1 ">
                        <img
                          src="/assets/javascript.png"
                          width={24}
                          height={24}
                          className=" rounded-[2px] "
                        />
                      </div>
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

export default Projects;
