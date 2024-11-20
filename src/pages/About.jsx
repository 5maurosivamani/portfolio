import React, { lazy } from "react";
import { LazyComponent, PageHeading } from "../components";
import { motion } from "motion/react";

// import { Accomplishment, BioData, ExperienceAndEducation, Skills } from "../container";

// Lazy load components
const Accomplishment = lazy(() => import("../container/Accomplishment"));
const BioData = lazy(() => import("../container/BioData"));
const ExperienceAndEducation = lazy(() =>
  import("../container/ExperienceAndEducation")
);
const Skills = lazy(() => import("../container/Skills"));

function About() {
  return (
    <div className="h-full overflow-x-hidden overflow-y-auto bg-white dark:bg-dark-primary pb-10">
      <PageHeading title="Resume" subTitle={["About", "Me"]} />

      <div className="flex flex-col xl:flex-row lg:space-x-16 w-4/5 mx-auto">
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -200 }}
          transition={{ duration: 0.9 }}
          className="lg:p-10 mb-5 lg:mb-0 flex xl:justify-end"
        >
          <LazyComponent component={<BioData />} />
        </motion.div>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: 200 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <LazyComponent component={<Accomplishment />} />
        </motion.div>
      </div>

      <Separator />

      <LazyComponent component={<Skills />} />

      <Separator />

      <LazyComponent component={<ExperienceAndEducation />} />
    </div>
  );
}

export default About;

const Separator = ({ classes }) => {
  return (
    <div className={`w-2/5 h-[1px] bg-gray-200 mx-auto my-20 ${classes}`} />
  );
};
