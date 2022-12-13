import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import HomeSectionTitle from "./HomeSectionTitle";

export default function Blog() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function NextBtn({ className, style, onClick }) {
    return (
      <button
        className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`}
        onClick={onClick}
      >
        <IoIosArrowForward className="text-gray-400 text-2xl hover:border-green-400 hover:text-green-400 duration-700 border-2 border-gray-400 rounded-full" />
      </button>
    );
  }

  function PrevBtn({ className, style, onClick }) {
    return (
      <button
        className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`}
        onClick={onClick}
      >
        <IoIosArrowBack className="text-gray-400 text-2xl hover:border-green-400 hover:text-green-400 duration-700 border-2 border-gray-400 rounded-full" />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative z-30 min-h-screen bg-gray-900">
      <div className="container mx-auto ">
        <HomeSectionTitle title={"LATEST BLOGS"} description={"BLOGS"} />
        <div className="">
          <Slider {...settings}>
            <div>
              <h3 className="sm:mx-auto  h-72 mt-10 w-[400px] ml-10 bg-gray-800 border-2 border-gray-700 rounded-lg">
                <img className="h-44 ml-4 mt-4" src={"img/images1.jpeg"} />
                <div className="text-white ml-4 text-lg mt-3">
                  NodeJs application testing
                </div>
                <div className="ml-4 mt-2 text-gray-400 text-sm ">
                  JavaScript
                </div>
              </h3>
            </div>
            <div>
              <h3 className="sm:mx-auto h-72 mt-10 w-[400px] ml-10 bg-gray-800 border-2 border-gray-700 rounded-lg">
                <img className="h-44 ml-4 mt-4" src={"img/images2.jpeg"} />
                <div className="text-white ml-4 text-lg mt-3  block overflow-hidden overflow-ellipsis whitespace-nowrap">
                  How to choose javascript framework for your project
                </div>
                <div className="ml-4 mt-2 text-gray-400 text-sm ">
                  JavaScript, Technology
                </div>
              </h3>
            </div>

            <div>
              <h3 className="sm:mx-auto h-72 mt-10 w-[400px] ml-10 bg-gray-800 border-2 border-gray-700 rounded-lg">
                <img className="h-44 ml-4 mt-4" src={"img/images3.jpeg"} />
                <div className="text-white ml-4 text-lg mt-3">
                  Learn programming easy way
                </div>
                <div className="ml-4 mt-2 text-gray-400 text-sm ">
                  Technology
                </div>
              </h3>
            </div>
            <div>
              <h3 className="sm:mx-auto h-72 mt-10 w-[400px] ml-10 bg-gray-800 border-2 border-gray-700 rounded-lg">
                <img className="h-44 ml-4 mt-4" src={"img/images4.jpeg"} />
                <div className="text-white ml-4 text-lg mt-3">
                  What you need to learn in 2022
                </div>
                <div className="ml-4 mt-2 text-gray-400 text-sm ">Trend</div>
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
