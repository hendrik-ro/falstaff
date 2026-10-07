export default function SQLJoins() {
  return (
    <div>
      <h2>JOIN Operations</h2>
      <table style={{ textAlign: "center" }}>
        <caption>JOIN types and their aliases</caption>
        <thead style={{ fontWeight: "bold" }}>
          <tr>
            <td>Join Type</td>
            <td>Description</td>
            <td>MySQL</td>
            <td>PostgreSQL</td>
            <td>SQLite</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>INNER JOIN</td>
            <td>Returns rows with matching values in both tables</td>
            <td>INNER JOIN, JOIN</td>
            <td>INNER JOIN, JOIN</td>
            <td>INNER JOIN, JOIN</td>
          </tr>
          <tr>
            <td>LEFT JOIN</td>
            <td>Returns all rows from left table, and matched from right (or NULL)</td>
            <td>LEFT JOIN, LEFT OUTER JOIN</td>
            <td>LEFT JOIN, LEFT OUTER JOIN</td>
            <td>LEFT JOIN, LEFT OUTER JOIN</td>
          </tr>
          <tr>
            <td>RIGHT JOIN</td>
            <td>Returns all rows from right table, and matched from left (or NULL)</td>
            <td>RIGHT JOIN, RIGHT OUTER JOIN</td>
            <td>RIGHT JOIN, RIGHT OUTER JOIN</td>
            <td>- (emulated: SELECT from B LEFT JOIN A)</td>
          </tr>
          <tr>
            <td>FULL JOIN</td>
            <td>Returns all rows when there is a match in either left or right table</td>
            <td>- (emulated with UNION of LEFT and RIGHT)</td>
            <td>FULL JOIN, FULL OUTER JOIN</td>
            <td>- (emulated: LEFT JOIN + UNION + RIGHT JOIN)</td>
          </tr>
          <tr>
            <td>CROSS JOIN</td>
            <td>Returns Cartesian product of both tables</td>
            <td>CROSS JOIN</td>
            <td>CROSS JOIN</td>
            <td>CROSS JOIN</td>
          </tr>
          <tr>
            <td>SELF JOIN</td>
            <td>Joins a table to itself</td>
            <td>SELF JOIN (alias required)</td>
            <td>SELF JOIN (alias required)</td>
            <td>SELF JOIN (alias required)</td>
          </tr>
          <tr>
            <td>NATURAL JOIN</td>
            <td>Joins on columns with same names</td>
            <td>NATURAL JOIN, NATURAL LEFT JOIN, NATURAL RIGHT JOIN</td>
            <td>NATURAL JOIN, NATURAL LEFT JOIN, NATURAL RIGHT JOIN</td>
            <td>NATURAL JOIN</td>
          </tr>
          <tr>
            <td>JOIN with USING</td>
            <td>Join on specific column(s)</td>
            <td>JOIN ... USING (column)</td>
            <td>JOIN ... USING (column)</td>
            <td>JOIN ... USING (column)</td>
          </tr>
          <tr>
            <td>JOIN with ON</td>
            <td>Join with custom condition</td>
            <td>JOIN ... ON condition</td>
            <td>JOIN ... ON condition</td>
            <td>JOIN ... ON condition</td>
          </tr>
          <tr>
            <td>LATERAL JOIN</td>
            <td>Join with subquery that references left table</td>
            <td>- (not supported)</td>
            <td>LATERAL JOIN, LEFT JOIN LATERAL, CROSS JOIN LATERAL</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>APPLY</td>
            <td>Table expression with correlation</td>
            <td>CROSS APPLY, OUTER APPLY</td>
            <td>LATERAL (equivalent)</td>
            <td>- (not supported)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
