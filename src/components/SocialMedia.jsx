import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { getId } from "../utils";

const SOCIAL_MEDIA_DATA = [
  {
    name: "Linked In",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/callmesiva03/",
  },
  {
    name: "Git Hub",
    icon: FaGithub,
    link: "https://github.com/5maurosivamani",
  },
  {
    name: "Leet Code",
    icon: TbBrandLeetcode,
    link: "https://leetcode.com/u/5maurosivamani/",
  },
];

const getUniqueId = getId();

function SocialMedia() {
  return (
    <div className="flex space-x-5">
      {SOCIAL_MEDIA_DATA?.map((socialMedia) => (
        <SocialMediaLink {...socialMedia} key={getUniqueId.next().value} />
      ))}
    </div>
  );
}

export default SocialMedia;

const SocialMediaLink = ({ icon: Icon, link, name }) => {
  return (
    <div className="h-12 w-12 rounded-full flex justify-center items-center bg-gray-700 hover:bg-light-primary text-white cursor-pointer">
      <a href={link} target={"_blank"} title={name}>
        <Icon size={24} />
      </a>
    </div>
  );
};
