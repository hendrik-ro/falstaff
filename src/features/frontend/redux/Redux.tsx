import { useDispatch, useSelector } from "react-redux";
import {
  clearChapterLinks,
  selectActiveChapter,
  setActiveChapter,
  setChapterLinks,
  setLinks,
} from "../../navBar/navBarSlice";
import { useEffect } from "react";
import Syntax from "../../../components/SyntaxHighlighter";

export default function Redux() {
  const dispatch = useDispatch();
  const activeChapter = useSelector(selectActiveChapter);
  useEffect(() => {
    dispatch(
      setLinks([
        {
          name: "Home",
          to: "/falstaff",
        },
      ]),
    );
    dispatch(
      setChapterLinks([
        {
          name: "Redux",
          active: true,
        },
      ]),
    );
    dispatch(setActiveChapter("Redux"));

    // Clear chapters on unmount
    return () => {
      dispatch(clearChapterLinks());
      dispatch(setActiveChapter(""));
    };
  }, [dispatch]);

  return (
    <div>
      <header>
        <h1>Redux</h1>
        <p>Provides a predictable state container for React applications.</p>
      </header>

      {activeChapter === "Redux" && <ReduxSetup />}
    </div>
  );
}

function ReduxSetup() {
  return (
    <div>
      <h2>Redux Setup</h2>
      <p>
        <a
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>{" "}
        is a state management framework for React that centralizes the state of
        an application.
      </p>
      <p>
        It provides patterns and tools to make it easier to understand when,
        where, why, and how the state is being updated.
      </p>
      <br style={{ marginTop: "2rem" }} />
      <p>
        <a
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>{" "}
        is a set of utilities that simplify Redux development:
      </p>
      <Syntax
        language="bash"
        code={`$ npm i -D react-redux @reduxjs/toolkit`}
      />
    </div>
  );
}
