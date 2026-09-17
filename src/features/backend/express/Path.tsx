import Syntax from "../../../components/SyntaxHighlighter";

export default function ExpressJSPath() {
  return (
    <div>
      <h2>Paths</h2>
      <p>
        The method <code>req.params</code> is used to extract path parameters
        and <code>req.query</code> is used to extract query parameters from a
        URL:
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
  );
}
