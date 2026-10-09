import Syntax from "../../../components/SyntaxHighlighter";

export default function IDOR() {
  return (
    <div>
      <h2>IDOR (Insecure Direct Object Reference)</h2>
      <p>
        Insecure Direct Object Reference occurs when an application provides direct access to
        objects based on user-supplied keys, without proper authorization checks.
      </p>

      <h3>Vulnerable Example</h3>
      <p>No ownership check - any user can access any document:</p>
      <Syntax
        language="typescript"
        code={`import { Request, Response } from 'express';

// ❌ VULNERABLE: Returns any document without checking ownership
app.get('/api/documents/:id', async (req: Request, res: Response) => {
  const doc = await db.documents.findOne({ id: req.params.id });
  res.json(doc);
});`}
      />

      <h3>Secure Example #1: Check Ownership</h3>
      <Syntax
        language="typescript"
        code={`// ✅ SECURE: Check that user owns the document
app.get('/api/documents/:id', async (req: Request, res: Response) => {
  const doc = await db.documents.findOne({ 
    id: req.params.id,
    ownerId: req.user.id
  });
  
  if (!doc) {
    return res.status(404).send('Not found');
  }
  
  res.json(doc);
});`}
      />

      <h3>Secure Example #2: Use UUIDs</h3>
      <p>Unpredictable IDs prevent enumeration attacks:</p>
      <Syntax
        language="typescript"
        code={`// ✅ SECURE: Use UUIDs instead of sequential IDs
app.get('/api/documents/:uuid', async (req: Request, res: Response) => {
  const doc = await db.documents.findOne({ 
    uuid: req.params.uuid,
    ownerId: req.user.id
  });
  
  if (!doc) {
    return res.status(404).send('Not found');
  }
  
  res.json(doc);
});`}
      />

      <h3>Secure Example #3: Authorization Middleware</h3>
      <Syntax
        language="typescript"
        code={`// Authorization middleware
const authorizeResourceAccess = (model: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const resource = await db[model].findOne({
      id: req.params.id,
      ownerId: req.user.id
    });
    
    if (!resource) {
      return res.status(403).send('Forbidden');
    }
    
    (req as any).resource = resource;
    next();
  };
};

// Usage
app.get('/api/posts/:id', authorizeResourceAccess('posts'), (req, res) => {
  res.json((req as any).resource);
});`}
      />

      <h3>Key Prevention Strategies</h3>
      <ul>
        <li>
          <strong>Always validate</strong> that the authenticated user owns or has permission to
          access the requested resource
        </li>
        <li>
          <strong>Use indirect references</strong> (UUIDs) instead of direct, predictable ones
          (auto-increment IDs)
        </li>
        <li>
          <strong>Implement proper authorization checks</strong> on every endpoint that accesses
          resources
        </li>
        <li>
          <strong>Return 403 Forbidden</strong> (not 404) when access is denied - don't reveal
          whether a resource exists
        </li>
        <li>
          <strong>Test thoroughly</strong> with different user roles and permissions
        </li>
      </ul>

      <h3>Common IDOR Locations</h3>
      <ul>
        <li>API endpoints that access user-specific data</li>
        <li>File downloads</li>
        <li>Profile updates</li>
        <li>Password reset functionality</li>
        <li>
          Any endpoint with parameters like <code>:id</code>, <code>:userId</code>,{" "}
          <code>:accountId</code>
        </li>
      </ul>
    </div>
  );
}
