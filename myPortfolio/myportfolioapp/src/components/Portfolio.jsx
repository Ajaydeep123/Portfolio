import React from 'react'
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
    const portfolios = [
        {
          id: 1,
          src: arrayDestruct,
          demo:'https://reels-clone-pi.vercel.app/',
          code: 'https://github.com/Ajaydeep123/reels',
        },
        {
          id: 2,
          src: reactParallax,
          demo:'https://nwsmovies.netlify.app/',
          code:'https://github.com/Ajaydeep123/moviesApp',
        },
        {
          id: 3,
          src: navbar,
          demo:'https://ajaydeep123.github.io/Ticket_management_system/',
          code:'https://github.com/Ajaydeep123/Ticket_management_system',
        },
        {
          id: 4,
          src: reactSmooth,
          demo:'https://ajaydeep123.github.io/CameraApp/',
          code:'https://github.com/Ajaydeep123/CameraApp',
        },
        {
          id: 5,
          src: installNode,
          demo:'https://drive.google.com/file/d/1NPEb1S7Tx-_Me3j4kHzj2cXgCsKpXla3/view?usp=share_link',
          code:'https://github.com/Ajaydeep123/HackerRank-Automation',
        },
        {
          id: 6,
          src: reactWeather,
          demo:'https://drive.google.com/file/d/1NPEb1S7Tx-_Me3j4kHzj2cXgCsKpXla3/view?usp=share_link',
          code:'https://github.com/Ajaydeep123/Github_Scrapper',  
        },
      ];
    //   function handleDemo(){
    // //   window.location.href='http://google.com';
    //     window.open("http://google.com", "_blank");
    //   }
      return (
        <div
          name="portfolio"
          className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Portfolio
              </p>
              <p className="py-6">Check out some of my work right here</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {portfolios.map(({ id, src, demo, code }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt="asr"
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <a href={demo}  target="_blank" rel='noreferrer'>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                      Demo
                    </button>
                    </a>
                    <a href={code}  target="_blank" rel='noreferrer'>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default Portfolio