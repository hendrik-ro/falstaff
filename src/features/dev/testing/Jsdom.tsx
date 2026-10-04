import Syntax from "../../../components/SyntaxHighlighter";

export default function Jsdom() {
  return (
    <div>
      <h2>jsdom</h2>
      <p>
        <a href="https://github.com/jsdom/jsdom" target="_blank" rel="noopener noreferrer">
          jsdom
        </a>{" "}
        is a pure-JavaScript implementation of the DOM and HTML standards. It simulates a browser
        environment in Node.js, so tests can create, query and manipulate HTML without launching a
        real browser. It is what testing frameworks like Jest and Vitest use under the hood to
        provide the <code>document</code> and <code>window</code> objects in a test environment.
      </p>
      <p>A basic jsdom instance can be created and queried directly:</p>
      <Syntax
        language="typescript"
        code={`import { JSDOM } from "jsdom";

const dom = new JSDOM(\`<!DOCTYPE html>
<html>
  <body>
    <p id="greeting">Hello world</p>
  </body>
</html>\`);

const paragraph = dom.window.document.getElementById("greeting");

console.log(paragraph?.textContent); // "Hello world"

dom.window.document.body.innerHTML = "<button>Click me</button>";`}
        lineNumbers={true}
      />
      <p>
        More commonly, jsdom is used as the test environment so that DOM code can be tested with
        plain assertions:
      </p>
      <Syntax
        language="typescript"
        code={`// @vitest-environment jsdom
import { describe, expect, it } from "vitest";

describe("counter button", () => {
  it("renders a label", () => {
    const button = document.createElement("button");
    button.textContent = "Clicks: 0";
    document.body.appendChild(button);

    expect(button.textContent).toBe("Clicks: 0");
  });
});`}
        lineNumbers={true}
      />
      <p>
        jsdom does not render pages visually and implements only parts of the browser API (e.g. no
        layout or canvas by default), so it is best suited for logic-level DOM tests rather than
        visual ones.
      </p>
    </div>
  );
}
