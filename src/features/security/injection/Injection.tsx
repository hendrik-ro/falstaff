import Syntax from "../../../components/SyntaxHighlighter";

export default function Injection() {
  return (
    <div>
      <h2>Injection</h2>
      <p>
        Injection occurs when untrusted data is sent to an interpreter as part of a command or
        query. The attacker tricks the interpreter into executing unintended commands or accessing
        data without authorization. Injection has ranked at or near the top of the OWASP Top 10
        since the list began.
      </p>

      <h3>How Injection Works</h3>
      <p>
        An application is vulnerable when it concatenates user input directly into a string that an
        interpreter executes. The interpreter cannot tell the developer's code apart from the
        attacker's data.
      </p>
      <Syntax
        language="typescript"
        code={`// The developer intended one query, the attacker sends many
const query = "SELECT * FROM users WHERE name = '" + userInput + "'";

// userInput: ' OR '1'='1
// Executed query: SELECT * FROM users WHERE name = '' OR '1'='1
// '1'='1' is always true, so every row is returned`}
      />

      <h3>Common Injection Types</h3>
      <ul>
        <li>
          <strong>SQL injection (SQLi)</strong> - malicious SQL is appended to queries to read or
          modify database contents
        </li>
        <li>
          <strong>NoSQL injection</strong> - operator injection against document stores such as
          MongoDB, e.g. <code>{'{$gt: ""}'}</code> to bypass password checks
        </li>
        <li>
          <strong>Command injection</strong> - shell metacharacters such as <code>;</code>,{" "}
          <code>&amp;&amp;</code> or <code>|</code> are used to run OS commands through{" "}
          <code>exec</code> or <code>spawn</code>
        </li>
        <li>
          <strong>Cross-site scripting (XSS)</strong> - untrusted input is rendered as HTML or
          JavaScript in another user's browser
        </li>
        <li>
          <strong>Path traversal</strong> - <code>../</code> sequences escape an intended directory
          when building file paths, also relevant to ZIP extraction
        </li>
        <li>
          <strong>Header and template injection</strong> - untrusted data in email headers, HTTP
          headers or template engines changes program flow
        </li>
        <li>
          <strong>LLM prompt injection</strong> - instructions hidden in data hijack a large
          language model integrated into the application
        </li>
      </ul>

      <h3>Universal Defense</h3>
      <p>
        The specific countermeasures differ per type, but the core rule is the same: keep code and
        data separate.
      </p>
      <ul>
        <li>
          Prefer parameterized queries, prepared statements or safe APIs over string concatenation
        </li>
        <li>Use allow-lists to validate input (type, length, range, format) before using it</li>
        <li>
          Escape or encode data at the moment it is placed into an interpreter context, not before
        </li>
        <li>Run with least privilege so a successful injection has a small blast radius</li>
      </ul>
      <p>
        The following chapters cover each major injection type and its defenses: SQL injection,
        input validation and sanitization, safe ZIP extraction, and LLM prompt injection.
      </p>
    </div>
  );
}
