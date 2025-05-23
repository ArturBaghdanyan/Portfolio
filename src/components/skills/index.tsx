import React, { useState } from "react";
import Image from "next/image";

import { listSkills } from "@/data/skills";
import { Skill } from "@/types/skills";

const MySkills = () => {
  const [skills] = useState<Skill[]>(listSkills);

  return (
    <div className="my-8 container-spacing">
      <h2 className="title">Skills</h2>

      <div className="w-full mx-auto flex flex-wrap gap-x-14 mt-8 gap-y-8 justify-center">
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
              <skill.imgSrc className="w-14 h-14 text-[#16a7d3]" />
            )}

            <span className="text-[#e3e0e0] font-mono">{skill.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
