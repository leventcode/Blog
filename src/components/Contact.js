import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import HomeSectionTitle from "./HomeSectionTitle";

export default function Blog() {
  return (
    <div className="relative z-30 min-h-screen bg-gray-900 sm:flex">
      <div className="container mx-auto">
        <HomeSectionTitle title={"CONTACT US"} description={"CONTACT"} />

        <div className="grid grid-cols-9 sm:grid-cols-1 2xl:grid-cols-9 gap-7">
          <div className="col-span-4">
            <h4 className="text-white text-2xl">Contact Information</h4>
            <p className="text-gray-400 pr-32 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis,
              iusto harum possimus non praesentium qui facere.
            </p>
            <span className="mt-6 relative z-10 inline-block h-1.5 w-24 overflow-hidden animate-pulse rounded-full bg-green-300 bg-opacity-50"></span>
            <div className="h-36  bg-gray-800 border-gray-700 border-2 rounded-lg mt-6">
              <span className="ml-4 mt-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500 bg-opacity-10 text-3xl text-green-400">
                <BsTelephone className="" />
              </span>
              <div className="-mt-16 text-lg text-white ml-24">
                Contact on phone{" "}
              </div>
              <div className="mt-3 text-base text-gray-400 ml-24">
                +012-3456-7891
              </div>
              <div className=" text-base text-gray-400 ml-24">
                +012-3456-7892
              </div>
            </div>
            <div className="h-36  bg-gray-800 border-gray-700 border-2 rounded-lg mt-6">
              <span className="ml-4 mt-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500 bg-opacity-10 text-3xl text-green-400">
                <AiOutlineMail className="" />
              </span>
              <div className="-mt-16 text-lg text-white ml-24">
                Contact on mail
              </div>
              <div className="mt-3 text-base text-gray-400 ml-24">
                demomail@demo.com
              </div>
              <div className=" text-base text-gray-400 ml-24">
                demomail2@demo.com
              </div>
            </div>
            <div className="h-28  bg-gray-800 border-gray-700 border-2 rounded-lg mt-6">
              <span className="ml-4 mt-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500 bg-opacity-10 text-3xl text-green-400">
                <CiLocationOn className="" />
              </span>
              <div className="-mt-16 text-lg text-white ml-24">
                Contact address
              </div>
              <div className="mt-3 text-base text-gray-400 ml-24">
                121 King Street, Melbourne, United States
              </div>
            </div>
          </div>
          <div className="col-span-5 text-base rounded-lg border-2 border-gray-700 bg-gray-800">
            <div className=" mt-5 text-white ml-5">Name</div>
            <input className="h-11 w-full sm:w-[600px] 2xl:w-[800px] mt-2 ml-5 relative z-20 bg-transparent border-2 border-gray-700 rounded outline-none peer text-sm focus:pt-2" />
            <div className="mt-5 text-white ml-5">Email</div>
            <input className="h-11 w-full sm:w-[600px] 2xl:w-[800px] mt-2 ml-5 relative z-20 bg-transparent border-2 border-gray-700 rounded outline-none peer text-sm focus:pt-2" />
            <div className="mt-5 text-white ml-5">Subject</div>
            <input className="h-11 w-full sm:w-[600px] 2xl:w-[800px] mt-2 ml-5 relative z-20 bg-transparent border-2 border-gray-700 rounded outline-none peer text-sm focus:pt-2" />
            <div className="mt-5 text-white ml-5">Message</div>
            <input className="h-44 w-full sm:w-[600px] 2xl:w-[800px] mt-2 ml-5 relative z-20 bg-transparent border-2 border-gray-700 rounded outline-none peer text-sm focus:pt-2" />
            <button className="text-black bg-green-300 h-11 w-28 rounded-lg ml-5 mt-4 text-sm hover:bg-white hover:text-gray-600 duration-700  ">
              SEND MAIL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
