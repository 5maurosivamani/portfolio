import React from "react";

function PageHeading({ title, subTitle }) {
  return (
    <div>
      <div className="relative text-center uppercase py-5 md:py-2">
        <h1 className="text-[3.1rem] sm:text-[5.5rem] md:text-[7rem] font-extrabold tracking-wider text-gray-500 opacity-15">
          {title}
        </h1>
        <h2 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3.5rem] font-extrabold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700 dark:text-white">
          {subTitle?.[0]}{" "}
          <span className="text-light-primary">{subTitle[1]}</span>
        </h2>
      </div>
    </div>
  );
}

export default PageHeading;
