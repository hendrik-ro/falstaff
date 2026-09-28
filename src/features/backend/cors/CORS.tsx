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
        A <em>cross-origin request</em> is a request from another domain, protocol, or port. Each
        HTTP request is preceded by a <em>preflight</em> request to check if the request is safe to
        send. The server then responds wether or not the server allows the actual request.
      </p>
      <br style={{ marginTop: "1rem" }} />
      <table>
        <caption>HTTP headers included by CORS standard</caption>
        <tbody>
          <tr>
            <td>
              <code>Access-Control-Allow-Origin</code>
            </td>
            <td>
              Specifies either a single origin URL or <code>*</code> as a wildcard.
            </td>
          </tr>
          <tr>
            <td>
              <code>Access-Control-Allow-Credentials</code>
            </td>
            <td>
              Indicates whether or not the response to the request can be exposed when the{" "}
              <code>credentials</code> flag is true.
            </td>
          </tr>
          <tr>
            <td>
              <code>Access-Control-Allow-Headers</code>
            </td>
            <td>
              <em>Preflight</em> - Indicates which HTTP headers can be used making the actual
              request.
            </td>
          </tr>
          <tr>
            <td>
              <code>Access-Control-Allow-Methods</code>
            </td>
            <td>Specifies the methods allowed when accessing a resource.</td>
          </tr>
          <tr>
            <td>
              <code>Access-Control-Expose-Headers</code>
            </td>
            <td>
              Adds specified headers to the allowlist that JavaScript is allowed to access from
              browsers.
            </td>
          </tr>
          <tr>
            <td>
              <code>Access-Control-Max-Age</code>
            </td>
            <td>
              Indicates how long the results of a <em>preflight</em> request can be cached.
            </td>
          </tr>
          <tr>
            <td>
              <code>Access-Control-Request-Headers</code>
            </td>
            <td>
              <em>Preflight</em> - indicates to server what headers are used in the actual request.
            </td>
          </tr>
          <tr>
            <td>
              <code>Access-Control-Request-Method</code>
            </td>
            <td>
              <em>Preflight</em> - indicates to server what method is used in the actual request.
            </td>
          </tr>
          <tr>
            <td>
              <code>Origin</code>
            </td>
            <td>
              Indicates the <code>origin</code> of a cross-origin request or <em>preflight</em>{" "}
              request.
            </td>
          </tr>
        </tbody>
      </table>
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
