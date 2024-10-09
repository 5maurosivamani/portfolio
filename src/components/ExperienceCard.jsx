import React from "react";

function ExperienceCard({
  duration,
  position,
  company,
  description,
  icon: Icon,
}) {
  return (
    <div className="border-l ps-10 flex flex-col gap-4 items-start relative text-slate-500 dark:text-gray-500 ">
      <p className="p-2 px-4 rounded-full bg-gray-200  font-semibold">
        {duration}
      </p>
      <h2 className="text-xl font-semibold">
        {position} - <span className="font-bold uppercase">{company}</span>
      </h2>
      <p className="w-full md:w-2/3">{description}</p>
      <div className="absolute top-0 left-0 -translate-x-1/2 h-14 w-14 rounded-full bg-light-primary flex justify-center items-center text-white">
        <Icon size={24} />
      </div>
    </div>
  );
}

export default ExperienceCard;
