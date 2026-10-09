import Syntax from "../../../components/SyntaxHighlighter";

export default function SafeZipExtraction() {
  return (
    <div>
      <h2>Safe ZIP Extraction</h2>
      <p>
        Extracting an archive is a form of injection against the file system. Entry names inside a
        ZIP are attacker-controlled data, and archive metadata can lie. Two attacks dominate: path
        traversal (Zip Slip) and resource exhaustion (Zip Bombs).
      </p>

      <h3>Zip Slip: Path Traversal</h3>
      <p>
        ZIP entries can contain <code>../</code> sequences in their names. A naive extractor joins
        the name to the output directory and writes outside of it, overwriting application files
        such as <code>package.json</code> or OS configuration.
      </p>
      <Syntax
        language="typescript"
        code={`// Entry name inside the archive:
//   ../../../../../../etc/cron.d/backdoor

// VULNERABLE: the joined path escapes the extraction directory
const filePath = path.join(destDir, entry.fileName);
await fs.writeFile(filePath, contents);
// Writes to /etc/cron.d/backdoor instead of the intended folder`}
      />

      <h3>Zip Bombs: Resource Exhaustion</h3>
      <p>
        A small archive can expand to enormous size (nested ZIPs reach ratios of millions to one),
        and a huge number of entries can exhaust file handles. Extraction can also block the event
        loop because the compression work happens synchronously.
      </p>

      <h3>Safe Extraction in Node</h3>
      <p>
        Check every entry name, cap total extracted size, and prefer libraries that process entries
        one at a time:
      </p>
      <Syntax
        language="typescript"
        code={`import fs from "node:fs/promises";
import path from "node:path";
import yauzl from "yauzl";

const MAX_ENTRIES = 10_000;
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50 MB per file
const MAX_TOTAL_SIZE = 200 * 1024 * 1024; // 200 MB total

async function safeExtract(zipPath: string, destDir: string): Promise<void> {
  const base = path.resolve(destDir);
  await fs.mkdir(base, { recursive: true });

  let entries = 0;
  let totalSize = 0;

  return new Promise((resolve, reject) => {
    yauzl.open(zipPath, { lazyEntries: true }, (err, zip) => {
      if (err || !zip) return reject(err);

      zip.on("error", reject);
      zip.on("end", resolve);
      zip.on("entry", (entry: yauzl.Entry) => {
        entries++;
        if (entries > MAX_ENTRIES) {
          return reject(new Error("Too many entries"));
        }
        if (entry.uncompressedSize > MAX_FILE_SIZE) {
          return reject(new Error("Entry too large"));
        }
        totalSize += entry.uncompressedSize;
        if (totalSize > MAX_TOTAL_SIZE) {
          return reject(new Error("Archive too large"));
        }

        // Zip Slip defense: resolve and verify the target path
        const target = path.resolve(base, entry.fileName);
        if (target !== base && !target.startsWith(base + path.sep)) {
          return reject(
            new Error(\`Blocked path traversal: \${entry.fileName}\`)
          );
        }
        if (/[/\\\\]$/.test(entry.fileName)) {
          fs.mkdir(target, { recursive: true }) // directory entry
            .then(() => zip.readEntry())
            .catch(reject);
          return;
        }
        zip.openReadStream(entry, (err2, readStream) => {
          if (err2 || !readStream) return reject(err2);
          // Count bytes written; uncompressedSize can lie
          let written = 0;
          readStream.on("data", (chunk: Buffer) => {
            written += chunk.length;
            if (written > MAX_FILE_SIZE) {
              readStream.destroy();
              reject(new Error("Entry exceeded size limit"));
            }
          });
          const out = fs.createWriteStream(target);
          readStream.pipe(out);
          out.on("finish", () => zip.readEntry());
          out.on("error", reject);
        });
      });
      zip.readEntry();
    });
  });
}`}
      />

      <h3>Key Rules</h3>
      <ul>
        <li>
          Never trust <code>entry.fileName</code>; resolve it and verify it stays inside the
          destination directory
        </li>
        <li>
          Treat declared sizes as hints, not guarantees: enforce limits on the bytes actually
          written
        </li>
        <li>
          Reject absolute paths, drive letters, and symlinks pointing outside the extraction root
        </li>
        <li>Cap entry count, per-file size, and total extracted size</li>
        <li>Extract to a dedicated, least-privileged location, never next to application code</li>
        <li>Do extraction in a worker or stream so one archive cannot block or crash the server</li>
      </ul>
      <p>
        The path check above is the same defense used against path traversal in user-supplied file
        names: resolve, then verify the prefix.
      </p>
    </div>
  );
}
