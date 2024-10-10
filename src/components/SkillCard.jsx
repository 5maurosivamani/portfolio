import React from "react";
import { colors } from "../utils/config";
import { useSelector } from "react-redux";

function SkillCard({ title, percentage }) {
  const windowWidth = useSelector((state) => state.utils.width);
  return (
    <div className="flex flex-col items-center min-w-28 md:w-32 mx-auto">
      <div
        className="radial-progress  text-light-primary mb-5"
        style={{
          "--value": percentage,
          "--size": windowWidth < 768 ? "6rem" : "8rem",
          fontSize: windowWidth < 768 ? "1.2rem" : "1.5rem",
        }}
        role="progressbar"
        color="green"
      >
        {percentage}%
      </div>
      <p className="text-center text-xs sm:text-sm tracking-wider uppercase text-dark-primary dark:text-white">
        {title}
      </p>
    </div>
  );
}

export default SkillCard;
