import Syntax from "../../../components/SyntaxHighlighter";

export default function LeastPrivilege() {
  return (
    <div>
      <h2>Principle of Least Privilege</h2>
      <p>Grant users the minimum permissions necessary to perform their tasks. No more.</p>

      <h3>Bad Example</h3>
      <p>Admin middleware grants all permissions:</p>
      <Syntax
        language="typescript"
        code={`import { Request, Response, NextFunction } from 'express';

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).send('Forbidden');
  }
  next();
};

app.use('/admin', isAdmin, (req: Request, res: Response) => {
  // User has full access - too broad!
});`}
      />

      <h3>Good Example</h3>
      <p>Specific route permissions:</p>
      <Syntax
        language="typescript"
        code={`const canViewPost = (req: Request, res: Response, next: NextFunction) => {
  // Check if user can view this specific post
  next();
};

const canCreatePost = (req: Request, res: Response, next: NextFunction) => {
  // Check if user can create posts
  next();
};

app.get('/posts/:id', canViewPost, (req: Request, res: Response) => {
  // User can only view this specific post
});

app.post('/posts', canCreatePost, (req: Request, res: Response) => {
  // User can create posts but not delete
});`}
      />

      <h3>Key Takeaway</h3>
      <p>
        Always start with the most restrictive permissions and only grant what's absolutely
        necessary.
      </p>
    </div>
  );
}
