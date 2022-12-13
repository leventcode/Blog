import { RiFileReduceLine } from "react-icons/ri";
import HomeSectionTitle from "./HomeSectionTitle";
import React from "react";

export default function Resume() {
  return (
    <div className="relative -mt-64 z-30 min-h-screen bg-gray-900">
      <div className="container mx-auto">
        <HomeSectionTitle title={"My Resume"} description={"Resume"} />

        <div className="grid grid-cols-2 gap-14 lg:gap-10">
          <div className="col-span-2 lg:col-span-1 ">
            <RiFileReduceLine className="w-7 h-7 text-green-400" />
            <div className="text-white -mt-[26px] ml-10 text-lg">
              Educational Qualification
            </div>

            <div className=" mt-5 relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
              <span className="absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-gray-400 bg-opacity-10 p-1 text-gray-500 text-center text-sm leading-none md:relative md:left-0">
                2008-2010
              </span>
              <div className="relative border-l-4 border-gray-600 pl-12 md:pt-6">
                <span className="absolute -left-0,5 top-0 -ml-[50px] h-full w-0 rounded-full">
                  <span className="absolute left-0 -mt-[0.35px] top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full bg-gray-900 border-4 border-gray-600 "></span>
                  <span className="absolute left-0 right-full top-6 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-gray-600  md:left-1/2 md:w-20 md:-translate-x-1/2">
                    {" "}
                  </span>
                </span>
                <h5 className="mb-0 text-green-400">
                  Higher School Graduation
                </h5>
                <p className="mt-4 text-xs text-white sm:">Abc College. </p>
                <p className="text-gray-400 mt-4 pr-28">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  consectetur donec gravida ullamcorper cum id. Sit viverra
                  donec in ornare euismod.
                </p>
              </div>
            </div>

            <div className="relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
              <span className="absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-gray-400 bg-opacity-10 p-1 text-gray-500 text-center text-sm leading-none md:relative md:left-0">
                2010-2014
              </span>
              <div className="relative border-l-4 border-gray-600 pl-12 md:pt-6">
                <span className="absolute -left-0,5 top-0 -ml-[50px] h-full w-0 rounded-full">
                  <span className="absolute left-0 -mt-[0.35px] top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full bg-gray-900 border-4 border-gray-600 "></span>
                  <span className="absolute left-0 right-full top-6 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-gray-600  md:left-1/2 md:w-20 md:-translate-x-1/2">
                    {" "}
                  </span>
                </span>
                <h5 className="mb-0 text-green-400">Bachelor of Sciences</h5>
                <p className="mb-2 mt-4 text-xs text-white">Def University. </p>
                <p className="text-gray-400 mt-4 pr-28">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  consectetur donec gravida ullamcorper cum id. Sit viverra
                  donec in ornare euismod.
                </p>
              </div>
            </div>
            <div className="relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
              <span className="absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-gray-400 bg-opacity-10 p-1 text-gray-500 text-center text-sm leading-none md:relative md:left-0">
                2014-2016
              </span>
              <div className="relative border-l-4 border-gray-600 pl-12 md:pt-6">
                <span className="absolute -left-0,5 top-0 -ml-[50px] h-full w-0 rounded-full">
                  <span className="absolute left-0 -mt-[0.35px] top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full bg-gray-900 border-4 border-gray-600 "></span>
                  <span className="absolute left-0 right-full top-6 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-gray-600  md:left-1/2 md:w-20 md:-translate-x-1/2">
                    {" "}
                  </span>
                </span>
                <h5 className="mb-0 text-green-400">Masters of Sciences</h5>
                <p className="mb-2 mt-4 text-xs text-white">Def University.</p>
                <p className="text-gray-400 mt-4 pr-28">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  consectetur donec gravida ullamcorper cum id. Sit viverra
                  donec in ornare euismod.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <RiFileReduceLine className="w-7 h-7 text-green-400" />
            <div className="text-white -mt-[26px] ml-10 text-lg">
              Working Experience
            </div>
            <div className=" mt-5 relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
              <span className="absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-gray-400 bg-opacity-10 p-1 text-gray-500 text-center text-sm leading-none md:relative md:left-0">
                2015-2017
              </span>
              <div className="relative border-l-4 border-gray-600 pl-12 md:pt-6">
                <span className="absolute -left-0,5 top-0 -ml-[50px] h-full w-0 rounded-full">
                  <span className="absolute left-0 -mt-[0.35px] top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full bg-gray-900 border-4 border-gray-600 "></span>
                  <span className="absolute left-0 right-full top-6 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-gray-600  md:left-1/2 md:w-20 md:-translate-x-1/2">
                    {" "}
                  </span>
                </span>
                <h5 className="mb-0 text-green-400">UI/UX Designer</h5>
                <p className="mb-2 mt-4 text-xs text-white">Abc Company. </p>
                <p className="text-gray-400 mt-4 pr-28">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  consectetur donec gravida ullamcorper cum id. Sit viverra
                  donec in ornare euismod.
                </p>
              </div>
            </div>

            <div className="relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
              <span className="absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-gray-400 bg-opacity-10 p-1 text-gray-500 text-center text-sm leading-none md:relative md:left-0">
                2017-2019
              </span>
              <div className="relative border-l-4 border-gray-600 pl-12 md:pt-6">
                <span className="absolute -left-0,5 top-0 -ml-[50px] h-full w-0 rounded-full">
                  <span className="absolute left-0 -mt-[0.35px] top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full bg-gray-900 border-4 border-gray-600 "></span>
                  <span className="absolute left-0 right-full top-6 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-gray-600  md:left-1/2 md:w-20 md:-translate-x-1/2">
                    {" "}
                  </span>
                </span>
                <h5 className="mb-0 text-green-400">Front-end Developer</h5>
                <p className="mb-2 mt-4 text-xs text-white">Def Company. </p>
                <p className="text-gray-400 mt-4 pr-28">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  consectetur donec gravida ullamcorper cum id. Sit viverra
                  donec in ornare euismod.
                </p>
              </div>
            </div>
            <div className="relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
              <span className="absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-gray-400 bg-opacity-10 p-1 text-gray-500 text-center text-sm leading-none md:relative md:left-0">
                2019 - Present
              </span>
              <div className="relative border-l-4 border-gray-600 pl-12 md:pt-6">
                <span className="absolute -left-0,5 top-0 -ml-[50px] h-full w-0 rounded-full">
                  <span className="absolute left-0 -mt-[0.35px] top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full bg-gray-900 border-4 border-gray-600 "></span>
                  <span className="absolute left-0 right-full top-6 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-gray-600  md:left-1/2 md:w-20 md:-translate-x-1/2"></span>
                </span>
                <h5 className="mb-0 text-green-400">Back-end Developer</h5>
                <p className="mb-2 mt-4 text-xs text-white">Ghi Company. </p>
                <p className="text-gray-400 mt-4 pr-28">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  consectetur donec gravida ullamcorper cum id. Sit viverra
                  donec in ornare euismod.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
