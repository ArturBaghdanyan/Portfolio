import React, { FC } from "react";
import Link from "next/link";

import { IImages } from "@/types/imagesType";
import Card from "./card";

import style from "./style.module.scss";

type IProjectType = {
  project: IImages[];
};

const AllProjects: FC<IProjectType> = ({ project }) => {
  return (
    <div className="w-full flex flex-wrap content-center justify-center gap-3 mt-20 relative group">
     
      {project.map((i) => (
        <Card key={i.id}>
          <div
            className={`w-[350px] h-[300px] mx-auto rounded border-solid bg-gray-300 ${style.card}`}
          >
            <div className={style.card_overlay}>
              <div className="hidden absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white z-10 group-hover:block">
                <Link
                  className={`text-bold text-xl capitalize cursor-pointer ${style.card_overlay_text}`}
                  href={`/design_page/${i.id}`}
                  target="_blank"
                >
                  open project
                </Link>
              </div>
            </div>
            <img
              src={i.image}
              alt="image"
              className="w-full h-full object-cover p-3"
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AllProjects;
