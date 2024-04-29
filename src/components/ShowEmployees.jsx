import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteTheUser } from "../slices/UserSlice";
import { FiRefreshCcw } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ShowEmployees = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alluser = useSelector((state) => state.user.user);
  console.log(alluser);

  const deleteUser = (id) => {
    dispatch(deleteTheUser(id));
  };

  const updateUser = (user, i) => {
    navigate("/update", { state: { key: { user, i } } });
  };
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
          <p className="w-[20%] font-semibold text-lg"></p>
        </div>

        {alluser.map((user, i) => (
          <div className=" flex items-center justify-between border-b-[1px] border-gray-300 p-2">
            <p className="w-[20%] font-semibold text-lg">{user.id}</p>
            <p className="w-[20%] font-semibold text-lg">{user.name}</p>
            <p className="w-[20%] font-semibold text-lg">{user.phone}</p>
            <p className="w-[20%] font-semibold text-lg">{user.age}</p>
            <p className="w-[20%] font-semibold text-lg">{user.company}</p>
            <p className="w-[20%] font-semibold text-lg flex gap-5">
              <FaTrash
                className=" cursor-pointer text-red-500"
                onClick={() => deleteUser(user.id)}
              />

              <FiRefreshCcw
                className=" cursor-pointer text-orange-500"
                onClick={() => updateUser(user, i)}
              />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowEmployees;
