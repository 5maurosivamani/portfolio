import React from "react";
import { FaHome, FaSuitcase } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoMail } from "react-icons/io5";
import { MdHome, MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const NAV_LINKS_DATA = [
  {
    name: "HOME",
    path: "/",
    icon: FaHome,
  },
  {
    name: "ABOUT",
    path: "/about",
    icon: FaSuitcase,
  },
  {
    name: "CONTACT",
    path: "/contact",
    icon: IoMail,
  },
];

function NavLinks() {
  return (
    <ul className="list-none flex flex-col items-end justify-end w-1/4 gap-5 fixed right-10  top-1/2 transform  -translate-y-1/2 ">
      {NAV_LINKS_DATA?.map(({ name, path, icon: Icon }) => (
        <li>
          <Link
            to={path}
            className="flex items-center justify-center hover:justify-end px-3 h-12 w-12 hover:w-auto group rounded-full opacity-90 bg-gray-700   hover:bg-primary transition-all duration-300"
          >
            <span className=" hidden group-hover:me-2 px-3  opacity-0 group-hover:block group-hover:opacity-100 transition-all duration-300">
              {name}
            </span>
            <Icon size={24} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
