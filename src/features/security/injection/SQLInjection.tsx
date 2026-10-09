import Syntax from "../../../components/SyntaxHighlighter";

export default function SQLInjection() {
  return (
    <div>
      <h2>SQL Injection</h2>
      <p>
        SQL injection (SQLi) inserts malicious SQL into application queries. It can bypass
        authentication, dump entire tables, modify records, and in some configurations execute OS
        commands or read files from the server.
      </p>

      <h3>Vulnerable Example</h3>
      <p>Building a query by concatenating strings lets the attacker change the query's logic:</p>
      <Syntax
        language="typescript"
        code={`import { Request, Response } from "express";
import { pool } from "../db";

// VULNERABLE: user input is concatenated into the SQL string
app.get("/users", async (req: Request, res: Response) => {
  const name = req.query.name as string;
  const query = \`SELECT id, name, email FROM users WHERE name = '\${name}'\`;

  const result = await pool.query(query);
  res.json(result.rows);
});`}
      />
      <p>An attacker can then call the endpoint with a crafted input:</p>
      <Syntax
        language="typescript"
        code={`// Input:  ' OR '1'='1' --
// Query:  SELECT id, name, email FROM users WHERE name = '' OR '1'='1' --'
// Effect: every row is returned, and the -- comments out the rest

// Input:  '; DROP TABLE users; --
// Input:  ' UNION SELECT username, password, NULL FROM credentials --`}
      />

      <h3>Defense: Parameterized Queries</h3>
      <p>
        Placeholders send the query and the data separately, so input can never change the query
        structure. Use them for every query, even without user input.
      </p>
      <Syntax
        language="typescript"
        code={`import { Request, Response } from "express";
import { pool } from "../db";

// SAFE: values travel as parameters, not as SQL text
app.get("/users", async (req: Request, res: Response) => {
  const name = req.query.name as string;
  const result = await pool.query(
    "SELECT id, name, email FROM users WHERE name = $1",
    [name]
  );
  res.json(result.rows);
});`}
      />

      <h3>Query Builders and ORMs</h3>
      <p>
        Query builders such as Knex and ORMs such as Prisma produce parameterized SQL automatically,
        but only when you use their APIs correctly. Raw escape hatches reintroduce the risk.
      </p>
      <Syntax
        language="typescript"
        code={`// Knex - parameterized by design
const users = await knex("users")
  .where({ name })
  .select("id", "name", "email");

// Prisma - parameterized by design
const users = await prisma.user.findMany({
  where: { name },
  select: { id: true, name: true, email: true },
});

// DANGER: raw query with string interpolation bypasses all of this
await knex.raw(\`SELECT * FROM users WHERE name = '\${name}'\`);
await prisma.$queryRawUnsafe(\`SELECT * FROM users WHERE name = '\${name}'\`);`}
      />

      <h3>Identifiers Cannot Be Parameters</h3>
      <p>
        Table and column names cannot be bound as values. When they come from a request, validate
        them against an allow-list and quote them explicitly:
      </p>
      <Syntax
        language="typescript"
        code={`const SORT_COLUMNS = new Set(["name", "email", "created_at"]);

function safeOrderColumn(column: string): string {
  if (!SORT_COLUMNS.has(column)) {
    throw new Error("Invalid sort column");
  }
  return \`"\${column}"\`; // quote to neutralize any metacharacters
}

const sql = \`SELECT id, name FROM users ORDER BY \${safeOrderColumn(sort)}\`;`}
      />

      <h3>Additional Hardening</h3>
      <ul>
        <li>
          Run the app's database user with least privilege: no <code>DROP</code>, no superuser,
          separate read-only and write users
        </li>
        <li>Never return raw database errors to clients; they leak schema details</li>
        <li>Disable stacked queries where the driver allows it</li>
        <li>
          Use <code>LIKE</code> searches with escaped wildcards when user input feeds a pattern
        </li>
        <li>Log and alert on suspicious query patterns</li>
      </ul>
    </div>
  );
}
