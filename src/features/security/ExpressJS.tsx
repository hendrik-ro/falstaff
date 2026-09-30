import { useState } from "react";
import Syntax from "../../components/SyntaxHighlighter";

export default function AuthenticationExpressJS() {
  const [content, setContent] = useState("Boilerplate");

  const handleClick = () => {
    setContent(content === "Boilerplate" ? "Methods" : "Boilerplate");
  };

  return (
    <div>
      <h2>Sessions in Express.js</h2>
      <p>
        The module <code>express-session</code> provides the necessary middleware for{" "}
        <em>Express.js</em> to create user sessions.
      </p>
      <Syntax
        language="bash"
        code={`$ pnpm install express-session \\
    pnpm install -D @types/express-session`}
      />
      <br style={{ marginTop: "1rem" }} />
      <p>
        <strong>Important!</strong> The default <code>MemoryStore</code> leaks memory and breaks in
        production/multi-instance setups. Use a real store, e.g. <code>connect-redis</code>.
      </p>
      <br style={{ marginTop: "1rem" }} />
      <button onClick={handleClick}>
        Show {content === "Boilerplate" ? "Methods" : "Boilerplate"}
      </button>
      <br style={{ marginTop: "1rem" }} />
      {content === "Boilerplate" && <Boilerplate />}
      {content === "Methods" && <Methods />}
    </div>
  );
}

function Boilerplate() {
  return (
    <div>
      <p>Create a session on the server side:</p>
      <Syntax
        language="typescript"
        code={`// src/app.ts
import express from 'express';
import session from 'express-session';

declare module 'express-session' {
  interface SessionData {
    userId?: string;
    cart?: { items: string[] };
  }
}

const app = express();

app.use(express.json());

app.use(
  session({
    name: 'sid',
    secret: process.env.SESSION_SECRET ?? 'dev-only-secret',
     resave: false,                    // don't save unchanged sessions
    saveUninitialized: false,        // don't create sessions for anonymous bots
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    // store: new RedisStore(...) — see note below
  })
);

// Demo routes
app.post('/login', (req, res) => {
  // ...verify credentials here
  req.session.userId = 'user_123';
  req.session.cart = { items: [] };
  res.json({ ok: true });
});

app.get('/me', (req, res) => {
  if (!req.session.userId) return res.status(401).json({ error: 'unauthenticated' });
  res.json({ userId: req.session.userId });
});

app.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('sid');
    res.json({ ok: true });
  });
});

app.listen(3000, () => console.log('http://localhost:3000'));
`}
        lineNumbers={true}
      />
    </div>
  );
}

function Methods() {
  return (
    <div className="flexContainer">
      <div className="flexItem">
        <h3>Config</h3>
      </div>
      <div className="flexItem">
        <h3>Storing session data</h3>
      </div>
    </div>
  );
}
