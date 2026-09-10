import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {
  clearChapterLinks,
  selectActiveChapter,
  setChapterLinks,
  setLinks,
  setActiveChapter,
} from "../../navBar/navBarSlice";
import ReactFrameworks from "./Frameworks";

export default function React() {
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
          name: "React",
          active: true,
        },
        {
          name: "Frameworks",
          active: false,
        },
      ]),
    );
    dispatch(setActiveChapter("React"));

    // Clear chapters on unmount
    return () => {
      dispatch(clearChapterLinks());
      dispatch(setActiveChapter(""));
    };
  }, [dispatch]);

  return (
    <div>
      <header>
        <h1>React</h1>
        <p>A JavaScript library for building user interfaces.</p>
      </header>

      {activeChapter === "React" && <ReactSetup />}
      {activeChapter === "Frameworks" && <ReactFrameworks />}
    </div>
  );
}

function ReactSetup() {
  return (
    <div>
      <p>
        React efficiently updates the DOM to reflect the application state using
        a virtual DOM.
      </p>
      <h2>Setup</h2>
      <p>Install React using your package manager:</p>
      <SyntaxHighlighter language="bash" style={dracula}>
        {`$ pnpm install -D react`}
      </SyntaxHighlighter>
      <p>Add React-Router to your project:</p>
      <SyntaxHighlighter language="bash" style={dracula}>
        {`$ pnpm install -D react-router-dom`}
      </SyntaxHighlighter>
      <p>Install Redux Toolkit to your project:</p>
      <SyntaxHighlighter language="bash" style={dracula}>
        {`$ pnpm install -D @reduxjs/toolkit`}
      </SyntaxHighlighter>
    </div>
  );
}
