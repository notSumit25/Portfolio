"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="w-full flex h-[500px] pt-24">
      <div className="w-1/2 flex flex-col items-center justify-center h-full">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">
            I'M<span className="text-teal-500 text-6xl"> Sumit Garg</span>
          </h1>
          <TypeAnimation
            sequence={[
              "Python Developer",
              1000,
              "Web Developer",
              1000,
              "Competitive Programmer",
              1000,
            ]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "1.5em", display: "inline-block" }}
            repeat={Infinity}
          />
          <button className="border-2 w-36 border-teal-500 text-teal-500 p-3 px-6 rounded-lg mt-5 hover:bg-teal-500 hover:text-white font-bold">
            Contact me
          </button>
        </div>
      </div>
      <div className="flex justify-center items-end w-1/2">
      </div>
    </div>
  );
};

export default Hero;
