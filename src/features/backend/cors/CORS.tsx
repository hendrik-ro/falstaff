import { useDispatch, useSelector } from "react-redux";
import {
  clearChapterLinks,
  selectActiveChapter,
  setActiveChapter,
  setChapterLinks,
} from "../../navBar/navBarSlice";
import { useEffect } from "react";

export default function CORS() {
  const dispatch = useDispatch();
  const activeChapter = useSelector(selectActiveChapter);
  useEffect(() => {
    dispatch(
      setChapterLinks([
        {
          name: "CORS",
          active: true,
        },
      ]),
    );
    dispatch(setActiveChapter("CORS"));

    return () => {
      dispatch(clearChapterLinks());
      dispatch(setActiveChapter(""));
    };
  }, [dispatch]);

  return (
    <div>
      <h1>CORS</h1>
      <p>
        <em>Cross-origin resource sharing</em> controls who can access resources.
      </p>
      {activeChapter === "CORS" && <CORSAbout />}
    </div>
  );
}

function CORSAbout() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
