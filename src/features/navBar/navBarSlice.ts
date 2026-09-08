import { createSlice } from "@reduxjs/toolkit";
import type { NavBarLink } from "../../types/NavBar";
import type { RootState } from "../../app/store";

interface NavBarState {
  navLinks: NavBarLink[];
}

const initialState: NavBarState = {
  navLinks: [],
};

const navBarSlice = createSlice({
  name: "navLinks",
  initialState: initialState,
  reducers: {
    setLinks: (state, action) => {
      state.navLinks = action.payload;
    },
  },
});

export const selectNavLinks = (state: RootState) =>
  state.navBarSliceReducer.navLinks;
export const { setLinks } = navBarSlice.actions;
export const navBarState = navBarSlice.reducer;
export default navBarState;
