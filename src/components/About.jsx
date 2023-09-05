import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am an ECE '21 graduate from Dr. A.P.J. Abdul Kalam Technical University, where I gained a solid foundation in electronics and communications engineering.
          However, I discovered a genuine passion for coding in 2022 and decided to pursue it as a career. 
        </p>

        <br />

        <p className="text-xl">
          I am now tremendously excited about the prospect of applying my expertise to real-world applications and solving challenging problems.
          My goal is to become a successful and versatile fullstack developer.
        </p>
      </div>
    </div>
  );
};

export default About;
