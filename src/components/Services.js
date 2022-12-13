import { FaFeatherAlt } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { RiDivideLine } from "react-icons/ri";
import HomeSectionTitle from "./HomeSectionTitle";

export default function Services() {
  return (
    <div className="relative z-30 min-h-screen  bg-gray-900">
      <div className="text-green-400 relative bg-gray-900 bg-opacity-95 xl:pt-32 lg:pt-28">
        <div className="container mx-auto">
          <HomeSectionTitle title={"My Services"} description={"Services"} />

          <div className="grid grid-cols-3 col-span-1 text-white gap-7 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
            <div className="bg-gray-800 border border-gray-700 border-2 hover:animate-bounce  rounded-lg h-64">
              <div className="mb-6 flex h-20 w-20 items-center justify-center  text-green-400 bg-green-500 ml-5 mt-5 rounded-full bg-primary bg-opacity-10 p-5 text-4xl">
                <FaFeatherAlt className="hover:text-green-400 hover:animate-bounce duration-700 " />
              </div>
              <div className="float-right text-7xl text-opacity-20 text-gray-400 -mt-[105px] mr-3 ">
                01
              </div>
              <div className="mt-1 ml-6 text-2xl ">Ui/Ux Design</div>
              <div className="mt-1 ml-6 pr-24 md:pr-2 leading-6 text-gray-400  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
                diam etiam venenatis mi tristique amet cras diam etiam.
              </div>
            </div>
            <div className="bg-gray-800 border border-gray-700 border-2 hover:animate-bounce  rounded-lg h-64">
              <div className="mb-6 flex h-20 w-20 items-center justify-center  text-green-400 bg-green-500 ml-5 mt-5 rounded-full bg-primary bg-opacity-10 p-5 text-4xl">
                <RiDivideLine className="hover:text-green-400 hover:animate-bounce duration-700 " />
              </div>
              <div className="float-right text-7xl text-opacity-20 text-gray-400 -mt-[105px] mr-3 ">
                02
              </div>
              <div className="mt-1 ml-6 text-2xl ">Web Development</div>
              <div className="mt-1 ml-6 pr-28 md:pr-2 leading-5 text-gray-400 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
                diam etiam venenatis mi tristique amet cras diam etiam.
              </div>
            </div>
            <div className="bg-gray-800 border border-gray-700 border-2 hover:animate-bounce  rounded-lg h-64">
              <div className="mb-6 flex h-20 w-20 items-center justify-center  text-green-400 bg-green-500 ml-5 mt-5 rounded-full bg-primary bg-opacity-10 p-5 text-4xl">
                <MdPhoneIphone className="hover:text-green-400 hover:animate-bounce duration-700 " />
              </div>
              <div className="float-right text-7xl text-opacity-20 text-gray-400 -mt-[105px] mr-3 ">
                03
              </div>
              <div className="mt-1 ml-6 text-2xl ">Mobile App Development</div>
              <div className="mt-1 ml-6 pr-28 md:pr-2 leading-5 text-gray-400 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
                diam etiam venenatis mi tristique amet cras diam etiam.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
