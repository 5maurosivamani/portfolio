import React from "react";
import { colors } from "../utils/config";

function SkillCard({ title, percentage }) {
  return (
    <div className="flex flex-col w-32 mx-auto">
      <div
        className="radial-progress  text-light-primary mb-5"
        style={{ "--value": percentage, "--size": "8rem", fontSize: "1.5rem" }}
        role="progressbar"
        color="green"
      >
        {percentage}%
      </div>
      <p className="text-center tracking-wider uppercase text-dark-primary dark:text-white">
        {title}
      </p>
    </div>
  );
}

export default SkillCard;
