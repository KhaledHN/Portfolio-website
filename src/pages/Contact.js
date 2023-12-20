import { React, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "../../components/NavBar/Navbar";
import { IoShareSocial } from "react-icons/io5";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const gradientStyle = {
    background: "linear-gradient(to right, #833AB4, #E1306C, #FD7C05)",
    borderRadius: "0.375rem", // Equivalent to rounded-md in Tailwind
  };

  const [state, handleSubmit] = useForm("xeqbogvy");
  if (state.succeeded) {
    return (
      <div className="pb-5 px-10 flex justify-center">
        <p className="w-[100px] py-3 rounded-xl text-center bg-gradient-to-r from-[#5752e5] to-[#6f9dff]">
          {" "}
          Email sent{" "}
        </p>
      </div>
    );
  }

  return (
    <div className=" w-full xl:h-screen flex justify-center ">
      <Navbar />
      <div className=" max-w-[1240px] h-full flex items-center pt-44 xl:pt-0 ">
        <div>
          <div>
            <div className=" flex items-center justify-between ">
              <p className=" text-4xl text-left tracking-tight text-white transition-all duration-100 ">
                Contact
              </p>
              <div className="relative">
                <button
                  className={`rounded-t-full w-10 h-10 bg-zinc-800 flex justify-center items-center text-white focus:outline-none relative ${
                    isMenuOpen ? "rounded-t-full bg-zinc-800 " : "rounded-full"
                  }`}
                  onClick={toggleMenu}
                >
                  <div className=" absolute">
                    <IoShareSocial />
                  </div>
                </button>
                {isMenuOpen && (
                  <div
                    className={`absolute w-10 h-44 bg-zinc-800 rounded-b-full shadow-md transition-transform transform duration-300`}
                  >
                    <div className=" flex justify-center ">
                      <div className=" pt-2 ">
                        <div className=" pb-7 ">
                          <a>
                            <FaLinkedinIn className=" text-[#0B66C2] " />
                          </a>
                        </div>
                        <div className=" pb-7 ">
                          <a>
                            <FaTwitter className=" text-[#1EA1F1] " />
                          </a>
                        </div>
                        <div className=" pb-7  ">
                          <div style={gradientStyle}>
                            <a>
                              <FaInstagram className=" scale-125 " />
                            </a>
                          </div>
                        </div>
                        <div className=" pb-7 ">
                          <a>
                            <FaFacebook className=" text-[#0766FF] " />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className=" pt-2 text-gray-300 tracking-tight text-base transition-all duration-100 ">
              Please reach out to me via email or social media.
            </p>
          </div>
          <form onSubmit={handleSubmit} className=" ">
            <div className="flex flex-col py-4">
              <div className="flex  flex-col">
                <input
                  className="  w-[350px] xl:w-[450px] p-2 flex placeholder:text-gray-100/90 px-6 focus:text-black/50 focus:bg-zinc-800/90 outline-none py-2.5 bg-zinc-900 border border-white/10 rounded-lg transition-all duration-200 tracking-tight"
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                />
              </div>

              <ValidationError
                prefix="Named"
                field="name"
                errors={state.errors}
              />

              <div className=" flex flex-col pt-3 pb-1">
                <input
                  className=" w-[350px] xl:w-[450px] p-2 flex placeholder:text-gray-100/90 px-6 focus:text-black/50 focus:bg-zinc-800/90 outline-none py-2.5 bg-zinc-900 border border-white/10 rounded-lg transition-all duration-200 tracking-tight"
                  id="email"
                  placeholder="Email"
                  type="email"
                  name="email"
                />
              </div>

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <div className=" flex flex-col py-2">
                <textarea
                  className=" h-28 flex placeholder:text-gray-100/90 px-6 focus:text-black/50 focus:bg-zinc-800/90 outline-none py-2.5 bg-zinc-900 border border-white/10 rounded-lg transition-all duration-200 tracking-tight"
                  rows={10}
                  placeholder="Message"
                  id="message"
                  name="message"
                ></textarea>
              </div>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <div className="w-full p-3 text-center text-gray-100 rounded-xl mt-4 bg-zinc-800 ">
                <button type="submit" disabled={state.submitting}>
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
