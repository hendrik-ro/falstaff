import { useDispatch, useSelector } from "react-redux";
import {
  clearChapterLinks,
  selectActiveChapter,
  setActiveChapter,
  setChapterLinks,
} from "../../navBar/navBarSlice";
import { useEffect } from "react";
import CORSTypescript from "./CORSJavascript";

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
        {
          name: "TypeScript",
          active: false,
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
      {activeChapter === "CORS" && <CORSStandard />}
      {activeChapter === "TypeScript" && <CORSTypescript />}
      <br style={{ marginTop: "2rem" }} />
    </div>
  );
}

function CORSStandard() {
  return (
    <div>
      <h2>CORS Standard</h2>
      <p>
        A <em>cross-origin request</em> is a request from another domain, protocol, or port.
      </p>
      <br style={{ marginTop: "1rem" }} />
      <p>HTTP headers included by CORS standard:</p>
      <ul>
        <li>
          <code>Access-Control-Allow-Origin</code>
        </li>
        <li>
          <code>Access-Control-Allow-Credentials</code>
        </li>
        <li>
          <code>Access-Control-Allow-Headers</code>
        </li>
        <li>
          <code>Access-Control-Allow-Methods</code>
        </li>
        <li>
          <code>Access-Control-Expose-Headers</code>
        </li>
        <li>
          <code>Access-Control-Max-Age</code>
        </li>
        <li>
          <code>Access-Control-Request-Headers</code>
        </li>
        <li>
          <code>Access-Control-Request-Method</code>
        </li>
        <li>
          <code>Origin</code>
        </li>
      </ul>
      <p>
        Each HTTP request is preceded by a pre-flight request to check if the request is safe to
        send. The server then responds wether or not the server allows the actual request.
      </p>
      <br style={{ marginTop: "1rem" }} />
      <p>
        A detailed guide on CORS can be found on{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN
        </a>
        .
      </p>
    </div>
  );
}
