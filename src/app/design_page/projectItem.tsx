"use client";

import Link from "next/link";
import { IProject } from "@/types/project-type";

type GarantProjectProps = {
  data: IProject;
};

export const ProjectItem: React.FC<GarantProjectProps> = ({ data }) => {
  return (
    <div className="w-11/12 h-auto flex flex-col md:flex-row justify-center gap-y-0.5 gap-x-3 items-start px-3 sm:text-lg sm:w-full sm:flex-col sm:p-7 max-[500px]:text-start my-6 m-auto">
      <img
        src={data.image}
        alt="image"
        className="object-cover sm:w-3/4 sm:h-3/4 m-auto md:w-2/5 md:h-2/5 md:m-0"
      />
      <div className="flex flex-col max-w-[600px] w-full">
        <div className="w-full h-auto bg-white rounded">
          <div className="flex flex-col gap-4 p-3">
            <h1 className="text-xl">
              <b>Project Information</b>
            </h1>
            <hr />
            <div className="flex flex-col gap-4">
              <p className="capitalize">
                <b>Category:</b> {data.key}
              </p>
              <p>
                <b>Project Date:</b>
                {data.date}
              </p>
              <p>
                <b>Project Url:</b>{" "}
                <Link
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-black !important"
                >
                  <span className="hover:text-green-500">{data.link}</span>
                </Link>
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-3 mt-3">
          <h1 className="text-2xl">{data.title}</h1>

          <div className="border-l-2 mt-4 flex flex-col gap-y-5 text-ellipsis sm:text-start">
            <p className="flex flex-col font-mono">{data.description}</p>

            {data.items?.map((item) => (
              <ul key={item.id}>
                <li className="italic font-mono">
                  <b className="font-mono">{item.title}</b> {item.description}
                </li>
              </ul>
            ))}

            {data.site && (
              <p className="flex flex-col font-mono">
                <Link
                  href={data.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Site:{" "}
                  <span className="hover:text-green-500">{data.site}</span>
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
