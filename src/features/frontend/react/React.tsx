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

    // Clear chapter links on unmount
    return () => {
      dispatch(clearChapterLinks());
    };
  }, [dispatch]);

  return (
    <div>
      <h1>React</h1>
      {activeChapter && <h2>{activeChapter}</h2>}{" "}
      {/* Replace with active element */}
      <SyntaxHighlighter language="bash" style={dracula}>
        {`$ pnpm install -D react`}
      </SyntaxHighlighter>
    </div>
  );
}
