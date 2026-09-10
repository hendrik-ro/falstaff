import { createSlice } from "@reduxjs/toolkit";
import type { NavBarChapter, NavBarLink } from "../../types/NavBar";
import type { RootState } from "../../app/store";

interface NavBarState {
  links: NavBarLink[];
  chapterLinks: NavBarChapter[];
  activeChapter: string;
}

const initialState: NavBarState = {
  links: [],
  chapterLinks: [],
  activeChapter: "",
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
    toggleActiveChapterLink: (state, action) => {
      const { name } = action.payload;
      state.chapterLinks = state.chapterLinks.map((link) => {
        return link.name === name
          ? { ...link, active: true }
          : { ...link, active: false };
      });
      state.activeChapter = name;
    },
    setActiveChapter: (state, action) => {
      state.activeChapter = action.payload;
    },
  },
});

export const selectLinks = (state: RootState) => state.navBarSliceReducer.links;
export const selectChapterLinks = (state: RootState) =>
  state.navBarSliceReducer.chapterLinks;
export const selectActiveChapter = (state: RootState) =>
  state.navBarSliceReducer.activeChapter;
export const {
  setLinks,
  setChapterLinks,
  clearLinks,
  clearChapterLinks,
  toggleActiveChapterLink,
  setActiveChapter,
} = navBarSlice.actions;
export const navBarState = navBarSlice.reducer;
export default navBarState;
