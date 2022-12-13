import HomeSectionTitle from "./HomeSectionTitle";

export default function Header() {
  return (
    <div className="relative z-30 min-h-screen bg-gray-900">
      <div className="pt-24 lg-pt-28 xl:pt-32">
        <div className="container mx-auto">
          <HomeSectionTitle title={"About Me"} description={"About"} />

          <div className=" mt-16 grid grid-cols-2 lg:col-span-1">
            <div className="col-span-2 lg:col-span-1">
              <img
                className=" h-[399px] w-[625px] sm:h-[350px] sm:w-[575] sm:ml-auto md:ml-20 ml-24 border border-8 border-gray-400 rounded-lg "
                src={"img/about.jpeg"}
              />
            </div>
            <div className="col-span-2 text-3xl mt-4 -ml-6 sm:col-span-1 sm:mx-auto">
              <h3 className="text-white">
                Hi, I am
                <span className="text-green-400 ml-2">Joseph Bieber</span>
              </h3>
              <ul className="mt-8">
                <li className="text-lg ">
                  <div className="h-2 w-2 mt-3 rounded-full bg-green-300"></div>
                  <div className="min-w-[130px] ml-5 text-gray-400 font-medium -mt-[18px]">
                    First Name : Joseph{" "}
                  </div>
                </li>
                <li className="text-lg ">
                  <div className="h-2 w-2 mt-3 rounded-full bg-green-300"></div>
                  <div className="min-w-[130px] ml-5 text-gray-400 font-medium -mt-[18px]">
                    Last Name: Bieber{" "}
                  </div>
                </li>
                <li className="text-lg ">
                  <div className="h-2 w-2 mt-3 rounded-full bg-green-300"></div>
                  <div className="min-w-[130px] ml-5 text-gray-400 font-medium -mt-[18px]">
                    Age : 27 Years{" "}
                  </div>
                </li>
                <li className="text-lg ">
                  <div className="h-2 w-2 mt-3 rounded-full bg-green-300"></div>
                  <div className="min-w-[130px] ml-5 text-gray-400 font-medium -mt-[18px]">
                    Nationality : American{" "}
                  </div>
                </li>
                <li className="text-lg ">
                  <div className="h-2 w-2 mt-3 rounded-full bg-green-300"></div>
                  <div className="min-w-[130px] ml-5 text-gray-400 font-medium -mt-[18px]">
                    Languages : English, French
                  </div>
                </li>
                <li className="text-lg ">
                  <div className="h-2 w-2 mt-3 rounded-full bg-green-300"></div>
                  <div className="min-w-[130px] ml-5 text-gray-400 font-medium -mt-[18px]">
                    Address : 121 King Street, Melbourne, United States{" "}
                  </div>
                </li>
                <li className="text-lg ">
                  <div className="h-2 w-2 mt-3 rounded-full bg-green-300"></div>
                  <div className="min-w-[130px] ml-5 text-gray-400 font-medium -mt-[18px]">
                    Freelance : Available
                  </div>
                </li>
              </ul>
              <button className=" mt-5 h-10 w-44 text-base text-gray-900 hover:bg-white duration-700 rounded-md bg-green-300">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
