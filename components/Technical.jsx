import Image from "next/image";
import React from "react";

const Technical = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-5xl font-bold">
        <span className="text-teal-500 ">&lt;</span>Technical Skills
        <span className="text-teal-500">/&gt;</span>
      </h1>
      <div className="w-full p-20">
        <div className="w-full flex justify-center gap-20 mb-20">
          <div className="border-2 rounded-lg border-teal-500 w-48 h-48 flex justify-center items-center hover:bg-white">
            <Image
              src={"/react.svg"}
              height={100}
              width={100}
              alt="React"
            ></Image>
          </div>
          <div className="border-2 rounded-lg border-teal-500 w-48 h-48 flex justify-center items-center hover:bg-white">
            <Image
              src={"/Nextjs.svg"}
              height={100}
              width={100}
              alt="NextJS"
            ></Image>
          </div>
          <div className="border-2 rounded-lg border-teal-500 w-48 h-48 flex justify-center items-center hover:bg-white">
            <Image
              src={"/javascript.svg"}
              height={100}
              width={100}
              alt="Javascript"
            ></Image>
          </div>
          <div className="border-2 rounded-lg border-teal-500 w-48 h-48 flex justify-center items-center hover:bg-white">
            <Image
              src={"/python.svg"}
              height={100}
              width={100}
              alt="Python"
            ></Image>
          </div>
        </div>
        <div className="w-full flex justify-center gap-20 mt-10">
          <div className="border-2 rounded-lg border-teal-500 w-48 h-48 flex justify-center items-center hover:bg-white">
            <Image
              src={"/nodejs.svg"}
              height={100}
              width={100}
              alt="Nodejs"
            ></Image>
          </div>
          <div className="border-2 rounded-lg border-teal-500 w-48 h-48 flex justify-center items-center hover:bg-white">
            <Image
              src={"/django.svg"}
              height={100}
              width={100}
              alt="Django"
            ></Image>
          </div>
          <div className="border-2 rounded-lg border-teal-500 w-48 h-48 flex justify-center items-center hover:bg-white">
            <Image
              src={"/tailwind.svg"}
              height={100}
              width={100}
              alt="Tailwind"
            ></Image>
          </div>
          <div className="border-2 rounded-lg border-teal-500 w-48 h-48 flex justify-center items-center hover:bg-white">
            <Image
              src={"/mongodb.svg"}
              height={100}
              width={100}
              alt="Mongodb"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;
