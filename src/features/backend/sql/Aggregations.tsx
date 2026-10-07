export default function SQLAggregations() {
  return (
    <div>
      <h2>Aggregate Functions</h2>
      <table style={{ textAlign: "center" }}>
        <caption>Aggregate functions and their aliases</caption>
        <thead style={{ fontWeight: "bold" }}>
          <tr>
            <td>Function</td>
            <td>Description</td>
            <td>MySQL</td>
            <td>PostgreSQL</td>
            <td>SQLite</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>COUNT(*)</td>
            <td>Count all rows</td>
            <td>COUNT(*)</td>
            <td>COUNT(*)</td>
            <td>COUNT(*)</td>
          </tr>
          <tr>
            <td>COUNT(column)</td>
            <td>Count non-NULL values in column</td>
            <td>COUNT(column)</td>
            <td>COUNT(column)</td>
            <td>COUNT(column)</td>
          </tr>
          <tr>
            <td>SUM</td>
            <td>Sum of values</td>
            <td>SUM(column)</td>
            <td>SUM(column)</td>
            <td>SUM(column)</td>
          </tr>
          <tr>
            <td>AVG</td>
            <td>Average of values</td>
            <td>AVG(column)</td>
            <td>AVG(column)</td>
            <td>AVG(column)</td>
          </tr>
          <tr>
            <td>MIN</td>
            <td>Minimum value</td>
            <td>MIN(column)</td>
            <td>MIN(column)</td>
            <td>MIN(column)</td>
          </tr>
          <tr>
            <td>MAX</td>
            <td>Maximum value</td>
            <td>MAX(column)</td>
            <td>MAX(column)</td>
            <td>MAX(column)</td>
          </tr>
          <tr>
            <td>GROUP_CONCAT</td>
            <td>Concatenate values from multiple rows</td>
            <td>GROUP_CONCAT(column SEPARATOR sep)</td>
            <td>STRING_AGG(column, sep), ARRAY_AGG(column)</td>
            <td>GROUP_CONCAT(column, sep)</td>
          </tr>
          <tr>
            <td>ARRAY_AGG</td>
            <td>Aggregate values into array</td>
            <td>- (not native)</td>
            <td>ARRAY_AGG(column), ARRAY(column)</td>
            <td>- (use GROUP_CONCAT)</td>
          </tr>
          <tr>
            <td>JSON_AGG</td>
            <td>Aggregate values into JSON array</td>
            <td>- (use JSON_ARRAYAGG in 8.0+)</td>
            <td>JSON_AGG(column), JSONB_AGG(column)</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>JSON_ARRAYAGG</td>
            <td>Aggregate values into JSON array (MySQL)</td>
            <td>JSON_ARRAYAGG(column)</td>
            <td>- (use JSON_AGG)</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>JSON_OBJECTAGG</td>
            <td>Aggregate key-value pairs into JSON object</td>
            <td>JSON_OBJECTAGG(key, value)</td>
            <td>JSON_OBJECT_AGG(key, value), JSONB_OBJECT_AGG(key, value)</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>STRING_AGG</td>
            <td>Concatenate strings with separator</td>
            <td>- (use GROUP_CONCAT)</td>
            <td>STRING_AGG(column, separator)</td>
            <td>- (use GROUP_CONCAT)</td>
          </tr>
          <tr>
            <td>STDDEV/STDDEV_POP</td>
            <td>Population standard deviation</td>
            <td>STDDEV(column), STD(column)</td>
            <td>STDDEV_POP(column), STDDEV(column)</td>
            <td>STDDEV(column)</td>
          </tr>
          <tr>
            <td>STDDEV_SAMP</td>
            <td>Sample standard deviation</td>
            <td>STDDEV_SAMP(column)</td>
            <td>STDDEV_SAMP(column)</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>VARIANCE/VAR_POP</td>
            <td>Population variance</td>
            <td>VARIANCE(column), VAR_POP(column)</td>
            <td>VAR_POP(column), VARIANCE(column)</td>
            <td>VARIANCE(column)</td>
          </tr>
          <tr>
            <td>VAR_SAMP</td>
            <td>Sample variance</td>
            <td>VAR_SAMP(column)</td>
            <td>VAR_SAMP(column)</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>MEDIAN</td>
            <td>Median value</td>
            <td>- (not native)</td>
            <td>PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY column)</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>PERCENTILE_CONT</td>
            <td>Continuous percentile</td>
            <td>- (window function only)</td>
            <td>PERCENTILE_CONT(n) WITHIN GROUP (ORDER BY column)</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>PERCENTILE_DISC</td>
            <td>Discrete percentile</td>
            <td>- (window function only)</td>
            <td>PERCENTILE_DISC(n) WITHIN GROUP (ORDER BY column)</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>FIRST/LAST</td>
            <td>First/Last value in group</td>
            <td>- (use window functions)</td>
            <td>FIRST_VALUE(column), LAST_VALUE(column) (window functions)</td>
            <td>MIN/MAX typically used</td>
          </tr>
          <tr>
            <td>BIT_AND</td>
            <td>Bitwise AND of all values</td>
            <td>BIT_AND(column)</td>
            <td>BIT_AND(column)</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>BIT_OR</td>
            <td>Bitwise OR of all values</td>
            <td>BIT_OR(column)</td>
            <td>BIT_OR(column)</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>BOOL_AND</td>
            <td>Logical AND of all boolean values</td>
            <td>- (use MIN/MAX with boolean)</td>
            <td>BOOL_AND(column)</td>
            <td>- (use MIN/MAX with boolean)</td>
          </tr>
          <tr>
            <td>BOOL_OR</td>
            <td>Logical OR of all boolean values</td>
            <td>- (use MAX/OR with boolean)</td>
            <td>BOOL_OR(column)</td>
            <td>- (use MAX with boolean)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
