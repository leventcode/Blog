import { Progress } from "antd";
import React from "react";
import HomeSectionTitle from "./HomeSectionTitle";
import { Parallax } from "rc-scroll-anim";

export default function Skill() {
  return (
    <div className="wrapper relative min-h-screen w-full bg-gray-900 ">
      <div className="container mx-auto">
        <HomeSectionTitle title={"MY SKILLS"} description={"SKILLS"} />
        <div className="wrapper">
          <div className="mt-20 grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-7">
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
              style={{ transform: "translateX(-100px)", opacity: 0 }}
            >
              <div className=" h-52 flex text-center text-green-500 justify-center pt-8 rounded-lg bg-gray-800 border border-[0.5px] border-gray-600">
                <Progress
                  percent={85}
                  type="circle"
                  strokeColor="#00FA9A"
                  status="active"
                  strokeWidth="8"
                  stroke="rounded"
                />
              </div>
            </Parallax>
            <Parallax
              animation={{ y: 0, opacity: 1, playScale: [0.5, 0.8] }}
              style={{ transform: "translateY(-100px)", opacity: 0 }}
            >
              <div className="relative flex text-green-400 h-52 text-center justify-center rounded-lg bg-gray-800 border border-[0.5px] border-gray-600">
                <div className="mx-[120px] mt-8">
                  <Progress
                    type="circle"
                    percent={80}
                    strokeColor="#00FA9A"
                    status="active"
                    strokeWidth="8"
                    stroke="rounded"
                  />
                </div>
              </div>
            </Parallax>
            <Parallax
              animation={{ y: 0, opacity: 1, playScale: [0.5, 0.8] }}
              style={{ transform: "translateY(100px)", opacity: 0 }}
            >
              <div className="relative flex h-52 text-green-400 text-center justify-center  rounded-lg bg-gray-800 border border-[0.5px] border-gray-600">
                <div className="mx-[120px] mt-8">
                  <Progress
                    type="circle"
                    percent={95}
                    strokeColor="#00FA9A"
                    status="active"
                    strokeWidth="8"
                    stroke="rounded"
                  />
                </div>
              </div>
            </Parallax>
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
              style={{ transform: "translateX(-100px)", opacity: 0 }}
            >
              <div className="relative justify-center flex h-52 text-green-400 text-center  rounded-lg bg-gray-800 border border-[0.5px] border-gray-600">
                <div className="mx-[120px] mt-8">
                  <Progress
                    type="circle"
                    percent={75}
                    strokeColor="#00FA9A"
                    status="active"
                    strokeWidth="8"
                    stroke="rounded"
                  />
                </div>
              </div>
            </Parallax>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 2xl:grid-cols-2 gap-7 mt-10 text-white text-lg">
          <div>
            <div>Javascript - (85%)</div>
            <div className="mt-4 relative h-4 w-full rounded-full bg-green-300 bg-opacity-20">
              <span className="absolute left-0 top-0 w-[660px] h-full rounded-full bg-green-500"></span>
            </div>
          </div>

          <div>
            <div>Node Js - (90%)</div>
            <div className="mt-4 relative h-4 w-full rounded-full bg-green-300 bg-opacity-20">
              <span className="absolute left-0 top-0 w-[670px] h-full rounded-full bg-green-500"></span>
            </div>
          </div>
          <div>
            <div>React Js - (80%)</div>
            <div className="mt-4 relative h-4 w-full rounded-full bg-green-300 bg-opacity-20">
              <span className="absolute left-0 top-0 w-[630px] h-full rounded-full bg-green-500"></span>
            </div>
          </div>
          <div>
            <div>React Native - (70%)</div>
            <div className="mt-4 relative h-4 w-full rounded-full bg-green-300 bg-opacity-20">
              <span className="absolute left-0 top-0 w-[570px] h-full rounded-full bg-green-500"></span>
            </div>
          </div>
          <div>
            <div>Html & Css - (95%)</div>
            <div className="mt-4 relative h-4 w-full rounded-full bg-green-300 bg-opacity-20">
              <span className="absolute left-0 top-0 w-[720px] sm:w-[670px] h-full rounded-full bg-green-500"></span>
            </div>
          </div>
          <div>
            <div>Photoshop - (75%)</div>
            <div className="mt-4 relative h-4 w-full rounded-full bg-green-300 bg-opacity-20">
              <span className="absolute left-0 top-0 w-[600px] h-full rounded-full bg-green-500"></span>
            </div>
          </div>
          <div>
            <div>Illustrator - (70%)</div>
            <div className="mt-4 relative h-4 w-full rounded-full bg-green-300 bg-opacity-20">
              <span className="absolute left-0 top-0 w-[570px] h-full rounded-full bg-green-500"></span>
            </div>
          </div>
          <div>
            <div>Figma - (90%)</div>
            <div className="mt-4 relative h-4 w-full rounded-full bg-green-300 bg-opacity-20">
              <span className="absolute left-0 top-0 w-[670px] h-full rounded-full bg-green-500"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
