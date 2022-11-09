import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
        <h1 className='text-5xl font-signature ml-2'>Ajaydeep</h1>
      </div>

      {/* <ul className='flex'> */}
      {/* at this point we want to get  all the elements of Lists array in our navbar so, instead of writing them over and over again or using a for loop
      which will cause mutation. instead we'll simply use map() */}
      
       {/* <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>Home</li> */}
       <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>

      <div className=' cursor-pointer pr-4 z-10 text-gray-500'></div>

      
    </div>
  )
}

export default NavBar