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
    </div>
  );
}
