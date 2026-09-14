import Syntax from "../../../components/SyntaxHighlighter";

export default function NodeJSModules() {
  return (
    <div>
      <h2>Modules</h2>
      <p>
        Node provides built in modules that can be used out of the box. A
        complete list of modules is available in the{" "}
        <a
          href="https://nodejs.org/api/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node.js documentation
        </a>
        .
      </p>
      <br style={{ marginTop: "1rem" }} />
      <p>
        <strong>Note: </strong> Code snippets are in CommonJS format.
      </p>
      <div className="flexContainer">
        <NodeJSModulesConsole />
        <NodeJSModulesProcess />
        <NodeJSModulesError />
        <NodeJSModulesBuffer />
        <NodeJSModulesOS />
        <NodeJSModulesUtil />
        <NodeJSModulesEvents />
      </div>
    </div>
  );
}

function NodeJSModulesConsole() {
  return (
    <div className="flexItem">
      <h3>Console</h3>
      <p>
        <em>global</em>
      </p>
      <Syntax
        language="bash"
        code={`$ node
Welcome to Node.js v26.8.1.
Type ".help" for more information.
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
const cars = ['bmw', 'porsche', 'volkswagen'];
console.log(cars);
console.table(cars);
console.assert(cars.length === 4);

// Ctrl + D returns:
[ 'bmw', 'porsche', 'volkswagen' ]
┌─────────┬──────────────┐
│ (index) │ Values       │
├─────────┼──────────────┤
│ 0       │ 'bmw'        │
│ 1       │ 'porsche'    │
│ 2       │ 'volkswagen' │
└─────────┴──────────────┘
Assertion failed
undefined`}
      />
    </div>
  );
}

function NodeJSModulesProcess() {
  return (
    <div className="flexItem">
      <h3>Process</h3>
      <p>
        <em>global</em>
      </p>
      <Syntax
        language="javascript"
        code={`// process.argv
let args = process.argv;
console.log(args);

// prints:
[
  '/usr/bin/node',
  '/path/to/file/app.js',
  'arg2', // launch arguments
  'arg3',
  'arg4',
]`}
      />
      <Syntax
        language="javascript"
        code={`// process.env
let env = process.env;
env.NODE_ENV = 'development';
console.log(env.NODE_ENV);

// prints:
development`}
      />
      <Syntax
        language="javascript"
        code={`// process.memoryUsage()
let mem = process.memoryUsage();
console.log(mem);

// prints:
{
  rss: bytes,
  heapTotal: bytes,
  heapUsed: bytes,
  external: bytes,
}`}
      />
    </div>
  );
}

function NodeJSModulesError() {
  return (
    <div className="flexItem">
      <h3>Error</h3>
      <p>
        <em>global</em>
      </p>
      <Syntax
        language="javascript"
        code={`// Error
let errFirstCallback = (err, data) => {
  if (err) {
    console.log(\`Something went wrong: \${err}\`);
  } else {
    console.log(\`Data: \${data}\`);
  }
};

let mockAPI = (input, callback) => {
  setTimeout(() => {
    if (input === 'input') {
      throw new Error('Something went wrong');
    } else {
      let response = \`Received: \${input}\`
      callback(response);
    }
  }, 0);
};

mockAPI('input', errFirstCallback);`}
      />
    </div>
  );
}

function NodeJSModulesBuffer() {
  return (
    <div className="flexItem">
      <h3>Buffer</h3>
      <p>
        <em>import recommended</em>
      </p>
      <Syntax
        language="javascript"
        code={`let buffer = require("buffer");
// allocate buffer of size 15 filled with 'b', encoding optional
const bufferAlloc = Buffer.alloc(15, 'b', 'utf-8')

// create buffer1 with 'Node' and buffer2 with '.js', encoding optional
const buffer1 = Buffer.from('Node', 'utf-8');
const buffer2 = Buffer.from('.js', 'utf-8');


// combine buffer1 and buffer2, length optional
const bufferArray = [buffer1, buffer2];
const bufferConcat = Buffer.concat(bufferArray, 7);


// translate buffer to string
const bufferString = bufferConcat.toString();

console.log(bufferAlloc);
// <Buffer 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62>
console.log('Buffer 1:', buffer1, 'Buffer 2:', buffer2)
// Buffer 1: <Buffer 4e 6f 64 65> Buffer 2: <Buffer 2e 6a 73>
console.log(bufferConcat);
// <Buffer 4e 6f 64 65 2e 6a 73>
console.log(bufferString);
// Node.js`}
      />
    </div>
  );
}

function NodeJSModulesOS() {
  return (
    <div className="flexItem">
      <h3>OS</h3>
      <p>
        <em>needs import</em>
      </p>
      <Syntax
        language="javascript"
        code={`const os = require('os');
const local = {
  'home': os.homedir(),
  'os': os.type(),
  'arch': os.arch(),
  'uptime': os.uptime(),
}
console.log(local)

// prints:
{
  home: '/home/user',
  os: 'Linux',
  arch: 'x64',
  uptime: 7199.97,
}`}
      />
      <p>
        Furthermore, OS supports <code>networkInterface</code> for network info
        such as IP and MAC addresses, and <code>hostname</code> for the system's
        hostname.
      </p>
    </div>
  );
}

function NodeJSModulesUtil() {
  return (
    <div className="flexItem">
      <h3>Util</h3>
      <p>
        <em>needs import</em>
      </p>
      <p>
        The util module provides utility functions for working with JavaScript
        objects and data types such as <code>util.promisify()</code>.
      </p>
      <Syntax
        language="javascript"
        code={`const util = require('util');

const getPromise = util.promisify(getData);

async function fetchData(url) {
  try {
    const respone = await getPromise(url); // mocks an http request
    console.log('success');
  } catch(e) {
    console.error('failed');
  }
}`}
      />
    </div>
  );
}

function NodeJSModulesEvents() {
  return (
    <div className="flexItem">
      <h3>Events</h3>
      <p>
        <em>needs import</em>
      </p>
      <p>
        The events module provides a way to handle events and emit custom events
        in Node.js.
      </p>
      <Syntax
        language="javascript"
        code={`let events = require("events");

let listenerCallback = (data) => {
  console.log("Celebrate " + data);
};

let myEmitter = new events.EventEmitter();

myEmitter.on('celebration', listenerCallback);

myEmitter.emit('celebration', 'HEUREKA!');

// prints:
// Celebrate HEUREKA!`}
      />
    </div>
  );
}
