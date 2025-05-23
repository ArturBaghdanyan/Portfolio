import { useState } from "react";

import Projects from "./projects";
import { projectsData } from "@/data/projects-data";
import { IProject } from "@/types/project-type";

const ProjectsList = () => {
  const [projects] = useState<IProject[]>(projectsData);

  return (
    <div className="container-spacing">
      <h2 className="title">Projects</h2>
      <Projects project={projects} />
    </div>
  );
};
export default ProjectsList;
