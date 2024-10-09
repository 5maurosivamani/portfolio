import React, { useEffect, useState } from "react";
import { FaHome, FaSuitcase, FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdDarkMode, MdSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import { selectTheme, toggleTheme } from "../redux/features/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { getId } from "../utils";

const NAV_LINKS_DATA = [
  {
    name: "HOME",
    path: "/",
    icon: FaHome,
  },
  {
    name: "ABOUT",
    path: "/about",
    icon: FaUser,
  },
  {
    name: "CONTACT",
    path: "/contact",
    icon: IoMail,
  },
];

function NavLinks() {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(selectTheme);
  const [theme, setTheme] = useState(selectedTheme);

  useEffect(() => {
    dispatch(toggleTheme());
  }, [theme]);

  const getUniqueId = getId();

  return (
    <div className="h-full    fixed top-0 right-0 flex flex-col justify-between items-end m-6">
      <div
        className="bg-gray-700 h-12 w-12 rounded-full flex justify-center items-center hover:bg-light-primary   cursor-pointer transition-all duration-500"
        onClick={() => {
          setTheme((pre) => (pre === "dark" ? "light" : "dark"));
        }}
      >
        <Link>{theme === "dark" ? <MdSunny /> : <MdDarkMode />}</Link>
      </div>
      <ul className="space-y-6 flex flex-col items-end">
        {NAV_LINKS_DATA?.map(({ name, path, icon: Icon }) => (
          <li key={getUniqueId.next().value}>
            <Link
              to={path}
              className="flex items-center justify-center hover:justify-end px-3 h-12 w-12 hover:w-auto group rounded-full opacity-90 bg-gray-700   hover:bg-light-primary text-white transition-all duration-300"
            >
              <span className=" hidden group-hover:me-2 px-3  opacity-0 group-hover:block group-hover:opacity-100 transition-all duration-300">
                {name}
              </span>
              <Icon size={24} />
            </Link>
          </li>
        ))}
      </ul>
      <span></span>
    </div>
  );
}

export default NavLinks;
