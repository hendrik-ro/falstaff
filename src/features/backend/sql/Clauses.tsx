export default function SQLClauses() {
  return (
    <div>
      <h2>Query Clauses and Operators</h2>

      <h3>Core Query Clauses</h3>
      <table style={{ textAlign: "center", marginBottom: "40px" }}>
        <caption>Core SQL clauses for query structure</caption>
        <thead style={{ fontWeight: "bold" }}>
          <tr>
            <td>Clause</td>
            <td>Description</td>
            <td>MySQL</td>
            <td>PostgreSQL</td>
            <td>SQLite</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FROM</td>
            <td>Specify source table(s)</td>
            <td>FROM</td>
            <td>FROM</td>
            <td>FROM</td>
          </tr>
          <tr>
            <td>WHERE</td>
            <td>Filter records</td>
            <td>WHERE</td>
            <td>WHERE</td>
            <td>WHERE</td>
          </tr>
          <tr>
            <td>GROUP BY</td>
            <td>Group rows by column value</td>
            <td>GROUP BY</td>
            <td>GROUP BY</td>
            <td>GROUP BY</td>
          </tr>
          <tr>
            <td>HAVING</td>
            <td>Filter groups</td>
            <td>HAVING</td>
            <td>HAVING</td>
            <td>HAVING</td>
          </tr>
          <tr>
            <td>ORDER BY</td>
            <td>Sort results</td>
            <td>ORDER BY</td>
            <td>ORDER BY</td>
            <td>ORDER BY</td>
          </tr>
          <tr>
            <td>LIMIT</td>
            <td>Limit number of results</td>
            <td>LIMIT</td>
            <td>LIMIT</td>
            <td>LIMIT</td>
          </tr>
          <tr>
            <td>OFFSET</td>
            <td>Skip records</td>
            <td>OFFSET</td>
            <td>OFFSET</td>
            <td>OFFSET</td>
          </tr>
          <tr>
            <td>DISTINCT</td>
            <td>Return unique values</td>
            <td>DISTINCT</td>
            <td>DISTINCT</td>
            <td>DISTINCT</td>
          </tr>
          <tr>
            <td>AS</td>
            <td>Alias for column/table</td>
            <td>AS (optional)</td>
            <td>AS (optional)</td>
            <td>AS (optional)</td>
          </tr>
        </tbody>
      </table>

      <h3>Common Table Expressions (CTEs)</h3>
      <table style={{ textAlign: "center", marginBottom: "40px" }}>
        <caption>Common Table Expressions for temporary result sets</caption>
        <thead style={{ fontWeight: "bold" }}>
          <tr>
            <td>Keyword</td>
            <td>Description</td>
            <td>MySQL</td>
            <td>PostgreSQL</td>
            <td>SQLite</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>WITH</td>
            <td>Define Common Table Expression(s)</td>
            <td>WITH cte_name AS (SELECT ...)</td>
            <td>WITH cte_name AS (SELECT ...)</td>
            <td>WITH cte_name AS (SELECT ...)</td>
          </tr>
          <tr>
            <td>WITH RECURSIVE</td>
            <td>Define recursive CTE</td>
            <td>WITH RECURSIVE cte_name AS (SELECT ... UNION SELECT ...)</td>
            <td>WITH RECURSIVE cte_name AS (SELECT ... UNION ALL SELECT ...)</td>
            <td>WITH RECURSIVE cte_name AS (SELECT ... UNION ALL SELECT ...)</td>
          </tr>
        </tbody>
      </table>

      <h3>Set Operations</h3>
      <table style={{ textAlign: "center", marginBottom: "40px" }}>
        <caption>Set operations for combining query results</caption>
        <thead style={{ fontWeight: "bold" }}>
          <tr>
            <td>Operator</td>
            <td>Description</td>
            <td>MySQL</td>
            <td>PostgreSQL</td>
            <td>SQLite</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>UNION</td>
            <td>Combine result sets (no duplicates)</td>
            <td>UNION</td>
            <td>UNION</td>
            <td>UNION</td>
          </tr>
          <tr>
            <td>UNION ALL</td>
            <td>Combine result sets (with duplicates)</td>
            <td>UNION ALL</td>
            <td>UNION ALL</td>
            <td>UNION ALL</td>
          </tr>
          <tr>
            <td>INTERSECT</td>
            <td>Return common rows</td>
            <td>- (emulated)</td>
            <td>INTERSECT</td>
            <td>INTERSECT</td>
          </tr>
          <tr>
            <td>EXCEPT/MINUS</td>
            <td>Return rows in first not in second</td>
            <td>- (emulated)</td>
            <td>EXCEPT</td>
            <td>EXCEPT</td>
          </tr>
        </tbody>
      </table>

      <h3>Operators and Conditions</h3>
      <table style={{ textAlign: "center" }}>
        <caption>Common operators and conditional keywords</caption>
        <thead style={{ fontWeight: "bold" }}>
          <tr>
            <td>Operator</td>
            <td>Description</td>
            <td>MySQL</td>
            <td>PostgreSQL</td>
            <td>SQLite</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BETWEEN</td>
            <td>Range condition</td>
            <td>BETWEEN</td>
            <td>BETWEEN</td>
            <td>BETWEEN</td>
          </tr>
          <tr>
            <td>IN</td>
            <td>Match any in list</td>
            <td>IN</td>
            <td>IN</td>
            <td>IN</td>
          </tr>
          <tr>
            <td>LIKE</td>
            <td>Pattern matching</td>
            <td>LIKE</td>
            <td>LIKE (also ILIKE for case-insensitive)</td>
            <td>LIKE</td>
          </tr>
          <tr>
            <td>EXISTS</td>
            <td>Test if subquery returns rows</td>
            <td>EXISTS</td>
            <td>EXISTS</td>
            <td>EXISTS</td>
          </tr>
          <tr>
            <td>AND</td>
            <td>Logical AND</td>
            <td>AND</td>
            <td>AND</td>
            <td>AND</td>
          </tr>
          <tr>
            <td>OR</td>
            <td>Logical OR</td>
            <td>OR</td>
            <td>OR</td>
            <td>OR</td>
          </tr>
          <tr>
            <td>NOT</td>
            <td>Logical NOT</td>
            <td>NOT</td>
            <td>NOT</td>
            <td>NOT</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
