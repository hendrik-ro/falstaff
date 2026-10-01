import Syntax from "../../../components/SyntaxHighlighter";

export default function ExpressJS() {
  return (
    <div>
      <h2>Setup</h2>
      <p>
        <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
          Express
        </a>{" "}
        can be installed using a node package manager:
      </p>
      <Syntax language="bash" code="$ pnpm install express" />
      <br style={{ marginTop: "2rem" }} />
      <h2>Starting a server</h2>
      <Syntax
        language="typescript"
        code={`import express, {
  type Express,
} from "express";

// Instantiate the app
const app: Express = express();

// Define a PORT for the server to
// listen on
const PORT: number =
  process.env.PORT || 3000;

// Start the server and listen on the
// defined PORT
app.listen(PORT, () => {
  console.log(
    \`Server is running on port \${PORT}\`,
  );
});`}
        lineNumbers={true}
      />
    </div>
  );
}
