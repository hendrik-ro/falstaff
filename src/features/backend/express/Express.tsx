import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveChapter,
  setActiveChapter,
  setChapterLinks,
  setLinks,
} from "../../navBar/navBarSlice";
import { useEffect } from "react";
import Syntax from "../../../components/SyntaxHighlighter";
import ExpressJSRouting from "./Routing";
import ExpressMiddleware from "./Middleware";

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
        {
          name: "Routing",
          active: false,
        },
        {
          name: "Middleware",
          active: false,
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
      {activeChapter === "Routing" && <ExpressJSRouting />}
      {activeChapter === "Middleware" && <ExpressMiddleware />}

      <br style={{ marginTop: "2rem" }} />
    </div>
  );
}

function ExpressJSSetup() {
  return (
    <div>
      <h2>Setup</h2>
      <p>
        <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
          Express
        </a>{" "}
        can be installed using a node package manager:
      </p>
      <Syntax language="bash" code="$ pnpm install express" />
      <br style={{ marginTop: "2rem" }} />
      <h2>Starting a server</h2>
      <Syntax
        language="typescript"
        code={`import express, { type Express } from "express";

// Instantiate the app
const app: Express = express();

// Define a PORT for the server to listen on
const PORT: number = process.env.PORT || 3000;

// Start the server and listen on the defined PORT
app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});
`}
        lineNumbers={true}
      />
    </div>
  );
}
