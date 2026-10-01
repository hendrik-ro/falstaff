import { useState } from "react";
import Syntax from "../../../components/SyntaxHighlighter";

export default function JWT() {
  const [content, setContent] = useState("Setup");

  const handleClick = () => {
    setContent(content === "Setup" ? "Express.js" : "Setup");
  };

  return (
    <div>
      <h2>JWT</h2>
      <p>JSON Web Token</p>
      <br style={{ marginTop: "1rem" }} />
      <button onClick={handleClick}>Show {content === "Setup" ? "Express.js" : "Setup"}</button>
      {content === "Setup" && <JWTSetup />}
      {content === "Express.js" && <JWTExpressBoilerplate />}

      <br style={{ marginTop: "2rem" }} />
    </div>
  );
}

function JWTSetup() {
  return (
    <div className="flexContainer">
      <div className="flexItem">
        <h3>Setup</h3>

        <p>
          Using the{" "}
          <a
            href="https://github.com/auth0/node-jsonwebtoken"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>jsonwebtoken</code>
          </a>{" "}
          module:
        </p>
        <Syntax
          language="bash"
          code={`$ pnpm install jsonwebtoken
$ pnpm install --save-dev @types/jsonwebtoken`}
        />
      </div>
      <div className="flexItem">
        <h3>Generating a JWT</h3>
        <Syntax
          language="typescript"
          code={`import jwt from 'jsonwebtoken';

// Define the payload type
type UserPayload = {
  userId: number;
  username: string;
};

const secretKey = process.env.SECRET_KEY || 'development';

// Create a payload
const payload: UserPayload = {
  userId: 1,
  username: 'john_doe'
};

// Generate a JWT
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
console.log('Generated JWT:', token);
`}
          lineNumbers={true}
        />
      </div>
      <div className="flexItem">
        <h3>Verifying a JWT</h3>
        <Syntax
          language="typescript"
          code={`const secretKey = process.env.SECRET_KEY || 'development';

try {
  const decoded = jwt.verify(token, secretKey) as UserPayload;
  console.log('Decoded JWT:', decoded);
} catch (error) {
  console.error('JWT verification failed:', error);
}
`}
          lineNumbers={true}
        />
      </div>
    </div>
  );
}

function JWTExpressBoilerplate() {
  return (
    <div>
      <Syntax
        language="typescript"
        code={`import express, type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const secretKey = process.env.SECRET_KEY || 'development';

// Middleware to verify JWT
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(403).send('A token is required for authentication');
    }

  try {
      const decoded = jwt.verify(token.replace('Bearer ', ''), secretKey);
      req.body.user = decoded;
  } catch (error) {
    return res.status(401).send('Invalid Token');
  }
  return next();
};

// Protected route
app.get('/protected', verifyToken, (req: Request, res: Response) => {
    res.send('This is a protected route');
});

const port = 3000;
app.listen(port, () => {
    console.log(\`Server is running on port \${port}\`);
  }
);
`}
        lineNumbers={true}
      />
    </div>
  );
}
