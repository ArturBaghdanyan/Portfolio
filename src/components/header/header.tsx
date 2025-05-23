import React, { useState } from "react";

import "./style.css";

import { AiFillCodepenCircle } from "react-icons/ai";

import { IoMenuSharp } from "react-icons/io5";

const Header = (props: any) => {
  const { myRef, aboutRef, projectsRef, contactRef } = props;
  const [showNav, setShowNav] = useState<boolean>(false);

  const executeScroll = (targetRef: React.RefObject<HTMLDivElement | null>) => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView();
    }
  };

  return (
    <header className='header flex flex-col text-white relative
                       w-full justify-start mx-auto container-spacing'
    >
      <div className={`header_container flex items-center justify-between my-5`}>
        <div className={`header_container_logo flex gap-x-3 items-center
          md:items-center md:flex-row md:gap-x-3`}
        >
          <AiFillCodepenCircle />
          <div className='flex-col'>
            <h3>Artur Baghdanyan</h3>
            <p>Front End developer</p>
          </div>
        </div>

        <ul className={`header_container_nav hidden uppercase cursor-pointer
          gap-3 no-underline md:flex lg:flex xl:flex`}>
          <li onClick={() => executeScroll(myRef)} className='relative grow'>Home</li>
          <li onClick={() => executeScroll(aboutRef)} className='relative grow'>About</li>
          <li onClick={() => executeScroll(projectsRef)} className='relative grow'>Projects</li>
          <li onClick={() => executeScroll(contactRef)} className='relative grow'>Contact</li>
        </ul>

        <button
          className='flex w-8 h-8 md:hidden lg:hidden xl:hidden'
          onClick={() => setShowNav(!showNav)}
        >
          <IoMenuSharp className='w-full h-auto'/>
        </button>
      </div>

      {showNav && (
        <div
          style={{ zIndex: 10 }}
          className={`w-64 min-h-screen flex flex-col items-center fixed top-0 right-0 
                      placeholder-teal-400 pt-14 px-[40px] transition-transform ease-in-out 
                      duration-300 gap-y-5 bg-[#2F4F4F] text-[rgb(234,179,8)] overflow-x-hidden
           ${showNav ? 'transform translate-x-[-250px] ease-in-out duration-500' : ''}`}
        >
          <button className='w-8 h-8 text-white fixed z-10 top-4 right-1 text-center cursor-pointer'
                  onClick={() => setShowNav(!showNav)}>
            x
          </button>
          <ul className='relative flex flex-col items-center gap-y-5 border-y-gray-200
                         py-5 px-2 cursor-pointer'>
            <li onClick={() => executeScroll(myRef)}>Home</li>
            <li onClick={() => executeScroll(aboutRef)}>About</li>
            <li onClick={() => executeScroll(projectsRef)}>Projects</li>
            <li onClick={() => executeScroll(contactRef)}>Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
