import React from "react";
import Navbar from "../../components/NavBar/Navbar";

const HazemKhaled = () => {
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
                src="/assets/Hazemkhaled.com.png"
                width={450}
                className=" rounded-xl "
              />
            </div>
            <div className=" text-left pt-2 xl:pt-0 ">
              <p className=" w-[360px] md:w-[600px] pt-5 text-2xl font-semibold text-white transition-all duration-100 ">
                Hazem Khaled's portfolio
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
                  I elegantly designed a portfolio website that balances
                  simplicity and style. It uses a sleek navigation bar that
                  converts to a drawer-style menu on smaller screens. The site
                  leverages Next.js, TypeScript, Tailwind CSS, and Formspree for
                  a polished and modern look. With three sections for services,
                  background, and contact information, the website offers a
                  captivating experience, embodying minimalistic sophistication
                  and harmonizing design and functionality.
                </p>
                <div className=" hidden xl:flex gap-5 pt-10 ">
                  <button className=" w-24 h-9 bg-zinc-800 hover:bg-zinc-900 text-white font-semibold rounded-md ">
                    <a href="https://www.hazemkhaled.com/">Demo</a>
                  </button>
                  <button className=" w-24 h-9 bg-zinc-800 hover:bg-zinc-900 text-white font-semibold rounded-md ">
                    <a href="">Code</a>
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
                    <li className=" pb-3 font-semibold ">Typescript</li>
                    <li className=" pb-3 font-semibold ">Next JS</li>
                    <li className=" pb-3 font-semibold ">Tailwind</li>
                    <li>Formspree</li>
                  </div>
                </div>
              </div>
              <div className=" flex xl:hidden gap-5 pt-5 pb-12 pl-2 ">
                <button className=" w-24 h-9 bg-zinc-800 hover:bg-zinc-900 text-white font-semibold rounded-md ">
                  <a href="https://www.hazemkhaled.com/">Demo</a>
                </button>
                <button className=" w-24 h-9 bg-zinc-800 hover:bg-zinc-900 text-white font-semibold rounded-md ">
                  <a href="">Code</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HazemKhaled;
