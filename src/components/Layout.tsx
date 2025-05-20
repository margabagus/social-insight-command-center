
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Layout/Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
