import { useDispatch, useSelector } from "react-redux";
import {
  clearChapterLinks,
  selectActiveChapter,
  setActiveChapter,
  setChapterLinks,
} from "../../navBar/navBarSlice";
import { useEffect } from "react";

export default function OAuth() {
  const dispatch = useDispatch();
  const activeChapter = useSelector(selectActiveChapter);

  useEffect(() => {
    dispatch(
      setChapterLinks([
        {
          name: "oAuth 2.0",
          active: true,
        },
      ]),
    );
    dispatch(setActiveChapter("oAuth 2.0"));

    return () => {
      dispatch(setActiveChapter(""));
      dispatch(clearChapterLinks());
    };
  }, [dispatch]);

  return (
    <div>
      <h1>oAuth 2.0</h1>
      {activeChapter === "oAuth 2.0" && <Intro />}
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h2>Intro</h2>
    </div>
  );
}
