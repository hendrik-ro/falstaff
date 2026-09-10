import styles from "./React.module.css";
import Syntax from "../../../components/SyntaxHighlighter";

export default function ReactFrameworks() {
  return (
    <div>
      <h2>Frameworks</h2>

      <div className={styles.frameworkFlex}>
        <div className={styles.frameworkItem}>
          <h3>Vite.js</h3>
          <p>Create a new Vite.js project:</p>
          <Syntax language="bash" code={`$ pnpm create vite`} />
          <p>
            Vite.js supports various templates such as a React TypeScript
            template, add{" "}
            <code className={styles.code}>--template react-ts</code>.
          </p>
          <br style={{ marginTop: "1rem" }} />
          <p>Install dependencies and start the development server:</p>
          <Syntax language="bash" code={`$ pnpm install`} />
          <Syntax language="bash" code={`$ pnpm dev`} />
        </div>

        <div className={styles.frameworkItem}>
          <h3>Next.js</h3>
          <p>Create a new Next.js project:</p>
          <Syntax language="bash" code={`$ pnpm create next-app`} />
          <p>
            Next.js supports various templates such as a TypeScript template,
            add <code className={styles.code}>--template ts</code>.
          </p>
          <p>Install dependencies and start the development server:</p>
          <Syntax language="bash" code={`$ pnpm install`} />
          <Syntax language="bash" code={`$ pnpm dev`} />
        </div>
      </div>
    </div>
  );
}
