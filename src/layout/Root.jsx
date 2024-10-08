import React from "react";
import { Outlet } from "react-router-dom";
import { NavLinks } from "../components";

function Root() {
  return (
    <div className="flex flex-col">
      {/* Your app content goes here */}
      <div className="h-screen w-full relative">
        <Outlet />
        <NavLinks />
      </div>
    </div>
  );
}

export default Root;
