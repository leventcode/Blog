import React, { Component } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiStarSFill } from "react-icons/ri";
import HomeSectionTitle from "./HomeSectionTitle";

export default function Works() {
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
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative z-30 min-h-screen bg-gray-900 lg-pt-28 xl:pt-32">
      <div className="container mx-auto">
        <HomeSectionTitle title={"CLIENT REVIEWS"} description={"REVIEWS"} />

        <div className="">
          <Slider {...settings}>
            <div>
              <h3 className="h-64 mt-10 sm:mx-auto w-[400px] ml-10 bg-gray-800 border-2 border-gray-700 rounded-lg">
                <div className="-mt-10 ml-5 inline-block overflow-hidden border border-4 border-green-300 rounded-full">
                  <img className="" src={"img/avatar1.png"} />
                </div>
                <div className="ml-5 text-white text-lg mt-2">
                  David Chester
                </div>
                <div className="ml-5 text-gray-400 text-sm mt-2">
                  Client - Envato.com
                </div>
                <div className="text-yellow-300 text-2xl">
                  <RiStarSFill className="ml-4 mt-4 " />
                  <RiStarSFill className="ml-10 -mt-[24px]" />
                  <RiStarSFill className="ml-16 -mt-[24px]" />
                  <RiStarSFill className="ml-[88px] -mt-[24px]" />
                </div>
                <div className="text-gray-400 text-sm ml-5 mt-4 pr-10">
                  Working with Bieber is very good experience for me. He’s a
                  good person. If I need developer in future, I’ll definately
                  hire him.
                </div>
              </h3>
            </div>
            <div>
              <h3 className="h-64 mt-10 sm:mx-auto w-[400px] ml-10 bg-gray-800 border-2 border-gray-700 rounded-lg">
                <div className="-mt-10 ml-5 inline-block overflow-hidden border border-4 border-green-300 rounded-full">
                  <img className="" src={"img/avatar4.png"} />
                </div>
                <div className="ml-5 text-white text-lg mt-2">Emma Watson</div>
                <div className="ml-5 text-gray-400 text-sm mt-2">
                  Client - Envato.com
                </div>
                <div className="text-yellow-300 text-2xl ">
                  <RiStarSFill className="ml-4 mt-4" />
                  <RiStarSFill className="ml-10 -mt-[24px]" />
                  <RiStarSFill className="ml-16 -mt-[24px]" />
                  <RiStarSFill className="ml-[88px] -mt-[24px]" />
                  <RiStarSFill className="ml-[112px] -mt-[24px]" />
                </div>
                <div className="text-gray-400 text-sm ml-5 mt-4 pr-10">
                  Working with Bieber is very good experience for me. He’s a
                  good person. If I need developer in future, I’ll definately
                  hire him.
                </div>
              </h3>
            </div>
            <div>
              <h3 className="h-64 mt-10 sm:mx-auto w-[400px] ml-10 bg-gray-800 border-2 border-gray-700 rounded-lg">
                <div className="-mt-10 ml-5  inline-block overflow-hidden border border-4 border-green-300 rounded-full">
                  <img className="" src={"img/avatar3.png"} />
                </div>
                <div className="ml-5 text-white text-lg mt-2">Jonathon Doe</div>
                <div className="ml-5 text-gray-400 text-sm mt-2">
                  Client - Envato.com
                </div>
                <div className="text-yellow-300 text-2xl ">
                  <RiStarSFill className="ml-4 mt-4" />
                  <RiStarSFill className="ml-10 -mt-[24px]" />
                  <RiStarSFill className="ml-16 -mt-[24px]" />
                  <RiStarSFill className="ml-[88px] -mt-[24px]" />
                  <RiStarSFill className="ml-[112px] -mt-[24px]" />
                </div>
                <div className="text-gray-400 text-sm ml-5 mt-4 pr-10">
                  Working with Bieber is very good experience for me. He’s a
                  good person. If I need developer in future, I’ll definately
                  hire him.
                </div>
              </h3>
            </div>
            <div>
              <h3 className="h-64 mt-10 sm:mx-auto w-[400px] ml-10 bg-gray-800 border-2 border-gray-700 rounded-lg">
                <div className="-mt-10 ml-5 inline-block overflow-hidden border border-4 border-green-300 rounded-full">
                  <img className="" src={"img/avatar2.png"} />
                </div>
                <div className="ml-5 text-white text-lg mt-2">
                  William Bieber
                </div>
                <div className="ml-5 text-gray-400 text-sm mt-2">
                  Client - Envato.com
                </div>
                <div className="text-yellow-300 text-2xl">
                  <RiStarSFill className="ml-4 mt-4 " />
                  <RiStarSFill className="ml-10 -mt-[24px]" />
                  <RiStarSFill className="ml-16 -mt-[24px]" />
                  <RiStarSFill className="ml-[88px] -mt-[24px]" />
                  <RiStarSFill className="ml-[112px] -mt-[24px]" />
                </div>
                <div className="text-gray-400 text-sm ml-5 mt-4 pr-10">
                  Working with Bieber is very good experience for me. He’s a
                  good person. If I need developer in future, I’ll definately
                  hire him.
                </div>
              </h3>
            </div>
            <div>
              <h3 className="h-64 mt-10 sm:mx-auto w-[400px] ml-10 bg-gray-800 border-2 border-gray-700 rounded-lg">
                <div className="-mt-10 ml-5 inline-block overflow-hidden border border-4 border-green-300 rounded-full">
                  <img className="" src={"img/avatar2.png"} />
                </div>
                <div className="ml-5 text-white text-lg mt-2">
                  William Bieber
                </div>
                <div className="ml-5 text-gray-400 text-sm mt-2">
                  Client - Envato.com
                </div>
                <div className="text-yellow-300 text-2xl ">
                  <RiStarSFill className="ml-4 mt-4" />
                  <RiStarSFill className="ml-10 -mt-[24px] " />
                  <RiStarSFill className="ml-16 -mt-[24px]" />
                  <RiStarSFill className="ml-[88px] -mt-[24px]" />
                  <RiStarSFill className="ml-[112px] -mt-[24px]" />
                </div>
                <div className="text-gray-400 text-sm ml-5 mt-4 pr-10">
                  Working with Bieber is very good experience for me. He’s a
                  good person. If I need developer in future, I’ll definately
                  hire him.
                </div>
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
