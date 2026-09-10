import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import styles from "./React.module.css";

export default function ReactFrameworks() {
  return (
    <div>
      <h2>Frameworks</h2>

      <div className={styles.frameworkFlex}>
        <div className={styles.frameworkItem}>
          <h3>Vite.js</h3>
          <p>Create a new Vite.js project:</p>
          <SyntaxHighlighter language="bash" style={dracula}>
            {`$ pnpm create vite`}
          </SyntaxHighlighter>
          <p>
            Vite.js supports various templates such as a React TypeScript
            template, add{" "}
            <code className={styles.code}>--template react-ts</code>.
          </p>
          <br style={{ marginTop: "1rem" }} />
          <p>Install dependencies and start the development server:</p>
          <SyntaxHighlighter language="bash" style={dracula}>
            {`$ pnpm install`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="bash" style={dracula}>
            {`$ pnpm dev`}
          </SyntaxHighlighter>
        </div>

        <div className={styles.frameworkItem}>
          <h3>Next.js</h3>
          <p>Create a new Next.js project:</p>
          <SyntaxHighlighter language="bash" style={dracula}>
            {`$ pnpm create next-app`}
          </SyntaxHighlighter>
          <p>
            Next.js supports various templates such as a TypeScript template,
            add <code className={styles.code}>--template ts</code>.
          </p>
          <p>Install dependencies and start the development server:</p>
          <SyntaxHighlighter language="bash" style={dracula}>
            {`$ pnpm install`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="bash" style={dracula}>
            {`$ pnpm dev`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
