import style from "./DOM.module.css";
import Syntax from "../../../components/SyntaxHighlighter";

export default function DOMProperties() {
  return (
    <div>
      <h2>Properties</h2>
      <p>
        The <code>document</code>'s properties allow for access and modification
        of the DOM.
      </p>
      <p>
        A full list of properties can be found in the{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Document"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN Web Docs
        </a>
        .
      </p>
      <br style={{ marginTop: "2rem" }} />
      <DOMPropertiesProperties />
      <br style={{ marginTop: "2rem" }} />
    </div>
  );
}

function DOMPropertiesProperties() {
  return (
    <div>
      <p>
        For instance, <code>document.body</code> returns the body element of the
        document.
      </p>
      <Syntax language="javascript" code={`let body = document.body;`} />
      <div className={style.flexContainer}>
        <div className={style.flexItem}>
          <h3>Inner HTML</h3>
          <Syntax
            language="javascript"
            code={`body.innerHTML = '<h1>Hello, World!</h1>';`}
          />
        </div>
        <div className={style.flexItem}>
          <h3>Style</h3>
          <Syntax language="javascript" code={`body.style.color = 'red';`} />
        </div>
      </div>
    </div>
  );
}
