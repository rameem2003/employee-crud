import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/UserSlice";
import { useNavigate } from "react-router-dom";

const CreateNewEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      let newUser = { id: uuidv4(), name, phone, age, company };
      dispatch(addUser(newUser));

      setName("");
      setPhone("");
      setAge("");
      setCompany("");
      navigate("/");
    }
  };

  return (
    <section>
      <h1 className=" font-bold text-4xl">Create New Employee</h1>

      <form action="" className="mt-5 w-full" onSubmit={handleSubmit}>
        <div className=" flex items-center justify-between gap-4">
          <div class="mb-6 w-1/2">
            <label for="success" class="block mb-2 text-xl font-medium">
              Employee name
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
                setNameerr(false);
              }}
              type="text"
              id="success"
              class=" w-full border-[1px] border-gray-700 text-green-900  text-sm rounded-lg  block p-2.5 "
              placeholder=" Employee name"
            />

            {nameerr && (
              <p class="mt-2 font-medium text-sm text-red-500 ">Field Empty</p>
            )}
          </div>

          <div class="mb-6 w-1/2">
            <label for="success" class="block mb-2 text-xl font-medium">
              Phone Number
            </label>
            <input
              onChange={(e) => {
                setPhone(e.target.value);
                setPhoneerr(false);
              }}
              type="text"
              id="success"
              class=" w-full border-[1px] border-gray-700 text-green-900  text-sm rounded-lg  block p-2.5 "
              placeholder=" Phone number"
            />
            {phoneerr && (
              <p class="mt-2 font-medium text-sm text-red-500 ">Field Empty</p>
            )}
          </div>
        </div>

        <div className=" flex items-center justify-between gap-4">
          <div class="mb-6 w-1/2">
            <label for="success" class="block mb-2 text-xl font-medium">
              Employee Age
            </label>
            <input
              onChange={(e) => {
                setAge(e.target.value);
                setAgeerr(false);
              }}
              type="text"
              id="success"
              class=" w-full border-[1px] border-gray-700 text-green-900  text-sm rounded-lg  block p-2.5 "
              placeholder=" Employee Age"
            />
            {ageerr && (
              <p class="mt-2 font-medium text-sm text-red-500 ">Field Empty</p>
            )}
          </div>

          <div class="mb-6 w-1/2">
            <label for="success" class="block mb-2 text-xl font-medium">
              Company
            </label>
            <input
              onChange={(e) => {
                setCompany(e.target.value);
                setCompanyerr(false);
              }}
              type="text"
              id="success"
              class=" w-full border-[1px] border-gray-700 text-green-900  text-sm rounded-lg  block p-2.5 "
              placeholder=" Company"
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
          Create
        </button>
      </form>
    </section>
  );
};

export default CreateNewEmployee;
