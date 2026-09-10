import Syntax from "../../../components/SyntaxHighlighter";

export default function ReactComponents() {
  return (
    <div>
      <h2>Components</h2>
      <p>
        Containers and components are the building blocks of React applications.
        In standard React, containers are higher-order components that manage
        state and pass data to child components, while components are the UI
        elements that render the view.
      </p>
      <Syntax
        language="jsx"
        code={`import React from "react";
import { useState } from "react";

function Container() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Component count={count} setCount={setCount} />
    </div>
  );
}

function Component({ count, setCount }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Container;
`}
        lineNumbers={true}
      />
    </div>
  );
}
