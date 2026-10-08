export default function SQLFunctions() {
  return (
    <div>
      <h2>SQL Functions</h2>

      <h3>Aggregate Functions</h3>
      <table style={{ textAlign: "center", marginBottom: "40px" }}>
        <caption>Aggregate functions for GROUP BY operations</caption>
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

      <h3>String Functions</h3>
      <table style={{ textAlign: "center", marginBottom: "40px" }}>
        <caption>String manipulation functions</caption>
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
            <td>String Length</td>
            <td>Length of string</td>
            <td>LENGTH(), CHAR_LENGTH()</td>
            <td>LENGTH(), CHAR_LENGTH()</td>
            <td>LENGTH()</td>
          </tr>
          <tr>
            <td>Substring</td>
            <td>Extract substring</td>
            <td>SUBSTRING(str, start, length), SUBSTR(), MID()</td>
            <td>SUBSTRING(str FROM start FOR length), SUBSTR()</td>
            <td>SUBSTR(str, start, length), SUBSTRING()</td>
          </tr>
          <tr>
            <td>String Concatenation</td>
            <td>Combine strings</td>
            <td>CONCAT(str1, str2, ...), CONCAT_WS(sep, str1, ...)</td>
            <td>str1 || str2, CONCAT(str1, str2, ...)</td>
            <td>str1 || str2</td>
          </tr>
          <tr>
            <td>Trim</td>
            <td>Remove whitespace</td>
            <td>TRIM(), LTRIM(), RTRIM()</td>
            <td>TRIM(), LTRIM(), RTRIM(), BTRIM()</td>
            <td>TRIM(), LTRIM(), RTRIM()</td>
          </tr>
          <tr>
            <td>Uppercase</td>
            <td>Convert to uppercase</td>
            <td>UPPER(), UCASE()</td>
            <td>UPPER(), UCASE()</td>
            <td>UPPER()</td>
          </tr>
          <tr>
            <td>Lowercase</td>
            <td>Convert to lowercase</td>
            <td>LOWER(), LCASE()</td>
            <td>LOWER(), LCASE()</td>
            <td>LOWER()</td>
          </tr>
          <tr>
            <td>Replace</td>
            <td>Replace substring</td>
            <td>REPLACE(str, old, new)</td>
            <td>REPLACE(str, old, new), REGEXP_REPLACE(str, pattern, replacement)</td>
            <td>REPLACE(str, old, new)</td>
          </tr>
          <tr>
            <td>Find in String</td>
            <td>Find position of substring</td>
            <td>LOCATE(substr, str), INSTR(str, substr)</td>
            <td>STRPOS(str, substr), POSITION(substr IN str)</td>
            <td>INSTR(str, substr)</td>
          </tr>
          <tr>
            <td>Left/Right</td>
            <td>Extract left/right substring</td>
            <td>LEFT(str, n), RIGHT(str, n)</td>
            <td>LEFT(str, n), RIGHT(str, n)</td>
            <td>SUBSTR(str, 1, n), SUBSTR(str, -n, n)</td>
          </tr>
          <tr>
            <td>Pad</td>
            <td>Pad string</td>
            <td>LPAD(str, n, pad), RPAD(str, n, pad)</td>
            <td>LPAD(str, n, pad), RPAD(str, n, pad)</td>
            <td>- (not native)</td>
          </tr>
          <tr>
            <td>Format</td>
            <td>Format number</td>
            <td>FORMAT(num, decimals)</td>
            <td>TO_CHAR(num, format), FORMAT() (custom)</td>
            <td>- (use printf)</td>
          </tr>
        </tbody>
      </table>

      <h3>Numeric Functions</h3>
      <table style={{ textAlign: "center", marginBottom: "40px" }}>
        <caption>Numeric calculation and manipulation functions</caption>
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
            <td>Round</td>
            <td>Round number</td>
            <td>ROUND(num, decimals)</td>
            <td>ROUND(num, decimals), ROUND(num::numeric, decimals)</td>
            <td>ROUND(num, decimals)</td>
          </tr>
          <tr>
            <td>Ceiling</td>
            <td>Round up</td>
            <td>CEIL(), CEILING()</td>
            <td>CEIL(), CEILING()</td>
            <td>CEIL()</td>
          </tr>
          <tr>
            <td>Floor</td>
            <td>Round down</td>
            <td>FLOOR()</td>
            <td>FLOOR()</td>
            <td>FLOOR()</td>
          </tr>
          <tr>
            <td>Truncate</td>
            <td>Truncate decimals</td>
            <td>TRUNCATE(num, decimals)</td>
            <td>TRUNC(num, decimals)</td>
            <td>- (use ROUND with CAST)</td>
          </tr>
          <tr>
            <td>Absolute Value</td>
            <td>Absolute value of number</td>
            <td>ABS()</td>
            <td>ABS()</td>
            <td>ABS()</td>
          </tr>
          <tr>
            <td>Power</td>
            <td>Raise to power</td>
            <td>POW(base, exp), POWER()</td>
            <td>POW(base, exp), base^exp</td>
            <td>POW(base, exp)</td>
          </tr>
          <tr>
            <td>Square Root</td>
            <td>Square root</td>
            <td>SQRT()</td>
            <td>SQRT()</td>
            <td>SQRT()</td>
          </tr>
          <tr>
            <td>Modulo</td>
            <td>Remainder of division</td>
            <td>MOD(num, div), % operator</td>
            <td>MOD(num, div), % operator</td>
            <td>% operator</td>
          </tr>
        </tbody>
      </table>

      <h3>Date and Time Functions</h3>
      <table style={{ textAlign: "center", marginBottom: "40px" }}>
        <caption>Date and time manipulation functions</caption>
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
            <td>Current Date</td>
            <td>Current date</td>
            <td>CURDATE(), CURRENT_DATE(), NOW() (with date)</td>
            <td>CURRENT_DATE, NOW()::DATE</td>
            <td>DATE('now')</td>
          </tr>
          <tr>
            <td>Current Time</td>
            <td>Current time</td>
            <td>CURTIME(), CURRENT_TIME()</td>
            <td>CURRENT_TIME, LOCALTIME</td>
            <td>TIME('now')</td>
          </tr>
          <tr>
            <td>Current Timestamp</td>
            <td>Current date and time</td>
            <td>NOW(), CURRENT_TIMESTAMP, SYSDATE()</td>
            <td>NOW(), CURRENT_TIMESTAMP, LOCALTIMESTAMP</td>
            <td>DATETIME('now'), CURRENT_TIMESTAMP</td>
          </tr>
          <tr>
            <td>Extract Year</td>
            <td>Get year from date</td>
            <td>YEAR(date)</td>
            <td>EXTRACT(YEAR FROM date), DATE_PART('year', date)</td>
            <td>STRFTIME(date, '%Y')</td>
          </tr>
          <tr>
            <td>Extract Month</td>
            <td>Get month from date</td>
            <td>MONTH(date)</td>
            <td>EXTRACT(MONTH FROM date), DATE_PART('month', date)</td>
            <td>STRFTIME(date, '%m')</td>
          </tr>
          <tr>
            <td>Extract Day</td>
            <td>Get day from date</td>
            <td>DAY(date), DAYOFMONTH(date)</td>
            <td>EXTRACT(DAY FROM date), DATE_PART('day', date)</td>
            <td>STRFTIME(date, '%d')</td>
          </tr>
          <tr>
            <td>Date Difference</td>
            <td>Days between dates</td>
            <td>DATEDIFF(end, start)</td>
            <td>(end - start), AGE(end, start)</td>
            <td>JULIANDAY(end) - JULIANDAY(start)</td>
          </tr>
          <tr>
            <td>Date Add</td>
            <td>Add interval to date</td>
            <td>DATE_ADD(date, INTERVAL n DAY), ADDDATE()</td>
            <td>date + INTERVAL 'n days', (date + 'n days'::INTERVAL)</td>
            <td>DATE(date, '+n days')</td>
          </tr>
        </tbody>
      </table>

      <h3>Conditional and Other Functions</h3>
      <table style={{ textAlign: "center", marginBottom: "40px" }}>
        <caption>Conditional expressions and utility functions</caption>
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
            <td>Random</td>
            <td>Random number</td>
            <td>RAND(), RAND(n)</td>
            <td>RANDOM(), SETSEED()</td>
            <td>RANDOM(), ABS(RANDOM()) % n</td>
          </tr>
          <tr>
            <td>Null Check</td>
            <td>Check for NULL</td>
            <td>IS NULL, ISNOT NULL</td>
            <td>IS NULL, IS NOT NULL</td>
            <td>IS NULL, IS NOT NULL</td>
          </tr>
          <tr>
            <td>Coalesce</td>
            <td>First non-NULL value</td>
            <td>COALESCE(val1, val2, ...), IFNULL(val1, val2)</td>
            <td>COALESCE(val1, val2, ...)</td>
            <td>COALESCE(val1, val2, ...)</td>
          </tr>
          <tr>
            <td>If/Then/Else</td>
            <td>Conditional expression</td>
            <td>IF(cond, val1, val2), CASE WHEN ... THEN ... ELSE ... END</td>
            <td>CASE WHEN ... THEN ... ELSE ... END</td>
            <td>CASE WHEN ... THEN ... ELSE ... END</td>
          </tr>
          <tr>
            <td>Greatest/Least</td>
            <td>Maximum/Minimum of values</td>
            <td>GREATEST(val1, val2, ...), LEAST(val1, val2, ...)</td>
            <td>GREATEST(val1, val2, ...), LEAST(val1, val2, ...)</td>
            <td>MAX(val1, val2, ...), MIN(val1, val2, ...)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
