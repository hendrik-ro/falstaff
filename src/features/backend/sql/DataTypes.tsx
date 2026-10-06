export default function SQLDataTypes() {
  return (
    <div>
      <h2>Common data types</h2>
      <table style={{ textAlign: "center" }}>
        <caption>Common data types and their aliases</caption>
        <thead style={{ fontWeight: "bold" }}>
          <tr>
            <td>Type</td>
            <td>Description</td>
            <td>MySQL</td>
            <td>PostgreSQL</td>
            <td>SQLite</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>INTEGER</td>
            <td>Whole numbers</td>
            <td>INT</td>
            <td>INTEGER</td>
            <td>INTEGER</td>
          </tr>
          <tr>
            <td>TEXT</td>
            <td>Text strings</td>
            <td>VARCHAR(255)</td>
            <td>TEXT (also VARCHAR)</td>
            <td>TEXT</td>
          </tr>
          <tr>
            <td>DATE</td>
            <td>Date (no time)</td>
            <td>DATE</td>
            <td>DATE</td>
            <td>DATE (stored as TEXT/REAL/INTEGER)</td>
          </tr>
          <tr>
            <td>REAL</td>
            <td>Floating-point decimal</td>
            <td>REAL</td>
            <td>REAL</td>
            <td>REAL</td>
          </tr>
          <tr>
            <td>DECIMAL/NUMERIC</td>
            <td>Exact decimal (e.g. money)</td>
            <td>DECIMAL</td>
            <td>NUMERIC</td>
            <td>- (only via REAL/TEXT)</td>
          </tr>
          <tr>
            <td>BOOLEAN</td>
            <td>True/false</td>
            <td>BOOLEAN</td>
            <td>BOOLEAN</td>
            <td>- (stored as INTEGER 0/1)</td>
          </tr>
          <tr>
            <td>DATETIME</td>
            <td>Date + time</td>
            <td>DATETIME / TIMESTAMP</td>
            <td>TIMESTAMP</td>
            <td>- (TEXT (ISO-8601) or INTEGER (unix time)</td>
          </tr>
          <tr>
            <td>BLOB</td>
            <td>Binary data</td>
            <td>BLOB</td>
            <td>BYTEA</td>
            <td>BLOB</td>
          </tr>
          <tr>
            <td>VARCHAR(n)</td>
            <td>Bounded text</td>
            <td>VARCHAR(n)</td>
            <td>VARCHAR(n)</td>
            <td>VARCHAR(n)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
