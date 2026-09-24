import Syntax from "../../../components/SyntaxHighlighter";

export default function ExpressRouterParams() {
  return (
    <div>
      <h2>Router Parameters</h2>
      <p>Performs parameter extraction automatically.</p>
      <br style={{ marginTop: "1rem" }} />
      <p>Express provides a method that automatically extracts parameters from the URL:</p>
      <Syntax
        language="typescript"
        code={`app.param('parameter', (req: Request, res: Response, next: NextFunction, parameter: string) => {
  try {
    const found = table.find((item) => {
      return parameter === item.parameter;
    })
    if (found) {
      req.item = found;
      next();
    } else {
      next(new Error('No item matched the parameter you provided.'));
    };
  } catch (err) {
    next(err)
  }
});
`}
        lineNumbers={true}
      />
      <p>
        The code example above, intercepts requests to <code>:parameter</code> and extracts the
        parameter value.
      </p>
    </div>
  );
}
