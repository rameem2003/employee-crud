import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "../slices/UserSlice";

const UpdateEmployee = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  let user = location.state.key.user;
  let index = location.state.key.i;
  // console.log(user);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [company, setCompany] = useState("");

  const [nameerr, setNameerr] = useState(false);
  const [phoneerr, setPhoneerr] = useState(false);
  const [ageerr, setAgeerr] = useState(false);
  const [companyerr, setCompanyerr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameerr(true);
    }

    if (!phone) {
      setPhoneerr(true);
    }

    if (!age) {
      setAgeerr(true);
    }

    if (!company) {
      setCompanyerr(true);
    }

    if (name && phone && age && company) {
      let newUser = { name, phone, age, company };
      dispatch(updateUser({ id: index, user: newUser }));

      setName("");
      setPhone("");
      setAge("");
      setCompany("");
      navigate("/");
    }
  };

  return (
    <section>
      <h1 className=" font-bold text-4xl">Update Employee</h1>

      <form action="" className="mt-5 w-full" onSubmit={handleSubmit}>
        <div className=" flex items-center justify-between gap-4">
          <div class="mb-6 w-1/2">
            <label htmlFor="success" class="block mb-2 text-xl font-medium">
              Employee name
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
                setNameerr(false);
              }}
              defaultValue={user.name}
              type="text"
              id="success"
              class=" w-full border-[1px] border-gray-700 text-green-900  text-sm rounded-lg  block p-2.5 "
              placeholder={user.name}
            />

            {nameerr && (
              <p class="mt-2 font-medium text-sm text-red-500 ">Field Empty</p>
            )}
          </div>

          <div class="mb-6 w-1/2">
            <label htmlFor="success" class="block mb-2 text-xl font-medium">
              Phone Number
            </label>
            <input
              onChange={(e) => {
                setPhone(e.target.value);
                setPhoneerr(false);
              }}
              defaultValue={user.phone}
              type="text"
              id="success"
              class=" w-full border-[1px] border-gray-700 text-green-900  text-sm rounded-lg  block p-2.5 "
              placeholder={user.phone}
            />
            {phoneerr && (
              <p class="mt-2 font-medium text-sm text-red-500 ">Field Empty</p>
            )}
          </div>
        </div>

        <div className=" flex items-center justify-between gap-4">
          <div class="mb-6 w-1/2">
            <label htmlFor="success" class="block mb-2 text-xl font-medium">
              Employee Age
            </label>
            <input
              onChange={(e) => {
                setAge(e.target.value);
                setAgeerr(false);
              }}
              defaultValue={user.age}
              type="text"
              id="success"
              class=" w-full border-[1px] border-gray-700 text-green-900  text-sm rounded-lg  block p-2.5 "
              placeholder={user.age}
            />
            {ageerr && (
              <p class="mt-2 font-medium text-sm text-red-500 ">Field Empty</p>
            )}
          </div>

          <div class="mb-6 w-1/2">
            <label htmlFor="success" class="block mb-2 text-xl font-medium">
              Company
            </label>
            <input
              onChange={(e) => {
                setCompany(e.target.value);
                setCompanyerr(false);
              }}
              defaultValue={user.company}
              type="text"
              id="success"
              class=" w-full border-[1px] border-gray-700 text-green-900  text-sm rounded-lg  block p-2.5 "
              placeholder={user.company}
            />
            {companyerr && (
              <p class="mt-2 font-medium text-sm text-red-500 ">Field Empty</p>
            )}
          </div>
        </div>

        <button
          className="p-2.5 rounded-lg text-center font-medium text-lg text-white bg-blue-500 w-full"
          type="submit"
        >
          Update
        </button>
      </form>
    </section>
  );
};

export default UpdateEmployee;
