import Syntax from "../../../components/SyntaxHighlighter";

export default function NodeJSCLI() {
  return (
    <div>
      <h2>CLI REPL</h2>
      <p>
        Node provides a REPL (Read-Eval-Print Loop) CLI that allows you to interactively run
        JavaScript code.
      </p>
      <Syntax
        language="bash"
        code={`$ node
Welcome to Node.js v22.22.3.
Type ".help" for more information.
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(Object.keys(global))
[
  'global',          'clearImmediate',
  'setImmediate',    'clearInterval',
  'clearTimeout',    'setInterval',
  'setTimeout',      'queueMicrotask',
  'structuredClone', 'atob',
  'btoa',            'performance',
  'fetch',           'crypto',
  'navigator',       'sessionStorage'
]
undefined`}
      />
      <br style={{ marginTop: "2rem" }} />
      <p>
        The command <code>require(\`module\`).builtinModules</code> lists all the built-in modules
        available in Node.js:
      </p>
      <Syntax
        language="bash"
        code={`❯ node
Welcome to Node.js v26.8.2.
Type ".help" for more information.
> require(\`module\`).builtinModules
[
  '_http_agent',         '_http_client',   '_http_common',
  '_http_incoming',      '_http_outgoing', '_http_server',
  '_tls_common',         '_tls_wrap',      'assert',
  'assert/strict',       'async_hooks',    'buffer',
  'child_process',       'cluster',        'console',
  'constants',           'crypto',         'dgram',
  'diagnostics_channel', 'dns',            'dns/promises',
  'domain',              'events',         'fs',
  'fs/promises',         'http',           'http2',
  'https',               'inspector',      'inspector/promises',
  'module',              'net',            'os',
  'path',                'path/posix',     'path/win32',
  'perf_hooks',          'process',        'punycode',
  'querystring',         'readline',       'readline/promises',
  'repl',                'stream',         'stream/consumers',
  'stream/promises',     'stream/web',     'string_decoder',
  'sys',                 'timers',         'timers/promises',
  'tls',                 'trace_events',   'tty',
  'url',                 'util',           'util/types',
  'v8',                  'vm',             'wasi',
  'worker_threads',      'zlib',           'node:sea',
  'node:sqlite',         'node:test',      'node:test/reporters'
]
>`}
      />
    </div>
  );
}
