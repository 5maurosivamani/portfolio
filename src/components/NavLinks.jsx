import React, { useEffect, useState } from "react";
import { FaHome, FaSuitcase, FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdClose, MdDarkMode, MdSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import { toggleTheme } from "../redux/features/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { getId } from "../utils";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { setIsOpen, toggleIsOpen } from "../redux/features/sideBarSlice";

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
  const selectedTheme = useSelector((state) => state.theme.value);
  const selectedIsOpen = useSelector((state) => state.sidebar.value);

  useEffect(() => {
    dispatch(toggleTheme());
  }, []);


  const getUniqueId = getId();

  console.log("is-open => ", selectedIsOpen);

  return (
    <div>
      <div className="h-full  fixed top-0 right-0 flex flex-col justify-center items-end m-6">
        <ul className="space-y-6 hidden lg:flex flex-col items-end">
          {NAV_LINKS_DATA?.map(({ name, path, icon: Icon }) => (
            <li key={getUniqueId.next().value}>
              <Link
                to={path}
                className="flex items-center justify-center hover:justify-end px-3 h-12 w-12 hover:w-auto group rounded-full opacity-90 bg-gray-700   hover:bg-light-primary text-white transition-all duration-800"
              >
                <span className=" hidden group-hover:me-2 px-3  opacity-0 group-hover:block group-hover:opacity-100 transition-all duration-300">
                  {name}
                </span>
                <Icon size={24} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`w-full h-screen fixed top-0 p-10 py-20 text-gray-700 dark:text-white bg-white dark:bg-light-secondary z-50 transition-all duration-700 ${
          selectedIsOpen ? "left-0" : "-left-full"
        }`}
      >
        <ul>
          {NAV_LINKS_DATA?.map(({ name, path, icon: Icon }) => (
            <li
              className="flex items-center border-b  border-b-slate-200 "
              key={getUniqueId.next().value}
              onClick={() => {
                dispatch(setIsOpen(false));
              }}
            >
              <Icon size={28} />
              <Link to={path} className="ms-3 text-2xl py-5 w-full">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col space-y-5 fixed right-5 top-5 z-50 ">
        <RoundedButton
          icon={selectedIsOpen ? MdClose : HiMiniBars3CenterLeft}
          onClick={() => {
            dispatch(toggleIsOpen());
          }}
          classes="lg:hidden mx-6"
        />
        <RoundedButton
          icon={selectedTheme === "dark" ? MdSunny : MdDarkMode}
          onClick={() => {
            dispatch(toggleTheme());
          }}
          classes="mx-6"
        />
      </div>
    </div>
  );
}

export default NavLinks;

const RoundedButton = ({ icon: Icon, classes, ...props }) => {
  return (
    <div
      className={`bg-gray-700 h-12 w-12 rounded-full flex justify-center items-center hover:bg-light-primary text-white  cursor-pointer transition-all duration-500 ${classes}`}
      {...props}
    >
      <Icon size={24} />
    </div>
  );
};
