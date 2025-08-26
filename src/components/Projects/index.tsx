import { useState } from "react";

import AllProjects from "./allProjects";
import { ImagesList } from "@/data/images";
import { IImages } from "@/types/imagesType";

import style from "./style.module.scss";


const ProjectsList = () => {
  const [projects] = useState<IImages[]>(ImagesList);
  const [filterKey, setFilterKey] = useState<string>("all");

  const filteredProjects =
    filterKey === "all"
      ? projects
      : projects.filter((project) => project.key === filterKey);

  const handleFilterClick = (key: string) => {
    setFilterKey(key);
  };

  return (
    <div className="container-spacing">
      <h2 className="title">Projects</h2>
      <div className="w-full flex justify-center items-center mt-8">
        <ul
          className={`${style.projects} flex gap-x-3 text-black font-bold text-md cursor-pointer text-lg`}
        >
          <li onClick={() => handleFilterClick("all")}>All</li>
          <li onClick={() => handleFilterClick("design")}>Design</li>
          <li onClick={() => handleFilterClick("react")}>React JS</li>
          <li onClick={() => handleFilterClick("vue")}>Vue JS</li>
        </ul>
      </div>

      <AllProjects project={filteredProjects} />
    </div>
  );
};
export default ProjectsList;
