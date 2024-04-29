import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("officeData")
      ? JSON.parse(localStorage.getItem("officeData"))
      : [],
  },
  reducers: {
    addUser: (state, action) => {
      state.user = [...state.user, action.payload];

      localStorage.setItem("officeData", JSON.stringify(state.user));
    },
    deleteTheUser: (state, action) => {
      let filtered = state.user.filter((user) => user.id !== action.payload);
      state.user = filtered;
      localStorage.setItem("officeData", JSON.stringify(state.user));
    },

    updateUser: (state, action) => {
      console.log(action.payload.id);
      state.user[action.payload.id].name = action.payload.user.name;
      state.user[action.payload.id].phone = action.payload.user.phone;
      state.user[action.payload.id].age = action.payload.user.age;
      state.user[action.payload.id].company = action.payload.user.company;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, deleteTheUser, updateUser } = UserSlice.actions;

export default UserSlice.reducer;
