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
import NodeJSCLI from "./REPL";
import NodeJSModules from "./Modules";

export default function NodeJS() {
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
          name: "Node",
          active: true,
        },
        {
          name: "CLI",
          active: false,
        },
        {
          name: "Modules",
          active: false,
        },
      ]),
    );
    dispatch(setActiveChapter("Node"));

    // Clear chapters on unmount
    return () => {
      dispatch(clearChapterLinks());
      dispatch(setActiveChapter(""));
    };
  }, [dispatch]);

  return (
    <div>
      <h1>Node</h1>
      <p>A runtime that allows JavaScript to be executed outside of a browser environment.</p>

      {activeChapter === "Node" && <NodeJSSetup />}
      {activeChapter === "CLI" && <NodeJSCLI />}
      {activeChapter === "Modules" && <NodeJSModules />}

      <br style={{ marginTop: "2rem" }} />
    </div>
  );
}

function NodeJSSetup() {
  return (
    <div>
      <h2>Setup</h2>
      <p>
        Most package managers support Node.js installation. Use your package manager to install
        Node.js on your system:
      </p>
      <br style={{ marginTop: "2rem" }} />
      <p>On Fedora: </p>
      <Syntax language="bash" code={`$ sudo dnf install nodejs`} />
      <p>On Arch Linux: </p>
      <Syntax language="bash" code={`$ sudo pacman -S nodejs`} />
      <p>On Ubuntu: </p>
      <Syntax language="bash" code={`$ sudo apt install nodejs`} />
    </div>
  );
}
