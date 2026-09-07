import { createSlice } from "@reduxjs/toolkit";
import type { NavBarLink } from "../../types/NavBar";
import type { RootState } from "../../app/store";

interface NavLinksState {
  navLinks: NavBarLink[];
}

const initialState: NavLinksState = {
  navLinks: [],
};

const navLinksSlice = createSlice({
  name: "navLinks",
  initialState: initialState,
  reducers: {
    setLinks: (state, action) => {
      state.navLinks = action.payload;
    },
  },
});

export const selectNavLinks = (state: RootState) =>
  state.navLinksSliceReducer.navLinks;
export const { setLinks } = navLinksSlice.actions;
export const navLinksState = navLinksSlice.reducer;
export default navLinksState;
