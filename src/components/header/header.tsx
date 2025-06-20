import React, {FC, RefObject, useState} from "react";

import style from "./style.module.css";

import {AiFillCodepenCircle} from "react-icons/ai";

import {IoMenuSharp} from "react-icons/io5";

interface IProps {
  myRef: RefObject<HTMLDivElement | null>;
  aboutRef: RefObject<HTMLDivElement | null>;
  skillsRef: RefObject<HTMLDivElement | null>;
  projectsRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
}

const Header: FC<IProps> = ({myRef, aboutRef, skillsRef, projectsRef, contactRef}) => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const executeScroll = (targetRef: React.RefObject<HTMLDivElement | null>) => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView();
    }
  };

  function clickItems() {
    setShowNav(!showNav)
  }

  return (
    <header className={`${style.header} flex flex-col text-white relative
                       w-full justify-start mx-auto container-spacing`}
    >
      <div className={`${style.header_container} flex items-center justify-between my-5`}>
        <div className={`${style.header_container_logo} flex gap-x-3 items-center
          md:items-center md:flex-row md:gap-x-3`}
        >
          <AiFillCodepenCircle className="animate-spin w-6 h-6" />
          <div className='flex-col'>
            <h3>Artur Baghdanyan</h3>
            <p>Front End developer</p>
          </div>
        </div>

        <ul className={`${style.header_container_nav} hidden uppercase cursor-pointer
                       gap-3 no-underline md:flex lg:flex xl:flex`}>
          <li onClick={() => executeScroll(myRef)} className='relative grow'>Home</li>
          <li onClick={() => executeScroll(aboutRef)} className='relative grow'>About</li>
          <li onClick={() => executeScroll(skillsRef)} className='relative grow'>Skills</li>
          <li onClick={() => executeScroll(projectsRef)} className='relative grow'>Projects</li>
          <li onClick={() => executeScroll(contactRef)} className='relative grow'>Contact</li>
        </ul>

        <button
          className='flex w-8 h-8 md:hidden lg:hidden xl:hidden'
          onClick={clickItems}
        >
          <IoMenuSharp className='w-full h-auto' />
        </button>
      </div>

      {showNav && (
        <div
          style={{zIndex: 99}}
          className={`${style.transitionOpacity} fixed top-0 right-0 w-64 min-h-screen pt-14 px-10
              bg-[#2F4F4F] text-[rgb(234,179,8)] flex flex-col items-center gap-5
              overflow-x-hidden
              ${showNav ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <button className='w-8 h-8 text-white fixed z-10 top-4 right-1 text-center cursor-pointer'
                  onClick={clickItems}>
            x
          </button>
          <ul className='relative flex flex-col items-center gap-y-5 border-y-gray-200
                         py-5 px-2 cursor-pointer'
              onClick={clickItems}
          >
            <li onClick={() => executeScroll(myRef)}>Home</li>
            <li onClick={() => executeScroll(aboutRef)}>About</li>
            <li onClick={() => executeScroll(skillsRef)}>Skills</li>
            <li onClick={() => executeScroll(projectsRef)}>Projects</li>
            <li onClick={() => executeScroll(contactRef)}>Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
