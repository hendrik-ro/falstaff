import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveChapter,
  setActiveChapter,
  setChapterLinks,
  setLinks,
} from "../../navBar/navBarSlice";
import DOMDocument from "./Document";

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
        {
          name: "Document",
          active: false,
        },
      ]),
    );
    dispatch(setActiveChapter("DOM"));

    // Clear chapters on unmount
    return () => {
      dispatch(setChapterLinks([]));
      dispatch(setActiveChapter(""));
    };
  }, [dispatch]);
  return (
    <div>
      <header>
        <h1>DOM</h1>
        <p>
          The <em>Document Object Model</em> (DOM) is a programming interface
          for web documents.
        </p>
      </header>

      {(activeChapter === "DOM" || !activeChapter) && <DOMIntro />}
      {activeChapter === "Document" && <DOMDocument />}
      <br style={{ marginTop: "2rem" }} />
    </div>
  );
}

function DOMIntro() {
  return (
    <div>
      <h2>About</h2>
      <p>
        The DOM represents the structure of a web document as a tree of nodes,
        allowing developers to manipulate and update the document's content and
        structure.
      </p>
      <p>
        Furthermore, it allows for a hierarchy within a web page and JavaScript
        to access, modify, and update its structure.
      </p>
    </div>
  );
}
