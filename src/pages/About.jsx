import React from "react";
import { PageHeading } from "../components";


import { Accomplishment, BioData, ExperienceAndEducation, Skills } from "../container";

function About() {
  return (
    <div className="bg-white dark:bg-dark-primary h-full pb-10">
      <PageHeading title="Resume" subTitle={["About", "Me"]} />

      <div className="flex flex-col xl:flex-row lg:space-x-16 w-4/5 mx-auto">
        <div className="lg:p-10 mb-5 lg:mb-0 flex xl:justify-end">
          <BioData />
        </div>
        <div className="flex justify-center">
          <Accomplishment />
        </div>
      </div>

      <Separator />

      <Skills />

      <Separator />

      <ExperienceAndEducation />
    </div>
  );
}

export default About;

const Separator = ({ classes }) => {
  return (
    <div className={`w-2/5 h-[1px] bg-gray-200 mx-auto my-20 ${classes}`} />
  );
};
