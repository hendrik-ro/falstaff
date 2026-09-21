import Syntax from "../../../components/SyntaxHighlighter";

export default function ExpressJSRouting() {
  return (
    <div>
      <h2>Routing</h2>

      <div className="flexContainer">
        <div className="flexItem">
          <h3>app.tsx</h3>
          <Syntax
            language="typescript"
            code={`import express, { type Express } from 'express';

// Instantiate Express
const app: Express = express();

// Define a PORT for the server to listen on
const PORT: number = process.env.PORT ?
  parseInt(process.env.PORT) :
    3000;

// Mount a router on the app
app.use('/endpoint', endpointRouter);

// Start the server
app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});

export default app;
`}
            lineNumbers={true}
          />
          <p>
            Express tries to match the incoming request to the appropriate route handler by matching
            <code>&lt;server address&gt;:&lt;port number&gt;/api-endpoint</code>.
          </p>
          <p>
            Conventionally, each route is defined in a separate file and imported into the main
            router file. Routers can be nested to create a hierarchical routing structure.
          </p>
        </div>
        <div className="flexItem">
          <h3>endpoint.tsx</h3>
          <Syntax
            language="typescript"
            code={`import { Router, type Request, type Response } from 'express';

// Create a router for the API
const endpointRouter = Router();

// GET method route to '/endpoint'
endpointRouter.get(
  '/',
  (req: Request, res: Response) => {
    res.send('GET request to the endpoint');
  },
);

// POST method route to '/endpoint'
endpointRouter.post(
  '/',
  (req: Request, res: Response) => {
    res.send('POST request to the endpoint');
  },
);

// PUT method route to '/endpoint/:id'
endpointRouter.put(
  '/:id',
  (req: Request, res: Response) => {
    res.send('PUT request to the endpoint');
  },
);

// DELETE method route to '/endpoint/:id'
endpointRouter.delete(
  '/:id',
  (req: Request, res: Response) => {
    res.send('DELETE request to the endpoint');
  },
);

export default endpointRouter;`}
            lineNumbers={true}
          />
        </div>
      </div>
      <div>
        <h3>Path Parameters</h3>
        <p>
          The method <code>req.params</code> is used to extract path parameters and{" "}
          <code>req.query</code> is used to extract query parameters from a URL:
        </p>
        <Syntax
          language="typescript"
          code={`app.put('/users/:id', (req: Request, res: Response): void => {
    // destructuring id from req.params
    const { id } = req.params;
    if (users.hasOwnProperty(id)) {
      // destructuring name and hash from req.query
      const { name, hash } = req.query;
      users[id] = { name, hash };
      res.send(\`User \${id} updated\`);
    } else {
      res.status(404).send(\`User \${id} not found\`);
    }
  });`}
        />
      </div>
    </div>
  );
}
