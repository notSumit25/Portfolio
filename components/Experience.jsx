import React from "react";

const Experience = () => {
  return (
    <div className="w-full p-10 flex flex-col items-center gap-10">
      <h1 className="text-5xl font-bold">
        <span className="text-teal-500 ">&lt;</span>Experience
        <span className="text-teal-500">/&gt;</span>
      </h1>
      <div className="flex w-1/2 p-20 gap-10">
        <div className="flex flex-col items-center pt-3">
          <div className="h-7 w-7 bg-teal-500 rounded-full shadow-xl shadow-teal-500"></div>
          <div className="w-1 h-full bg-white"></div>
        </div>
        <div className="mx-10">
          <h1 className="text-3xl font-bold py-2 shadow-xl">
            Quality Assurance Intern
          </h1>
          <h1 className="text-xl font-medium py-2">LuneBlaze, Faridabad</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            quidem accusamus, dolorem dignissimos maiores, voluptas atque dolore
            quaerat quae mollitia minus quod tenetur sunt aperiam natus nam, sed
            ipsum. Dolore consectetur accusamus aspernatur voluptates
            exercitationem? Dolore enim recusandae aliquid eius architecto illo?
            Provident voluptatibus laboriosam beatae iure alias recusandae non.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
