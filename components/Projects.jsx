import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-5xl font-bold">
        <span className="text-teal-500 ">&lt;</span>Projects
        <span className="text-teal-500">/&gt;</span>
      </h1>
      <div className="w-full p-20">
        <div className="flex w-full justify-center gap-20">
          <div className="w-72 h-96 rounded p-2 bg-[#1f2937] shadow-lg">
            <Image src={"/project1.png"} width={300} height={400} alt="project"></Image>
            <h1 className="font-bold m-2 text-2xl">Personal Portfolio</h1>
            <h1 className="text-[#9ca3af] text-sm text-justify mt-4">
              My personal portfolio is a testament to my commitment to
              excellence, featuring a collection of my finest works that
              showcase my skills, and unwavering passion for success.
            </h1>
            <h1 className="font-bold text-sm mt-6">Technologies</h1>
            <div className="flex m-2 gap-2">
              <Image src={"/Nextjs.svg"} width={30} height={30} alt="Nextjs"></Image>
              <Image src={"/react.svg"} width={30} height={30} alt="React"></Image>
              <Image src={"/tailwind.svg"} width={30} height={30} alt="Tailwind"></Image>
            </div>
          </div>
          <div className="w-72 h-96 rounded p-2 bg-[#1f2937] shadow-lg">
            <Image src={"/project1.png"} width={300} height={400} alt="project"></Image>
            <h1 className="font-bold m-2 text-2xl">Personal Portfolio</h1>
            <h1 className="text-[#9ca3af] text-sm text-justify mt-4">
              My personal portfolio is a testament to my commitment to
              excellence, featuring a collection of my finest works that
              showcase my skills, and unwavering passion for success.
            </h1>
            <h1 className="font-bold text-sm mt-6">Technologies</h1>
            <div className="flex m-2 gap-2">
              <Image src={"/Nextjs.svg"} width={30} height={30} alt="Nextjs"></Image>
              <Image src={"/react.svg"} width={30} height={30} alt="React"></Image>
              <Image src={"/tailwind.svg"} width={30} height={30} alt="Tailwind"></Image>
            </div>
          </div>
          <div className="w-72 h-96 rounded p-2 bg-[#1f2937] shadow-lg">
            <Image src={"/project1.png"} width={300} height={400} alt="project"></Image>
            <h1 className="font-bold m-2 text-2xl">Personal Portfolio</h1>
            <h1 className="text-[#9ca3af] text-sm text-justify mt-4">
              My personal portfolio is a testament to my commitment to
              excellence, featuring a collection of my finest works that
              showcase my skills, and unwavering passion for success.
            </h1>
            <h1 className="font-bold text-sm mt-6">Technologies</h1>
            <div className="flex m-2 gap-2">
              <Image src={"/Nextjs.svg"} width={30} height={30} alt="Next"></Image>
              <Image src={"/react.svg"} width={30} height={30} alt="React"></Image>
              <Image src={"/tailwind.svg"} width={30} height={30} alt="Tailwind"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
