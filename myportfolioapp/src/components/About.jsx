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
          "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
          मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥ २-४७"
          {<br/>}
          "You have the right to work only but never to its fruits.
          Let not the fruits of action be your motive, nor let your attachment be to inaction."
        </p>

        <br />

        <p className="text-xl">
        I am a 2021 Ece graduate who somehow found his passion in web development. 
        I started learning to code in January 2022 and haven't stopped since then.
         Every day I learn something and grow better than the person I was the day before.
        </p>
      </div>
    </div>
  );
};

export default About;