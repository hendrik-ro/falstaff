import style from "./Node.module.css";
import Syntax from "../../../components/SyntaxHighlighter";

export default function NodeJSModules() {
  return (
    <div>
      <h2>Modules</h2>
      <p>Node provides built in modules that can be used out of the box.</p>
      <div className={style.flexContainer}>
        <NodeJSModulesConsole />
        <NodeJSModulesProcess />
        <NodeJSModulesOS />
        <NodeJSModulesUtil />
      </div>
    </div>
  );
}

function NodeJSModulesConsole() {
  return (
    <div className={style.flexItem}>
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
    <div className={style.flexItem}>
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
}
`}
      />
    </div>
  );
}

function NodeJSModulesOS() {
  return (
    <div className={style.flexItem}>
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
}
`}
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
    <div className={style.flexItem}>
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
      <p>
        An extensive list of utility functions is available in the{" "}
        <a
          href="https://nodejs.org/api/util.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node.js documentation
        </a>
        .
      </p>
    </div>
  );
}
