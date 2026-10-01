import { useState } from "react";
import Syntax from "../../components/SyntaxHighlighter";

export default function AuthenticationPassportJS() {
  const [content, setContent] = useState("Boilerplate");

  const handleClick = () => {
    setContent(content === "Boilerplate" ? "Setup" : "Boilerplate");
  };

  return (
    <div>
      <h2>Passport.js</h2>
      <p>Provides authentication middleware for Express.js</p>
      <br style={{ marginTop: "1rem" }} />
      <button onClick={handleClick}>
        Show {content === "Boilerplate" ? "Setup" : "Boilerplate"}
      </button>
      <br style={{ marginTop: "1rem" }} />
      {content === "Boilerplate" && <PassportJSBoilerplate />}
      {content === "Setup" && <PassportJSSetup />}
    </div>
  );
}

function PassportJSSetup() {
  return (
    <div>
      <h3>Setup</h3>
      <Syntax language="bash" code={`$ pnpm install passport`} />
      <p>
        Package on{" "}
        <a href="https://www.npmjs.com/package/passport" target="_blank" rel="noopener noreferrer">
          npmjs.com
        </a>
      </p>
    </div>
  );
}

function PassportJSBoilerplate() {
  return (
    <div>
      <h3>Boilerplate</h3>
      <Syntax
        language="typescript"
        code={`const express = require("express");
const app = express();
const session = require("express-session");
const store = new session.MemoryStore();
const db = require("./db");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const PORT = process.env.PORT || 4001;

app.use(express.json());
// Lets app read form data
app.use(express.urlencoded({ extended: false }));
// Make public files available without authentication
app.use(express.static(__dirname + "/public"));

// Set up express-session middleware
app.use(
  session({
    secret: "f4z4gs$Gcg",
    cookie: { maxAge: 300000000, secure: false },
    saveUninitialized: false,
    resave: false,
    store,
  })
);

// Initialize and connect passport with session
app.use(passport.initialize());
app.use(passport.session());

// Store user.id in session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Retrieve user from user.id in session
passport.deserializeUser((id, done) => {
  db.users.findById(id, function (err, user) {
    if (err) {
      return done(err);
    }
    done(null, user);
    });
  });

// Set up local authentication strategy
passport.use(
  new LocalStrategy(function (username, password, cb) {
    db.users.findByUsername(username, function (err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (user.password != password) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  })
);

// Logout and redirect to login page:
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post(
  "/login",
  // Passport middleware using 'local strategy'
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("profile");
  }
);

app.get("/profile", (req, res) => {
  res.render("profile", { user: req.user });
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const newUser = await db.users.createUser({ username, password });
  if (newUser) {
    // Attach new user object for passport
    res.status(201).json({
      msg: "New user created!",
      newUser,
    });
  } else {
    res.status(500).json({ msg: "Unable to create user" });
  }
});

app.listen(PORT, () => {
  console.log(\`Server is listening on port \${PORT}\`);
});
`}
        lineNumbers={true}
      />
    </div>
  );
}
