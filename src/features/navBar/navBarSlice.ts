import { createSlice } from "@reduxjs/toolkit";
import type { NavBarLink } from "../../types/NavBar";
import type { RootState } from "../../app/store";

interface NavBarState {
  links: NavBarLink[];
  chapterLinks: NavBarLink[];
}

const initialState: NavBarState = {
  links: [],
  chapterLinks: [],
};

const navBarSlice = createSlice({
  name: "navBar",
  initialState: initialState,
  reducers: {
    setLinks: (state, action) => {
      state.links = action.payload;
    },
    clearLinks: (state) => {
      state.links = [];
    },
    setChapterLinks: (state, action) => {
      state.chapterLinks = action.payload;
    },
    clearChapterLinks: (state) => {
      state.chapterLinks = [];
    },
  },
});

export const selectLinks = (state: RootState) => state.navBarSliceReducer.links;
export const selectChapterLinks = (state: RootState) =>
  state.navBarSliceReducer.chapterLinks;
export const { setLinks, setChapterLinks, clearLinks, clearChapterLinks } =
  navBarSlice.actions;
export const navBarState = navBarSlice.reducer;
export default navBarState;
