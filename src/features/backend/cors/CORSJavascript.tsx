import Syntax from "../../../components/SyntaxHighlighter";

export default function CORSTypescript() {
  return (
    <div>
      <h2>TypeScript</h2>
      <p>
        To implement CORS in JavaScript, you can use the <code>setHeader()</code> method:
      </p>
      <Syntax
        language="typescript"
        code={`function enableCors(req: Request, res: Response, next: NextFunction) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
}`}
        lineNumbers={true}
      />
      <p>
        You can also use the{" "}
        <a href="https://github.com/expressjs/cors" target="_blank" rel="noopener noreferrer">
          cors
        </a>{" "}
        middleware in Express.js:
      </p>
      <Syntax
        language="typescript"
        code={`import cors from 'cors';
// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());`}
        lineNumbers={true}
      />
      <p>
        To configure CORS, use <code>corsOptions</code>:
      </p>
      <Syntax
        language="typescript"
        code={`var express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200
}

// Adds headers: Access-Control-Allow-Origin: http://example.com
app.get('/products/:id', cors(corsOptions), (req, res, next) => {
  res.json({msg: 'Hello'})
})

app.listen(80, function () {
  console.log('web server listening on port 80')
})
`}
        lineNumbers={true}
      />
      <p>
        This will allow requests from <code>http://example.com</code> with the specified methods and
        headers.
      </p>
    </div>
  );
}
