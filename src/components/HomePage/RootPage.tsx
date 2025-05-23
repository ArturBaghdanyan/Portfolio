'use client';
import { useRef } from "react";

import bgImage from "../../../public/backgroundImage.jpg";
import AboutPage from "../AboutPage";
import WhoAmI from "../Article";
import Contact from "../Contact";
import Header from "../header/header";
import ProjectsList from "../Projects";
import MySkills from "../skills";

const RootPage = () => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  const divStyle = {
    backgroundImage: `url(${bgImage.src})`,
    width: "100%",
    height: "400px",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <>
      <div style={divStyle}>
        <Header
          myRef={myRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
          skillsRef={skillsRef}
        />
        <WhoAmI />
      </div>

      <main className='flex flex-col mt-10 gap-y-8'>
        <section ref={aboutRef}>
          <AboutPage />
        </section>
        <section ref={skillsRef} className="bg-[#111827]">
          <MySkills />
        </section>
        <section ref={projectsRef} className="bg-[#1f2937]">
          <ProjectsList />
        </section>
        <section ref={contactRef} className="bg-[#111827]">
          <Contact />
        </section>
      </main>
    </>
  );
};
export default RootPage;
