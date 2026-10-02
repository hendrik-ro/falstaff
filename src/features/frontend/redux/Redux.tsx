import Syntax from "../../../components/SyntaxHighlighter";

export default function Redux() {
  return (
    <div>
      <h2>Redux Setup</h2>
      <p>
        <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
          Redux
        </a>{" "}
        is a state management framework for React that centralizes the state of an application.
      </p>
      <p>
        It provides patterns and tools to make it easier to understand when, where, why, and how the
        state is being updated.
      </p>
      <br style={{ marginTop: "2rem" }} />
      <p>
        <a href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
          Redux Toolkit
        </a>{" "}
        is a set of utilities that simplify Redux development:
      </p>
      <Syntax language="bash" code={`$ npm i -D react-redux @reduxjs/toolkit`} />
      <br style={{ marginTop: "2rem" }} />
      <p>An example file structure for a Redux setup in a vite.js + TypeScript project:</p>

      <Syntax
        language="bash"
        code={`src/
  app/
    App.tsx
    store.ts
  components/
    componentA.tsx
    componentB.tsx
  features/
    featureA/
      featureA.tsx
      featureASlice.ts
    featureB/
      featureB.tsx
      featureBSlice.ts`}
        lineNumbers={true}
      />
    </div>
  );
}
