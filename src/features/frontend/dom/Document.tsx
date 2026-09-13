import style from "./DOM.module.css";
import Syntax from "../../../components/SyntaxHighlighter";

export default function DOMDocument() {
  return (
    <div>
      <h2>Document</h2>
      <p>
        The <code>document</code> interface represents any web page loaded in
        the browser and serves as an entry point into the web page's content.
      </p>
      <p>
        It provides methods for accessing and manipulating the document's
        content.
      </p>
      <DOMDocumentMethods />
    </div>
  );
}

function DOMDocumentMethods() {
  return (
    <div className={style.flexContainer}>
      <div className={style.flexItem}>
        <h3>Query Selector</h3>
        <Syntax
          language="javascript"
          code={"const firstParagraph = document.querySelector('p')"}
        />
        <p>
          <code>.querySelector</code> returns the first element that matches the
          specified selector.
        </p>
      </div>
      <div className={style.flexItem}>
        <h3>Query Selector All</h3>
        <Syntax
          language="javascript"
          code={"const paragraphs = document.querySelectorAll('p')"}
        />
        <p>
          <code>.querySelectorAll</code> returns all elements that match the
          specified selector.
        </p>
      </div>
      <div className={style.flexItem}>
        <h3>Get Element By ID</h3>
        <Syntax
          language="javascript"
          code={"const element = document.getElementById('id')"}
        />
        <p>
          <code>.getElementById</code> returns the element that has the
          specified ID.
        </p>
      </div>
      <div className={style.flexItem}>
        <h3>Get Element By Class</h3>
        <Syntax
          language="javascript"
          code={"const elements = document.getElementsByClassName('class')"}
        />
        <p>
          <code>.getElementsByClassName</code> returns all elements that have
          the specified class name.
        </p>
      </div>
      <div className={style.flexItem}>
        <h3>Get Element By Tag</h3>
        <Syntax
          language="javascript"
          code={"const elements = document.getElementsByTagName('tag')"}
        />
        <p>
          <code>.getElementsByTagName</code> returns all elements that have the
          specified tag name.
        </p>
      </div>
      <div className={style.flexItem}>
        <h3>Create Element</h3>
        <Syntax
          language="javascript"
          code={"const element = document.createElement('tag')"}
        />
        <p>
          <code>.createElement</code> creates a new element with the specified
          tag name.
        </p>
      </div>
      <div className={style.flexItem}>
        <h3>Append Child</h3>
        <Syntax language="javascript" code={"element.appendChild(child)"} />
        <p>
          <code>.appendChild</code> appends a node to the end of the list of
          children of a specified parent node.
        </p>
      </div>
      <div className={style.flexItem}>
        <h3>Remove Child</h3>
        <Syntax language="javascript" code={"parent.removeChild(child)"} />
        <p>
          <code>.removeChild</code> removes a child node from the DOM.
        </p>
      </div>
    </div>
  );
}
