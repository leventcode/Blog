import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Header() {
  return (
    <div className="wrapper relative min-h-screen w-full bg-gray-900">
      <header className="top-0 left-0 z-50 h-auto w-full absolute ">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <a className="py-2">
              <img
                className=" h-10  sm:ml-56 2xl:ml-24 w-auto ml-24 "
                src={"img/logo.png"}
                alt={"1"}
              />
            </a>
            <div className="block lg-hidden mx-auto   ">
              <nav className="flex-grow px-1 text-center">
                <ul className="inline-flex list-none gap-7 sm:text-gray-900 sm:-ml-40 2xl:ml-1 2xl:text-white sm:mt-20 2xl:mt-1 cursor-pointer py-6 text-sm items-center  font-medium uppercase tracking-wider">
                  <li className=" align-middle ">
                    <a className="group relative inline-block ">01.Home</a>
                  </li>
                  <li className="inline-block align-middle">
                    <a className=" group relative inline-block  ">02.About</a>
                  </li>
                  <li className="inline-block align-middle">
                    <a className=" group relative inline-blockü ">03.Resume</a>
                  </li>
                  <li className="inline-block align-middle">
                    <a className=" group relative inline-block">04.Works</a>
                  </li>
                  <li className="inline-block align-middle">
                    <a className=" group relative inline-block">05.Blog</a>
                  </li>
                  <li className="inline-block align-middle">
                    <a className=" group relative inline-block">06.Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <button className=" h-12 w-28 rounded  bg-green-300 hidden lg:block mr-24 shadow-2xl hover:bg-white hover:text-gray-400 duration-700">
              HIRE ME
            </button>
          </div>
        </div>
      </header>
      <div className="md:container relative mx-auto sm:text-center ">
        <div className="flex min-h-screen w-full items-center justify-center ">
          <div className=" py-20 text-center -mt-40 w-full">
            <div className=" relative mb-5 overflow-hidden rounded-full  align-middle">
              <div className="h-[140px] w-[140px] relative z-20 inline-block overflow-hidden border border-4 border-green-200 align-middle  rounded-full">
                <img className="" src={"img/pp.png"} />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto -mt-[470px]">
          <div className=" text-4xl text-white text-center mt-7">
            Hi, I am Web Designer
          </div>
          <p className=" text-lg text-gray-400 mt-6 text-center">
            I am a frontend web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </p>
          <div className="mt-7 text-center ">
            <ul className="mb-2 inline-flex text-gray-400 sm:gap-4">
              <li className="">
                <FaFacebookF className="p-2.5 h-10 w-10 overflow-hidden border border-white border-opacity-5 text-center rounded hover:bg-green-300 hover:text-gray-600 hover:duration-700 " />
              </li>
              <li className="">
                <AiOutlineTwitter className="p-2.5 h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center rounded hover:bg-green-300 hover:text-gray-600 hover:duration-700" />
              </li>
              <li className="">
                <AiFillLinkedin className="p-2.5 h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center rounded hover:bg-green-300 hover:text-gray-600 hover:duration-700" />
              </li>
            </ul>
          </div>
          <AiOutlineArrowDown className="absolute container mt-[194px] text-gray-400 -ml-16 animate-bounce hover:text-green-300" />
          <div className="absolute w-full justify-between text-center h-10 w-full text-gray-400 text-sm mt-48 hover:text-green-300 cursor-pointer ">
            SCROLL DOWN
          </div>
        </div>
      </div>
    </div>
  );
}
