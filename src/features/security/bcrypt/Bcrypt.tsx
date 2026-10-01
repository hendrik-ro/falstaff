import Syntax from "../../../components/SyntaxHighlighter";

export default function Bcrypt() {
  return (
    <div>
      <h2>Introduction</h2>
      <p>
        <strong>Important!</strong> <code>bcrypt</code> is lacking on several fronts -{" "}
        <code>argon2</code> or <code>crypto.scrypt</code> are better choices by today's standard.
      </p>
      <br style={{ marginTop: "1rem" }} />
      <p>
        Using bcrypt, we can protect our users by hashing and salting passwords. Multiple rounds of
        hashing ensures that an attacker must deploy massive resources and hardware to be able to
        crack data.
      </p>
      <br style={{ marginTop: "1rem" }} />
      <p>First install the package:</p>
      <Syntax
        language="bash"
        code={`$ pnpm install bcrypt
$ pnpm install -D @types/bcrypt`}
      />
      <p>Then import it:</p>
      <Syntax language="typescript" code={`import bcrypt from "bcrypt";`} />
    </div>
  );
}
