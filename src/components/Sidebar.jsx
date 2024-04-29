import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className=" p-3 bg-white border-r-[1px] border-slate-800 min-h-screen">
      <h1 className=" font-bold text-3xl text-center">Employee</h1>

      <ul className="mt-5 w-full">
        <li>
          <Link
            to="/"
            className=" block p-3 mb-3 font-semibold text-xl text-black rounded-r-[15px] hover:bg-blue-500 hover:text-white"
          >
            All Employee
          </Link>
        </li>
        <li>
          <Link
            to="/create"
            className=" block p-3 mb-3 font-semibold text-xl text-black rounded-r-[15px] hover:bg-blue-500 hover:text-white"
          >
            Add New Employee
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
