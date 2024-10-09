import React from "react";
import { SkillCard } from "../components";
import { getId } from "../utils";

function Skills() {
  const SKILLS_DATA = [
    {
      name: "HTML",
      percentage: 73,
    },
    {
      name: "JAVA SCRIPT",
      percentage: 76,
    },
    {
      name: "CSS",
      percentage: 75,
    },
    {
      name: "react",
      percentage: 76,
    },
    {
      name: "redux toolkit",
      percentage: 75,
    },
    {
      name: "node js",
      percentage: 60,
    },
    {
      name: "express",
      percentage: 72,
    },
    {
      name: "mysql",
      percentage: 80,
    },
  ];

  const getUniqueId = getId();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-7 w-5/6 mx-auto">
      {SKILLS_DATA?.map((skill) => (
        <SkillCard
          title={skill.name}
          percentage={skill.percentage}
          key={getUniqueId.next().value}
        />
      ))}
    </div>
  );
}

export default Skills;
