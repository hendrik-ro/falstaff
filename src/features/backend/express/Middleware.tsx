import Syntax from "../../../components/SyntaxHighlighter";

export default function ExpressMiddleware() {
  return (
    <div>
      <h2>Middleware</h2>
      <p>Connects data, APIs, software tools, and other applications.</p>
      <br style={{ marginTop: "1rem" }} />
      <p>
        Common middleware modules can be found{" "}
        <a
          href="https://expressjs.com/en/resources/middleware.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <br style={{ marginTop: "1rem" }} />
      <div className="flexContainer">
        <MiddlewareBasic />
        <MiddlewareRouteSpecific />
        <MiddlewareStream />
        <MiddlewareAuthFlow />
        <MiddlewareError />
        <MiddlewareRouteParams />
        <MiddlewareMergeParams />
      </div>
    </div>
  );
}

function MiddlewareBasic() {
  return (
    <div className="flexItem">
      <h3>Basic Middleware</h3>
      <p>The following middleware is applied to all routes:</p>
      <Syntax
        language="typescript"
        code={`// Define middleware function
const loggingMiddleware = (
req: Request,
res: Response,
next: NextFunction
) => {
console.log(\`\${req.method} \${req.url}\`);
next();
};

// Apply middleware to all routes
app.use(loggingMiddleware);
`}
        lineNumbers={true}
      />
      <p>
        <strong>Note:</strong> Basic logging can be accomplished by a library such as{" "}
        <a href="https://github.com/expressjs/morgan" target="_blank" rel="noopener noreferrer">
          Morgan
        </a>
        .
      </p>
    </div>
  );
}

function MiddlewareRouteSpecific() {
  return (
    <div className="flexItem">
      <h3>Route-Specific Middleware</h3>
      <p>To apply middleware to a specific route, specify the route as the first argument:</p>
      <Syntax
        language="typescript"
        code={`const loggingMiddleware = (
req: Request,
res: Response,
next: NextFunction
) => {
console.log(\`\${req.method} \${req.url}\`);
next();
};

// Apply middleware to a specific route
app.use("/api", LoggingMiddleware);

// Or to multiple routes
app.use(["/api", "/admin"], loggingMiddleware);
`}
        lineNumbers={true}
      />
    </div>
  );
}

function MiddlewareStream() {
  return (
    <div className="flexItem">
      <h3>Stream Middleware</h3>
      <p>Advanced middleware for handling a stream:</p>
      <Syntax
        language="typescript"
        code={`const streamMiddleware = (
req: Request,
res: Response,
next: NextFunction
) => {
// Handle stream
req.on("data", (chunk) => {
// Process chunk
});

req.on("end", () => {
// Stream ended
});

next();
};

app.use(streamMiddleware);
`}
        lineNumbers={true}
      />
      <p>
        <strong>Note:</strong> Parsing Request bodies can be done with middleware like{" "}
        <a
          href="https://github.com/expressjs/body-parser"
          target="_blank"
          rel="noopener noreferrer"
        >
          body-parser
        </a>
        .
      </p>
    </div>
  );
}

function MiddlewareAuthFlow() {
  return (
    <div className="flexItem">
      <h3>Authentication Flow</h3>
      <p>Middleware for handling authentication flow:</p>
      <Syntax
        language="typescript"
        code={`const authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
  // middleware logic
  next();
};

const logRequest = (
  req: Request,
  res: Response,
  next: NextFunction
  ) => {
  // middleware logic
  next();
};

const getData = (
  req: Request,
  res: Response,
  next: NextFunction
  ) => {
  // route logic
};

app.get("/api/data", authenticate, logRequest, getData);
`}
        lineNumbers={true}
      />
    </div>
  );
}

function MiddlewareError() {
  return (
    <div className="flexItem">
      <h3>Error Handling</h3>
      <p>Middleware for error handling:</p>
      <Syntax
        language="typescript"
        code={`const getData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // route logic
  } catch (err) {
    // pass error to error handling middleware
    next(err);
  }
};

app.get("/api/data", getData);

// Call error handling middleware last
app.use(
  (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});`}
        lineNumbers={true}
      />
    </div>
  );
}

function MiddlewareRouteParams() {
  return (
    <div className="flexItem">
      <h3>Router Parameters</h3>
      <p>Express provides middleware that automatically extracts parameters from the URL:</p>
      <Syntax
        language="typescript"
        code={`app.param(
  'parameter',
  (
    req: Request,
    res: Response,
    next: NextFunction,
    parameter: string
  ) => {
    try {
      const found = table.find((item) => {
        return parameter === item.parameter;
      });
      if (found) {
        req.item = found;
        next();
      } else {
        next(new Error(
          'No item matched the parameter provided.'
        ));
      };
    } catch (err) {
      next(err);
    }
  }
);
`}
        lineNumbers={true}
      />
      <p>
        This code example, intercepts requests to <code>:parameter</code> and extracts the parameter
        value.
      </p>
    </div>
  );
}

function MiddlewareMergeParams() {
  return (
    <div className="flexItem">
      <h3>Express Merge Params</h3>
      <p>Allows to merge parameters from the parent router into the child router.</p>
      <Syntax
        language="typescript"
        code={`const parentRouter = express.Router();
const childRouter = express.Router(
  { mergeParams: true }
);

parentRouter.use('/:item/list', childRouter);

parentRouter.get('/', (req, res, next) => {
  res.status(200).send(items);
  next();
});

parentRouter.param(
  'item',
  (req, res, next, id) => {
    const item = getItemById(id);
    req.item = item;
    next();
});

childRouter.get('/', (req, res, next) => {
  res.status(200).send(
    \`Route \${req.item}: \${getItems(req.item)}\`
  );
});

app.use('/route', parentRouter);
`}
        lineNumbers={true}
      />
      <p>Router parameters only need to be defined in the parent router.</p>
    </div>
  );
}
