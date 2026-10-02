import Syntax from "../../../components/SyntaxHighlighter";

export default function OAuthSetup() {
  return (
    <div>
      <h2>Setup</h2>
      <Syntax language="bash" code={`$ pnpm install oauth2-server`} />
      <Syntax
        language="typescript"
        code={`// server.ts

import express, {
  type Request,
  type Response,
  type NextFunction,
} from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import OAuth2Server, {
  type Request as OAuthRequest,
  type Response as OAuthResponse,
} from '@node-oauth/oauth2-server';
import model, { type OAuthModel } from './model.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// The OAuth2 server instance, wired to our in-memory model
const oauth = new OAuth2Server({
  model: model satisfies OAuthModel,
  allowBearerTokensInQueryString: true,
  accessTokenLifetime: 60 * 60, // 1 hour, in seconds
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 4001;

// ---- Token endpoint (POST /auth) ----
// The client sends:
//   grant_type=client_credentials&client_id=...&client_secret=...
// and receives an access token in the response body.
const obtainToken = (req: Request, res: Response): void => {
  const request = new OAuthRequest(req);
  const response = new OAuthResponse(res);

  oauth
    .token(request, response) // runs the model: getClient -> saveToken
    .then((token) => {
      res.json({
        access_token: token.accessToken,
        token_type: 'Bearer',
        expires_in: oauth.options.accessTokenLifetime,
      });
    })
    .catch((err) => {
      // Invalid client, bad grant type, etc.
      res.status(err.code ?? 500).json({
        error: err.name,
        error_description: err.message,
      });
    });
};

app.all('/auth', obtainToken);

// ---- Middleware that protects a route ----
const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const request = new OAuthRequest(req);
  const response = new OAuthResponse(res);

  oauth
    .authenticate(request, response) // runs the model: getAccessToken
    .then((token) => {
      req.user = token.user; // make the authenticated identity available
      next();
    })
    .catch((err) => {
      // Missing/invalid/expired Bearer token
      res.status(err.code ?? 401).json({ error: err.name, message: err.message });
    });
};

// Endpoints
app.get('/', (_req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, 'public/home.html'));
});
app.get('/login', (_req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, 'public/login.html'));
});

// Now protected: requires "Authorization: Bearer <token>"
app.get('/secret', authenticate, (req: Request, res: Response): void => {
  res.send('Welcome to the secret area.');
});

app.listen(PORT, () => console.log(\`Listening on port \${PORT}\`));
`}
        lineNumbers={true}
      />
    </div>
  );
}
