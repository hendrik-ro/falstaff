import { useDispatch, useSelector } from "react-redux";
import {
  clearChapterLinks,
  selectActiveChapter,
  setActiveChapter,
  setChapterLinks,
} from "../navBar/navBarSlice";
import { useEffect } from "react";

export default function Authentication() {
  const dispatch = useDispatch();
  const activeChapter = useSelector(selectActiveChapter);

  useEffect(() => {
    dispatch(
      setChapterLinks([
        {
          name: "Authentication",
          active: true,
        },
      ]),
    );
    dispatch(setActiveChapter("Authentication"));

    return () => {
      dispatch(clearChapterLinks());
      dispatch(setActiveChapter(""));
    };
  });
  return (
    <div>
      <h1>Authentication</h1>
      {activeChapter === "Authentication" && <></>}
    </div>
  );
}
