import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <div className=" flex">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12 p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Rootlayout;
