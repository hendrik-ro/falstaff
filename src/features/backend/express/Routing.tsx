import Syntax from "../../../components/SyntaxHighlighter";

export default function ExpressJSRouting() {
  return (
    <div>
      <h2>Routing</h2>
      <p>
        <strong>Express</strong> provides methods for CRUD operations:
      </p>
      <Syntax
        language="typescript"
        code={`import { type Request, type Response } from 'express';

// GET method route
app.get('/', (req: Request, res: Response) => {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/endpoint', (req: Request, res: Response) => {
  res.send('POST request to the homepage');
});

// PUT method route
app.put('/endpoint/:id', (req: Request, res: Response) => {
  res.send('PUT request to the homepage');
});

// DELETE method route
app.delete('/', (req: Request, res: Response) => {
  res.send('DELETE request to the homepage');
});`}
      />
      <p>
        Express tries to match the incoming request to the appropriate route
        handler by matching
        <code>&lt;server address&gt;:&lt;port number&gt;/api-endpoint</code>.
      </p>
      <br style={{ marginTop: "2rem" }} />
      <p>
        To group routes, Express provides <code>Router</code> objects:
      </p>
      <Syntax
        language="typescript"
        code={`import { Router } from 'express';

const apiRouter = Router();

// GET method route to '/api'
apiRouter.get('/', (req: Request, res: Response) => {
  res.send('GET request to the API');
});

export default apiRouter;`}
      />
      <p>
        Conventionally, each route is defined in a separate file and imported
        into the main router file:
      </p>
      <Syntax
        language="typescript"
        code={`import express, { type Express } from 'express';
import appRouter from './appRouter';

const app: Express = express();

app.use('/api', appRouter);

export default app;`}
      />
      <p>Routers can be nested to create a hierarchical routing structure.</p>
    </div>
  );
}
