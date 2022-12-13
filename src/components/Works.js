import { useState } from "react";
import HomeSectionTitle from "./HomeSectionTitle";
export default function Works() {
  const [selectCategory, setSelectCategory] = useState(0);

  const referances = [
    {
      img: "img/foto1.jpeg",
      title: "Candle",
      description: "Creative Candle Light",
      category: 1,
    },
    {
      img: "img/foto2.jpeg",
      title: "Candle2",
      description: "Creative Candle Light2",
      category: 2,
    },
    {
      img: "img/foto3.jpeg",
      title: "Candle3",
      description: "Creative Candle Light3",
      category: 1,
    },
    {
      img: "img/foto4.jpeg",
      title: "Candle4",
      description: "Creative Candle Light4",
      category: 1,
    },
  ];
  return (
    <div className="relative z-30 min-h-screen bg-gray-900">
      <div className="container mx-auto">
        <HomeSectionTitle title={"Work"} description={"My Works"} />
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <button
            onClick={() => setSelectCategory(0)}
            className="bg-green-400 text-black rounded-lg w-16 h-10 hover:bg-white duration-700"
          >
            ALL
          </button>
          <button
            onClick={() => setSelectCategory(1)}
            className="bg-green-400 text-black rounded-lg w-32 h-10 hover:bg-white duration-700"
          >
            UI/UX DESIGN
          </button>
          <button
            onClick={() => setSelectCategory(2)}
            className="bg-green-400 text-black rounded-lg w-32 h-10 hover:bg-white duration-700"
          >
            HTML & CSS
          </button>
          <button className="bg-green-400 text-black rounded-lg w-24 h-10 hover:bg-white duration-700">
            REACT JS
          </button>
          <button className="bg-green-400 text-black rounded-lg w-24 h-10 hover:bg-white duration-700">
            NODE JS
          </button>
        </div>

        <div className="sm:ml-32 mt-12 flex justify-center grid grid-cols-3 ml-16 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7">
          {referances
            .filter(
              (item) => selectCategory === 0 || item.category === selectCategory
            )
            ?.map((item, index) => (
              <div className="w-96 h-80 transition-all bg-gray-800 -ml-10 rounded-lg border-2 border-gray-700 ">
                <img
                  className="h-[230px]  mx-auto mt-5 rounded-t-lg"
                  src={item.img}
                />
                <div className="mt-2 text-lg text-white ml-6 ">
                  {item.title}
                </div>
                <div className="text-sm ml-6 text-gray-400">
                  {item.description}
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <button className="bg-green-400 rounded-lg text-black h-10 w-32 mt-20 hover:bg-white hover:text-gray-400 duration-700">
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
}
