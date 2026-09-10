import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearChapterLinks,
  selectActiveChapter,
  setChapterLinks,
  setLinks,
  setActiveChapter,
} from "../../navBar/navBarSlice";
import ReactFrameworks from "./Frameworks";
import ReactComponents from "./Components";
import ReactHooks from "./Hooks";
import Syntax from "../../../components/SyntaxHighlighter";

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
        {
          name: "Components",
          active: false,
        },
        {
          name: "Hooks",
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

      {activeChapter === "React" && (
        <>
          <ReactSetup />
          <ReactAbout />
        </>
      )}
      {activeChapter === "Frameworks" && <ReactFrameworks />}
      {activeChapter === "Components" && <ReactComponents />}
      {activeChapter === "Hooks" && <ReactHooks />}
    </div>
  );
}

function ReactAbout() {
  return (
    <div>
      <h2>About</h2>
      <p>
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          React
        </a>{" "}
        efficiently updates the DOM to reflect the application state using a
        virtual DOM.
      </p>
      <br style={{ marginBottom: "1rem" }} />
      <p>
        React uses <em>JavaScript XML</em> (JSX) as a syntax extension to
        interject HTML-like code into the JavaScript:
      </p>
      <Syntax
        language="jsx"
        code={`const homeLink = <Link to="/">Home</Link>`}
      />
      <p>
        JSX also allows for bracket notation to embed JavaScript expressions
        within JSX:
      </p>
      <Syntax
        language="jsx"
        code={`export default function Home(props) {
  const { links } = props;
  return (
    <div>
      {links.map((link) => <Link to={link}>{link}</Link>)}
    </div>
  )
}`}
        lineNumbers={true}
      />
    </div>
  );
}

function ReactSetup() {
  return (
    <div>
      <h2>Setup</h2>
      <p>Install React using your package manager:</p>
      <Syntax language="bash" code={`$ pnpm install -D react`} />
      <p>Add React-Router to your project:</p>
      <Syntax language="bash" code={`$ pnpm install -D react-router-dom`} />
      <p>Install Redux Toolkit to your project:</p>
      <Syntax language="bash" code={`$ pnpm install -D @reduxjs/toolkit`} />
    </div>
  );
}
