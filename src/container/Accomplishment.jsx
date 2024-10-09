import React from "react";
import { getId } from "../utils";

function Accomplishment() {
  const ACCOMPLISHMENT_DATA = [
    {
      title: "YEARS OF EXPERIENCE",
      count: "3",
    },
    {
      title: "COMPLETED PROJECTS",
      count: "4",
    },
    {
      title: "HAPPY CUSTOMERS",
      count: "30",
    },
    {
      title: "AWARDS WON",
      count: "2",
    },
  ];

  const getUniqueId = getId();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-5">
      {ACCOMPLISHMENT_DATA?.map((data) => (
        <AccomplishmentCard title={data.title} count={data.count} key={getUniqueId.next().value} />
      ))}
    </div>
  );
}

export default Accomplishment;

const AccomplishmentCard = ({ title, count }) => {
  return (
    <div className="border border-gray-400 rounded p-10 text-dark-primary dark:text-white">
      <h1 className="text-[2.5rem] md:text-[3rem] font-extrabold text-light-primary">
        {count}
        <sup>+</sup>
      </h1>
      <p className="relative md:w-4/5 text-gray-400">
        <span className="h-[1px] w-6 rounded bg-dark-primary absolute -left-8 top-1/2 -translate-y-1/2"></span>
        {title}
      </p>
    </div>
  );
};
