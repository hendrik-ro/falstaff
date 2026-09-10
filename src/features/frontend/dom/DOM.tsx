import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveChapter,
  setActiveChapter,
  setChapterLinks,
  setLinks,
} from "../../navBar/navBarSlice";

export default function DocumentObjectModel() {
  const dispatch = useDispatch();
  const activeChapter = useSelector(selectActiveChapter);
  useEffect(() => {
    dispatch(
      setLinks([
        {
          name: "Home",
          href: "/falstaff",
        },
      ]),
    );
    dispatch(
      setChapterLinks([
        {
          name: "DOM",
          active: true,
        },
      ]),
    );
    dispatch(setActiveChapter("dom"));

    // Clear chapters on unmount
    return () => {
      dispatch(setChapterLinks([]));
      dispatch(setActiveChapter(""));
    };
  }, [dispatch]);
  return (
    <div>
      <h1>Document Object Model</h1>

      {activeChapter === "dom" && <DOMIntro />}
    </div>
  );
}

function DOMIntro() {
  return (
    <div>
      <p>Lorem ipsum</p>
    </div>
  );
}
