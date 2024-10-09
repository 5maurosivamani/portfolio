import React from "react";
import { ExperienceCard } from "../components";
import { FaSuitcase, FaUniversity } from "react-icons/fa";
import { getId } from "../utils";

function ExperienceAndEducation() {
  const EXPERIENCE_DATA = [
    {
      position: "React and React Native Developer",
      company: "Edumpus",
      duration: "2023 - 2024",
      description:
        "At Edumpus, I worked as a full-stack developer, focusing on building a property rental and booking system. I utilized React for the front-end and Node.js, Express, and MySQL for the back-end. My work involved creating user-friendly interfaces, managing data, and ensuring seamless system performance.",
    },
    {
      position: "PHP Full Stack Developer",
      company: "Auro Infotech",
      duration: "2020 - 2023",
      description:
        "At Auro Infotech, I worked as a PHP full-stack developer, building and maintaining web applications. I used PHP, along with front-end technologies and MySQL, to create dynamic, scalable solutions. My role involved collaborating with teams to implement new features and optimize application performance.",
    },
  ];

  const EDUCATIONAL_DATA = [
    {
      level: "Master of Computer Application",
      institute: "SA.Engineering College",
      duration: "2019 - 2021",
      description: "CGPA - 7.6",
    },
    {
      level: "Bachelor of Computer Science",
      institute: "E.G.S Pillay Arts & Science College",
      duration: "2016 - 2019",
      description: "CGPA - 7.8",
    },
    {
      level: "H.S.C",
      institute: "Government Higher Secondary School",
      duration: "2014 - 2016",
      description: "Percentage - 61%",
    },
  ];

  const getUniqueId = getId();

  return (
    <div className="grid lg:grid-cols-2 gap-5 w-5/6 mx-auto">
      <div className="flex flex-col space-y-14">
        {EXPERIENCE_DATA?.map(
          ({ position, company, duration, description }) => {
            return (
              <ExperienceCard
                position={position}
                company={company}
                duration={duration}
                description={description}
                icon={FaSuitcase}
                key={getUniqueId.next().value}
              />
            );
          }
        )}
      </div>

      <div className="flex flex-col space-y-14">
        {EDUCATIONAL_DATA?.map(
          ({ level, institute, duration, description }) => {
            return (
              <ExperienceCard
                position={level}
                company={institute}
                duration={duration}
                description={description}
                icon={FaUniversity}
                key={getUniqueId.next().value}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default ExperienceAndEducation;
