import React, { FC } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperButtons } from "./swiper_click";
import { IProject } from "@/types/project-type";

import "swiper/css";

type IProjectType = {
  project: IProject[];
};

const Projects: FC<IProjectType> = ({ project }) => {
  return (
    <Swiper
      navigation={true}
      className="mySwiper w-full h-auto flex flex-col justify-center my-10 text-justify mx-auto"
    >
      {project.map((i) => (
        <SwiperSlide key={i.id}>
          <div className="w-11/12 h-auto flex flex-col justify-center gap-y-0.5 items-start sm:text-lg sm:w-full max-[500px]:text-start">
            <h1 className="text-2xl text-white">{i.title}</h1>

            <div className="border-l-2 mt-4 ml-2 pl-4 flex flex-col gap-y-5 text-ellipsis sm:text-start">
              <p className="flex flex-col text-[#e3e0e0] font-mono">
                {i.description}
              </p>

              {i.items?.map((item) => (
                <ul key={item.id}>
                  <li className="italic text-[#e3e0e0] font-mono">
                    <b className="text-[#e78193] font-mono">{item.title}</b>{" "}
                    {item.description}
                  </li>
                </ul>
              ))}

              {i.site && (
                <p className="flex flex-col text-[#e3e0e0] font-mono">
                  <Link href={i.site} target="_blank">
                    View Site: {i.site}
                  </Link>
                </p>
              )}

              <Link
                href={i.link}
                target="_blank"
                className="text-[#e3e0e0] font-mono underline"
              >
                View Code: {i.link}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="flex justify-end gap-x-3 mt-5">
        <SwiperButtons />
      </div>
    </Swiper>
  );
};

export default Projects;
