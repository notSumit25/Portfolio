"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="w-full flex h-[500px] pt-24 justify-between">
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
      <div className="flex justify-center items-end w-1/2 basis-1/3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1100">
          <path
            d="M898.7 157.1c56.3 102 16.6 249.3-26.1 379.8-42.8 130.5-88.3 244-184.8 314.3-96.5 70.4-243.5 97.6-380.4 51.7C170.5 856.7 43.9 737.5 10.2 595.3c-34-142.2 25-307.4 128.1-420C241.6 62.6 389.5 2.5 539.6.5 690-1.2 842.4 55.3 898.7 157.1z"
            fill="none"
            stroke="teal"
            stroke-width="3"
            stroke-miterlimit="10"
            stroke-opacity="1"
            className="rotation"
          ></path>
          <image href="/pikachu.png" alt='Pikachu'></image>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
