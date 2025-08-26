"use client";

import { useRef } from "react";
import AboutPage from "../AboutPage";
import WhoAmI from "../Article";
import Contact from "../Contact";
import Header from "../header/header";
import ProjectsList from "../Projects";
import MySkills from "../skills";
import bgImage from "../../../public/backgroundImage.jpg";

const RootPage = () => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  const divStyle = {
    backgroundImage: `url(${bgImage.src})`,
    width: "100%",
    height: "800px",
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
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <WhoAmI />
      </div>

      <main className="flex flex-col mt-10 gap-y-8">
        <section ref={aboutRef}>
          <AboutPage />
        </section>

        <section ref={skillsRef} className="bg-[#e4eaed]">
          <MySkills />
        </section>

        <section ref={projectsRef}>
          <ProjectsList />
        </section>

        <section ref={contactRef} className="bg-[#2F4F4F] text-white">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default RootPage;
