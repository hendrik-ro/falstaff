import { useState } from "react";
import Syntax from "../../../components/SyntaxHighlighter";

export default function AuthenticationExpressJS() {
  const [content, setContent] = useState("Boilerplate");

  const handleClick = () => {
    setContent(content === "Boilerplate" ? "Configuration" : "Boilerplate");
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
        Show {content === "Boilerplate" ? "Configuration" : "Boilerplate"}
      </button>
      <br style={{ marginTop: "1rem" }} />
      {content === "Boilerplate" && <Boilerplate />}
      {content === "Configuration" && <Configuration />}

      <br style={{ marginTop: "2rem" }} />
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
    // store: new RedisStore(...) — see note above
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

function Configuration() {
  return (
    <div className="flexContainer">
      <ConfigurationBasic />
      <ConfigurationStoring />
      <ConfigurationCookie />
      <ConfigurationLogIn />
      <ConfigurationAccessData />
    </div>
  );
}

function ConfigurationBasic() {
  return (
    <div className="flexItem">
      <h3>Basic config</h3>
      <Syntax
        language="typescript"
        code={`app.use(
 session({
  // key for signing/encrypting cookies
  secret: process.env.SESSION_SECRET ??
    'dev-only-secret',
  // force session data to be saved when unchanged
  // default: true
  resave: false,
  // store new session if no changes to session object
  // to keep track of recurring visits
  // default: false
  saveUninitialized: false,
})
);
`}
        lineNumbers={true}
      />
      <p>
        Setting <code>resave</code> and <code>saveUninitialized</code> to false saves memory by not
        storing unchanged sessions.
      </p>
    </div>
  );
}

function ConfigurationStoring() {
  return (
    <div className="flexItem">
      <h3>Storing session data</h3>
      <Syntax
        language="typescript"
        code={`// replace with SQL DB or Redis cache
const store = new session.MemoryStore();

app.use(
session({
  secret: "D53gxl41G",
  resave: false,
  saveUninitialized: false,
  // attach store
  store,
})
);
`}
        lineNumbers={true}
      />
      <p>
        <strong>Note:</strong> <code>.MemoryStore()</code> leaks memory in production. Use only
        during development and replace with a database or cache.
      </p>
    </div>
  );
}

function ConfigurationCookie() {
  return (
    <div className="flexItem">
      <h3>Cookies</h3>
      <Syntax
        language="typescript"
        code={`app.use(
session({
  secret: "f4z4gs$Gcg",
  cookie: {
    // set expiration time
    maxAge: 1000 * 60 *60 * 24,
    // only HTTPS
    secure: process.env.NODE_ENV ===
      'production',
    // allow cross-site cookie
    // other options: 'lax', 'strict'
    sameSite: "none",
    // restrict to HTTP
    httpOnly: true
  },
  saveUninitialized: false,
  resave: false,
})
);
`}
        lineNumbers={true}
      />
      <p>
        <code>sameSite</code> supports <code>'lax'</code> where cross-site requests are allowed if,
        the request is a top-level navigation AND the request method is safe (e.g. GET - not POST).
      </p>
      <p>
        <code>'strict'</code> blocks all cross-site requests.
      </p>
    </div>
  );
}

function ConfigurationLogIn() {
  return (
    <div className="flexItem">
      <h3>Logging in</h3>
      <Syntax
        language="typescript"
        code={`// POST request for logging in
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Replace with password hash
  db.users.getUser(username, (err, user) => {
    if (!user) {
      return res
        .status(403)
        .send("No user found!");
      }
    if (user.password === password) {
      req.session.authenticated = true;
      req.session.user = {
        username,
        password,
      }
      res.redirect("/profile");
    } else {
      res
        .status(403)
        .send("Bad Credentials");
      }
  });
});
`}
        lineNumbers={true}
      />
    </div>
  );
}

function ConfigurationAccessData() {
  return (
    <div className="flexItem">
      <h3>Accessing Session Data</h3>
      <Syntax
        language="typescript"
        code={`function authorizedUser(req, res, next) {
  // Check for the authorized
  // property within the session
  if (req.session.authorized) {
    // invoke next middleware function
    res.next();
  else {
    res
      .status(403)
      .send("Not authorized");
  }
};
`}
        lineNumbers={true}
      />
      <p>
        The session data is serialized as JSON and can be accessed as e.g.{" "}
        <code>req.session.user.key</code>.
      </p>
      <Syntax
        language="typescript"
        code={`app.get(
  "/profile",
  authorizedUser,
  (req: Request, res: Response) => {
    res.render(
      "profile",
      // Pass user object
      { user: req.session.user });
  }
);
`}
        lineNumbers={true}
      />
    </div>
  );
}
