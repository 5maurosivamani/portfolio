import React from "react";
import { Outlet } from "react-router-dom";
import { NavLinks } from "../components";
import { useSelector } from "react-redux";

function Root() {
  const isOpen = useSelector((state) => state.sidebar.value);

  console.log("open", isOpen);

  return (
    <div
      className={`flex flex-col h-screen w-full relative transition-all duration-500  ${
        isOpen ? "overflow-hidden" : ""
      }`}
    >
      <Outlet />
      <NavLinks />
    </div>
  );
}

export default Root;
