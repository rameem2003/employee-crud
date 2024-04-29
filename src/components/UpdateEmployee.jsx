import React from "react";

const UpdateEmployee = () => {
  return (
    <section>
      <h1 className=" font-bold text-4xl">Update Employee</h1>

      <form action="" className="mt-5 w-full">
        <div className=" flex items-center justify-between gap-4">
          <div class="mb-6 w-1/2">
            <label for="success" class="block mb-2 text-xl font-medium">
              Employee name
            </label>
            <input
              type="text"
              id="success"
              class=" w-full border-[1px] border-gray-700 text-green-900  text-sm rounded-lg  block p-2.5 "
              placeholder=" Employee name"
            />
            <p class="mt-2 font-medium text-sm text-green-500 ">
              All Looks Good!
            </p>
          </div>

          <div class="mb-6 w-1/2">
            <label for="success" class="block mb-2 text-xl font-medium">
              Phone Number
            </label>
            <input
              type="text"
              id="success"
              class=" w-full border-[1px] border-gray-700 text-green-900  text-sm rounded-lg  block p-2.5 "
              placeholder=" Phone number"
            />
            <p class="mt-2 font-medium text-sm text-green-500 ">
              All Looks Good!
            </p>
          </div>
        </div>

        <div className=" flex items-center justify-between gap-4">
          <div class="mb-6 w-1/2">
            <label for="success" class="block mb-2 text-xl font-medium">
              Employee Age
            </label>
            <input
              type="text"
              id="success"
              class=" w-full border-[1px] border-gray-700 text-green-900  text-sm rounded-lg  block p-2.5 "
              placeholder=" Employee Age"
            />
            <p class="mt-2 font-medium text-sm text-green-500 ">
              All Looks Good!
            </p>
          </div>

          <div class="mb-6 w-1/2">
            <label for="success" class="block mb-2 text-xl font-medium">
              Company
            </label>
            <input
              type="text"
              id="success"
              class=" w-full border-[1px] border-gray-700 text-green-900  text-sm rounded-lg  block p-2.5 "
              placeholder=" Company"
            />
            <p class="mt-2 font-medium text-sm text-green-500 ">
              All Looks Good!
            </p>
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
