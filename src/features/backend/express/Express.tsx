import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveChapter,
  setActiveChapter,
  setChapterLinks,
  setLinks,
} from "../../navBar/navBarSlice";
import { useEffect } from "react";
import Syntax from "../../../components/SyntaxHighlighter";

export default function ExpressJS() {
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
          name: "Express",
          active: true,
        },
      ]),
    );
    dispatch(setActiveChapter("Express"));

    // Clear chapters on unmount
    return () => {
      dispatch(setChapterLinks([]));
      dispatch(setActiveChapter(""));
    };
  }, [dispatch]);

  return (
    <div>
      <h1>Express</h1>
      <p>A framework to build backend servers.</p>

      {activeChapter === "Express" && <ExpressJSSetup />}

      <br style={{ marginTop: "2rem" }} />
    </div>
  );
}

function ExpressJSSetup() {
  return (
    <div>
      <h2>Setup</h2>
      <p>
        <a
          href="https://expressjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Express
        </a>{" "}
        can be installed using a node package manager:
      </p>
      <Syntax language="bash" code="$ pnpm install express" />
    </div>
  );
}
