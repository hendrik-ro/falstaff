export default function SQLClauses() {
  return (
    <div>
      <h2>Common SQL Clauses</h2>
      <table style={{ textAlign: "center" }}>
        <caption>Common SQL clauses and their aliases</caption>
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
            <td>WHERE</td>
            <td>Filter records</td>
            <td>WHERE</td>
            <td>WHERE</td>
            <td>WHERE</td>
          </tr>
          <tr>
            <td>FROM</td>
            <td>Specify source table(s)</td>
            <td>FROM</td>
            <td>FROM</td>
            <td>FROM</td>
          </tr>
          <tr>
            <td>GROUP BY</td>
            <td>Group rows by column value</td>
            <td>GROUP BY</td>
            <td>GROUP BY</td>
            <td>GROUP BY</td>
          </tr>
          <tr>
            <td>ORDER BY</td>
            <td>Sort results</td>
            <td>ORDER BY</td>
            <td>ORDER BY</td>
            <td>ORDER BY</td>
          </tr>
          <tr>
            <td>HAVING</td>
            <td>Filter groups</td>
            <td>HAVING</td>
            <td>HAVING</td>
            <td>HAVING</td>
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
          <tr>
            <td>INNER JOIN</td>
            <td>Return matching rows from both tables</td>
            <td>INNER JOIN / JOIN</td>
            <td>INNER JOIN / JOIN</td>
            <td>INNER JOIN / JOIN</td>
          </tr>
          <tr>
            <td>LEFT JOIN</td>
            <td>Return all from left table, matching from right</td>
            <td>LEFT JOIN / LEFT OUTER JOIN</td>
            <td>LEFT JOIN / LEFT OUTER JOIN</td>
            <td>LEFT JOIN / LEFT OUTER JOIN</td>
          </tr>
          <tr>
            <td>RIGHT JOIN</td>
            <td>Return all from right table, matching from left</td>
            <td>RIGHT JOIN / RIGHT OUTER JOIN</td>
            <td>RIGHT JOIN / RIGHT OUTER JOIN</td>
            <td>- (emulated with LEFT JOIN)</td>
          </tr>
          <tr>
            <td>FULL JOIN</td>
            <td>Return all rows when match in either table</td>
            <td>- (emulated with UNION)</td>
            <td>FULL JOIN / FULL OUTER JOIN</td>
            <td>- (emulated with LEFT + UNION + RIGHT)</td>
          </tr>
          <tr>
            <td>CROSS JOIN</td>
            <td>Return Cartesian product</td>
            <td>CROSS JOIN</td>
            <td>CROSS JOIN</td>
            <td>CROSS JOIN</td>
          </tr>
          <tr>
            <td>USING</td>
            <td>Specify column for JOIN</td>
            <td>USING</td>
            <td>USING</td>
            <td>USING</td>
          </tr>
          <tr>
            <td>ON</td>
            <td>Join condition</td>
            <td>ON</td>
            <td>ON</td>
            <td>ON</td>
          </tr>
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
    </div>
  );
}
