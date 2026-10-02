import Syntax from "../../../components/SyntaxHighlighter";

export default function OAuthSetup() {
  return (
    <div>
      <h2>Setup</h2>
      <Syntax language="bash" code={`$ pnpm install oauth2-server`} />
      <Syntax
        language="typescript"
        code={`// server.ts
import express, { type Request, type Response, type NextFunction } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import OAuth2Server, { type OAuthModel } from '@node-oauth/oauth2-server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// Create oauth instance here
const oauth = new OAuth2Server({
  model: (await import('./model.js')).default satisfies OAuthModel,
  allowBearerTokensInQueryString: true,
  accessTokenLifetime: 60 * 60,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 4001;

app.get('/', (_req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.get('/login', (_req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/secret', (_req: Request, res: Response): void => {
  res.send('Welcome to the secret area.');
});

app.listen(PORT, () => console.log(\`Listening on port \${PORT}\`));
`}
        lineNumbers={true}
      />
    </div>
  );
}
