import React, { useState } from "react";
import Image from "next/image";

import { listSkills } from "@/data/skills";
import { Skill } from "@/types/skills";
import Card from "../Projects/card";

const MySkills = () => {
  const [skills] = useState<Skill[]>(listSkills);

  return (
    <Card>
      <div className="my-8 container-spacing">
        <h2 className="title">Skills</h2>

        <div className="w-[80%] mx-auto flex flex-wrap gap-x-14 mt-8 gap-y-8 justify-center">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="w-[90px] h-auto flex flex-col items-center text-center gap-y-3"
            >
              {typeof skill.imgSrc === "string" ? (
                <Image
                  src={skill.imgSrc}
                  alt={skill.text}
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
              ) : (
                <skill.imgSrc className="w-14 h-14 text-[#151cef]" />
              )}

              <span className="font-mono font-bold">{skill.text}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default MySkills;
