import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
  name: "user",
};

const ReduxState = createSlice({
  name: "FlexSquirelly",
  initialState,
  reducers: {
    userNameState: (state: any, { payload }) => {
      state.user = payload;
    },
    setUserName: (state: any, { payload }) => {
      state.name = payload;
    },
  },
});

export const { userNameState, setUserName } = ReduxState.actions;

export default ReduxState.reducer;
