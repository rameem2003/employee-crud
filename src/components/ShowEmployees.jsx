import React from "react";

const ShowEmployees = () => {
  return (
    <section>
      <h1 className=" font-bold text-4xl">All Employees</h1>

      <div className="mt-5">
        <div className=" flex items-center justify-between border-b-[1.5px] border-gray-800 p-2">
          <p className="w-[20%] font-semibold text-lg">ID</p>
          <p className="w-[20%] font-semibold text-lg">Name</p>
          <p className="w-[20%] font-semibold text-lg">Phone</p>
          <p className="w-[20%] font-semibold text-lg">Age</p>
          <p className="w-[20%] font-semibold text-lg">Company</p>
        </div>

        <div className=" flex items-center justify-between border-b-[1px] border-gray-300 p-2">
          <p className="w-[20%] font-semibold text-lg">01</p>
          <p className="w-[20%] font-semibold text-lg">Mahmood Hassan Rameem</p>
          <p className="w-[20%] font-semibold text-lg">01409029641</p>
          <p className="w-[20%] font-semibold text-lg">22</p>
          <p className="w-[20%] font-semibold text-lg">XYZ</p>
        </div>
      </div>
    </section>
  );
};

export default ShowEmployees;
